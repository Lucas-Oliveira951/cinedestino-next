import { pool } from "../../../lib/db";
import { IncomingForm } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const token = req.query.token;
  if (!token) {
    return res.status(401).json({ message: "Token não informado" });
  }

  try {
    //Verifica o token no banco
    const result = await pool.query(
      "SELECT id FROM usuarios WHERE token_cadastro = $1",
      [token],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Token inválido ou expirado" });
    }

    const userId = result.rows[0].id;

    //Processa o formulário (upload)
    const form = new IncomingForm({
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      try {
        if (err) {
          console.error("Erro formidable:", err);
          return res.status(500).json({ message: "Erro ao processar arquivo" });
        }

        const foto = files.foto_perfil;
        if (!foto) {
          return res.status(400).json({ message: "Nenhuma foto enviada" });
        }

        const file = Array.isArray(foto) ? foto[0] : foto;

        const ext = file.originalFilename.split(".").pop().toLowerCase();

        if (!["jpg", "jpeg", "png"].includes(ext)) {
          return res
            .status(400)
            .json({ message: "Formato inválido. Use JPG ou PNG" });
        }

        const fileData = fs.readFileSync(file.filepath);

        //Upload no Supabase Storage
        const bucket = "fotos-perfil";
        const fileName = `${userId}_${Date.now()}.${ext}`;
        const path = `usuarios/${fileName}`;

        const uploadRes = await fetch(
          `${SUPABASE_URL}/storage/v1/object/${bucket}/${path}?upsert=true`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
              "Content-Type": file.mimetype,
            },
            body: fileData,
          },
        );

        if (!uploadRes.ok) {
          const errorText = await uploadRes.text();
          console.error("Erro Supabase:", errorText);
          return res
            .status(500)
            .json({ message: "Erro ao enviar imagem ao Supabase" });
        }

        const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`;

        //Atualiza usuário no banco
        await pool.query(
          "UPDATE usuarios SET foto_perfil = $1, token_cadastro = NULL WHERE id = $2",
          [publicUrl, userId],
        );

        return res.status(200).json({
          message: "Foto enviada com sucesso",
          url: publicUrl,
        });
      } catch (e) {
        console.error("Erro interno upload:", e);
        return res.status(500).json({ message: "Erro interno no servidor" });
      }
    });
  } catch (err) {
    console.error("Erro geral:", err);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
