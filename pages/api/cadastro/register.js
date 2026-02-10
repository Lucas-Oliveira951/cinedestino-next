import { pool } from '../../../lib/db';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Inserir usuário
    const insertQuery = `
      INSERT INTO usuarios (nome, email, senha)
      VALUES ($1, $2, $3)
      RETURNING id
    `;
    const result = await pool.query(insertQuery, [nome, email, hashedPassword]);
    const id = result.rows[0].id;

    // Gerar token de cadastro
    const tokenCadastro = crypto.randomBytes(32).toString('hex');

    const updateQuery = `
      UPDATE usuarios
      SET token_cadastro = $1
      WHERE id = $2
    `;
    await pool.query(updateQuery, [tokenCadastro, id]);

    return res.status(200).json({
      message: 'Conta criada com sucesso!',
      tokenCadastro,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao criar usuário' });
  }
}