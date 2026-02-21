import { pool } from "../../../lib/db";
import bcrypt from "bcrypt";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  let { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios" });
  }

  email = email.toLowerCase().trim();

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const tokenCadastro = crypto.randomBytes(32).toString("hex");

    const insertQuery = `
      INSERT INTO usuarios (nome, email, senha, token_cadastro)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;

    const result = await pool.query(insertQuery, [
      nome,
      email,
      hashedPassword,
      tokenCadastro,
    ]);

    return res.status(201).json({
      message: "Conta criada com sucesso!",
      tokenCadastro,
    });
  } catch (err) {
    console.error(err);

    // Tratamento específico para email duplicado
    if (err.code === "23505") {
      return res.status(400).json({
        message: "Este email já está cadastrado",
      });
    }

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
}
