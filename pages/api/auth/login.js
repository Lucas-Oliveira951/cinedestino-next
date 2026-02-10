import { pool } from '../../../lib/db'
import bcrypt from 'bcryptjs'
import cookie from 'cookie'
import crypto from 'crypto'

const rateLimit = new Map()

const MAX_ATTEMPTS = 5
const WINDOW_MS = 60 * 1000 // 1 minuto

function checkRateLimit(ip) {
  const now = Date.now()

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, start: now })
    return true
  }

  const data = rateLimit.get(ip)

  if (now - data.start > WINDOW_MS) {
    rateLimit.set(ip, { count: 1, start: now })
    return true
  }

  if (data.count >= MAX_ATTEMPTS) {
    return false
  }

  data.count++
  rateLimit.set(ip, data)
  return true
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  // IP
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.socket.remoteAddress ||
    'unknown'

  // Rate limit
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      message: 'Muitas tentativas. Tente novamente em alguns minutos.',
    })
  }

  const { email, senha } = req.body

  // Validação
  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' })
  }

  try {
    // Busca usuário
    const { rows } = await pool.query(
      'SELECT id, senha, foto_perfil FROM usuarios WHERE email = $1 LIMIT 1',
      [email]
    )

    if (rows.length === 0) {
      return res.status(401).json({
        message: 'Email ou senha incorretos! Tente novamente.',
      })
    }

    const usuario = rows[0]

    // Verifica senha
    const senhaOk = await bcrypt.compare(senha, usuario.senha)
    if (!senhaOk) {
      return res.status(401).json({
        message: 'Email ou senha incorretos! Tente novamente.',
      })
    }

    // Token
    const token = crypto.randomBytes(32).toString('hex')

    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24)

    await pool.query(
      `
      UPDATE usuarios
      SET token_login = $1,
          token_login_expires_at = $2
      WHERE id = $3
      `,
      [token, expiresAt, usuario.id]
    )

    // Cookies
    res.setHeader('Set-Cookie', [
      cookie.serialize('token_login', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
      }),
      cookie.serialize(
        'foto_perfil',
        usuario.foto_perfil ||
          'https://oukwiyxbkodrigcrstsu.supabase.co/storage/v1/object/public/fotos-perfil/foto_padrao/default.png',
        {
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24,
        }
      ),
    ])

    return res.status(200).json({
      message: 'Login realizado com sucesso! Redirecionando...',
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Erro interno' })
  }
}
