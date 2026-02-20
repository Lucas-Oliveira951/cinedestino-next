import Header from "../../sistema/components/header";
import { cookies } from "next/headers";
import "./catalogo.css";

export const metadata = {
  title: "Catálogo",
};

export default async function CatalogoLayout({ children }) {
  const cookieStore = await cookies();

  const fotoPerfil =
    cookieStore.get("foto_perfil")?.value ||
    "https://oukwiyxbkodrigcrstsu.supabase.co/storage/v1/object/public/fotos-perfil/foto_padrao/default-user.png";

  return (
    <>
      <Header variant="filme" showSearch fotoPerfil={fotoPerfil} />
      {children}
    </>
  );
}
