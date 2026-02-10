import { pool } from "@/lib/db";
import cookie from "cookie";

export default async function handler(req, res) {
  //Lê o cookie
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies.token_login;

  //Invalida token no banco
  if (token) {
    await pool.query(
      `
      UPDATE usuarios
      SET token_login = NULL,
          token_login_expires_at = NULL
      WHERE token_login = $1
      `,
      [token]
    );
  }

  //Apaga SOMENTE o token de login
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token_login", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    })
  );

  //Redireciona
  res.writeHead(302, { Location: "/login" });
  res.end();
}
