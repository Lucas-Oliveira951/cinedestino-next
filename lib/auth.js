import cookie from 'cookie';
import { pool } from './db';

export async function getUserFromRequest(req) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.token_login;

  if (!token) return null;

  const { rows } = await pool.query(
    `
    SELECT id, email
    FROM usuarios
    WHERE token_login = $1
      AND token_login_expires_at > NOW()
    `,
    [token]
  );

  if (rows.length === 0) return null;

  return rows[0];
}
