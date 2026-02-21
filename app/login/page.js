"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState(""); // erro | sucesso

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensagem("");

    if (!email && !senha) {
      setTipo("erro");
      setMensagem("Preencha email e senha");
      return;
    }

    if (!email) {
      setTipo("erro");
      setMensagem("Email não preenchido");
      return;
    }

    if (!senha) {
      setTipo("erro");
      setMensagem("Senha não preenchida");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        setTipo("erro");
        setMensagem(data.message || "Erro ao fazer login");
        return;
      }

      setTipo("sucesso");
      setMensagem("Login realizado com sucesso! Redirecionando...");

      setTimeout(() => {
        router.push("/sistema");
      }, 2000);
    } catch {
      setTipo("erro");
      setMensagem("Erro interno do servidor");
    }
  };

  return (
    <main className="conteudo">
      <div className="container-login-cadastro">
        <form onSubmit={handleLogin}>
          <h1 className="titulo-entrar">Entre na sua conta gratuita</h1>

          <label>Email</label>
          <input
            type="email"
            id="email"
            className="inputUser"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            id="Senha"
            className="inputUser"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <input id="Button" type="submit" value="Entrar" />

          {mensagem && (
            <div className={`mensagem ${tipo}`}>
              {tipo === "erro" ? (
                <i className="fa-solid fa-circle-xmark"></i>
              ) : (
                <i className="fa-solid fa-circle-check"></i>
              )}
              {mensagem}
            </div>
          )}

          <p className="login-option">
            Não tem conta? <a href="/cadastro">Criar conta</a>
          </p>
        </form>
      </div>
    </main>
  );
}
