import { pool } from '../../../lib/db';

export default async function handler(req, res) {
  const session = req.cookies.session;

  if (!session) {
    return res.status(401).json({ valid: false });
  }

  try {
    const result = await pool.query(
      'SELECT id FROM usuarios WHERE token_login = $1',
      [session]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ valid: false });
    }

    return res.status(200).json({ valid: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ valid: false });
  }
}
