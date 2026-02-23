## Cinedestino 🎬

Cinedestino é uma plataforma fictícia de filmes católicos, com conteúdos criados com auxílio de IA (ChatGPT para roteiros e descrições e Gemini para imagens).O projeto foi desenvolvido em dupla com meu amigo e colega de curso Lucas Batista, e atualmente está em sua versão mais moderna utilizando Next.js 16.1.4 (Turbopack). Com toda certeza esse projeto é um marco enorme na minha jornada como desenvolvedor, simplesmente é meu primeiro projeto que possui uma versão responsiva para Desktops, Tablets e Celulares.

## 📌 Sobre o Projeto

Cinedestino é um site de catálogo de filmes católicos fictícios. O sistema é composto por:

### 🛠️ Sistema de cadastro e Login com autenticação por token

Este projeto implementa um sistema completo de cadastro e login de usuários utilizando autenticação baseada em token, sem dependência de sessões tradicionais. O objetivo é garantir segurança, escalabilidade e organização no controle de acesso.

### 📑 Cadastro de Usuário

O sistema permite que novos usuários se cadastrem informando um endereço de e-mail e uma senha.

Para garantir a segurança das credenciais:

- **As senhas não são armazenadas em texto puro**

- **É utilizado bcryptjs para criptografia**

- **Apenas o hash da senha é salvo no banco de dados**

Após o cadastro, o sistema pode gerar um token temporário para validar etapas específicas do processo, impedindo acessos indevidos.

### 🤳🏽 Foto de Perfil e Armazenamento

A foto de perfil enviada no cadastro é armazenada no Supabase Storage, e apenas a URL pública da imagem é salva no banco de dados (PostgreSQL via Supabase).

<img width="1612" height="582" alt="Captura de tela 2026-02-23 094407" src="https://github.com/user-attachments/assets/ec77ee91-c7da-4186-ac1c-4b5b47967215" />

Isso permite que a imagem seja facilmente recuperada e exibida sempre que o usuário estiver autenticado no sistema.

Caso o usuário não defina uma foto de perfil, o sistema automaticamente define uma imagem padrão.

### 🎲 Banco de Dados

O banco de dados do projeto é hospedado no Supabase, utilizando PostgreSQL como base.

<img width="357" height="438" alt="Captura de tela 2026-02-22 191653" src="https://github.com/user-attachments/assets/b82a2c67-ba1e-4b6f-a0ff-4f9158ec9eaa" />

Nele são armazenadas todas as informações essenciais do usuário, incluindo:

- **ID do usuário**

- **Nome**

- **E-mail**

- **Hash da senha**

- **URL da foto de perfil**

- **Token de login**

- **Data de expiração do token**

🔐 Login e Autenticação por Token

No processo de login, o usuário informa seu e-mail e senha.

<img width="446" height="431" alt="Captura de tela 2026-02-23 102941" src="https://github.com/user-attachments/assets/6ba865c4-57b1-448d-9915-39e57a4827d5" />

<img width="452" height="510" alt="Captura de tela 2026-02-23 103059" src="https://github.com/user-attachments/assets/f2f04c3d-3a45-44c0-979b-a0dbe8dabb77" />

O sistema:

Busca o usuário no banco de dados

- **Utiliza bcrypt.compare() para validar a senha**

- **Gera um token criptograficamente seguro com crypto.randomBytes(32)**

- **Define validade de 24 horas para o token**

Esse token é:

- **Salvo no banco de dados (Supabase/PostgreSQL)**

- **Enviado ao navegador por meio de um cookie seguro**

O cookie é configurado com as flags:

- **HttpOnly (impede acesso via JavaScript)**

- **Secure (transmitido apenas em HTTPS em produção)**

- **SameSite: "lax" (proteção contra CSRF)**

Se o e-mail ou senha forem preenchidos incorretamente, o sistema retorna erro de autenticação.

<img width="458" height="521" alt="Captura de tela 2026-02-23 103144" src="https://github.com/user-attachments/assets/e3f5b124-733a-45f5-b798-f2e8d963d957" />
