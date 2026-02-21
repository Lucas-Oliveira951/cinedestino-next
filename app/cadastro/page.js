"use client";

import { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [token, setToken] = useState("");

  // mensagens do cadastro
  const [msgCadastro, setMsgCadastro] = useState("");
  const [tipoCadastro, setTipoCadastro] = useState(""); // erro | sucesso

  // mensagens do upload
  const [msgUpload, setMsgUpload] = useState("");
  const [tipoUpload, setTipoUpload] = useState(""); // erro | sucesso

  /* Validação */
  const validarCampos = () => {
    if (!nome && !email && !senha) {
      setTipoCadastro("erro");
      setMsgCadastro("Campos não preenchidos!");
      return false;
    }

    if (!nome && email && senha) {
      setTipoCadastro("erro");
      setMsgCadastro("Nome não preenchido!");
      return false;
    }

    if (nome && !email && senha) {
      setTipoCadastro("erro");
      setMsgCadastro("Email não preenchido!");
      return false;
    }

    if (nome && email && !senha) {
      setTipoCadastro("erro");
      setMsgCadastro("Senha não preenchida!");
      return false;
    }

    if (!nome && !email && senha) {
      setTipoCadastro("erro");
      setMsgCadastro("Nome e email não preenchidos!");
      return false;
    }

    if (nome && !email && !senha) {
      setTipoCadastro("erro");
      setMsgCadastro("Email e senha não preenchidos!");
      return false;
    }

    if (!nome && email && !senha) {
      setTipoCadastro("erro");
      setMsgCadastro("Nome e senha não preenchidos!");
      return false;
    }

    return true;
  };

  /* Cadastro */
  const handleCadastro = async (e) => {
    e.preventDefault();

    setMsgCadastro("");
    setMsgUpload("");

    if (!validarCampos()) return;

    try {
      const res = await fetch("/api/cadastro/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        setTipoCadastro("erro");
        setMsgCadastro(data.message || "Erro no cadastro");
        return;
      }

      setTipoCadastro("sucesso");
      setMsgCadastro("Conta criada com sucesso! Redirecionando...");

      setTimeout(() => {
        setToken(data.tokenCadastro);
      }, 2000);
    } catch {
      setTipoCadastro("erro");
      setMsgCadastro("Erro interno do servidor");
    }
  };

  /* Preview da foto */
  const handleSelecionarFoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  /* Upload da foto */
  const handleUploadFoto = async (e) => {
    e.preventDefault();

    setMsgUpload("");

    if (!foto) {
      setTipoUpload("erro");
      setMsgUpload("Selecione uma foto antes de continuar");
      return;
    }

    const formData = new FormData();
    formData.append("foto_perfil", foto);

    try {
      const res = await fetch(`/api/cadastro/uploadPhoto?token=${token}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setTipoUpload("erro");
        setMsgUpload(data.message || "Erro ao enviar imagem");
        return;
      }

      setTipoUpload("sucesso");
      setMsgUpload("Imagem enviada! Redirecionando...");

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch {
      setTipoUpload("erro");
      setMsgUpload("Erro interno do servidor");
    }
  };

  /* Render */
  return (
    <main className="conteudo">
      <div className="container-login-cadastro">
        {/* Formulário de Cadastro */}
        {!token ? (
          <form onSubmit={handleCadastro}>
            <h1>Crie sua conta gratuita</h1>

            <label>Nome Completo</label>
            <input
              className="inputUser"
              id="nome"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              className="inputUser"
              placeholder="Digite seu e-mail"
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

            <input id="Button" type="submit" value="Criar uma conta" />

            {/* Mensagem do cadastro */}
            {msgCadastro && (
              <div className={`mensagem ${tipoCadastro}`}>
                <i
                  className={
                    tipoCadastro === "erro"
                      ? "fa-solid fa-circle-xmark"
                      : "fa-solid fa-circle-check"
                  }
                ></i>
                {msgCadastro}
              </div>
            )}

            {/* Link login */}
            <p className="login-option">
              Já criou uma conta? <a href="/login">Login</a>
            </p>
          </form>
        ) : (
          // Formulário de upload
          <form onSubmit={handleUploadFoto}>
            <h1 className="titulo-escolha-uma-foto">
              Escolha uma foto para seu perfil
            </h1>

            {preview && (
              <div className="preview">
                <img src={preview} alt="Preview" className="preview-foto" />
              </div>
            )}

            <label className="botao-upload">
              <div className="botao-foto">
                {preview ? "Selecionar outra foto" : "Selecionar foto"}
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  hidden
                  onChange={handleSelecionarFoto}
                />
              </div>
            </label>

            <input id="Button" type="submit" value="Escolher foto" />

            {/* Mensagem do upload */}
            {msgUpload && (
              <div className={`mensagem ${tipoUpload}`}>
                <i
                  className={
                    tipoUpload === "erro"
                      ? "fa-solid fa-circle-xmark"
                      : "fa-solid fa-circle-check"
                  }
                ></i>
                {msgUpload}
              </div>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
