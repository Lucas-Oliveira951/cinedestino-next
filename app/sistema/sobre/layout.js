import { cookies } from "next/headers";
import Header from "../../sistema/components/header";
import "./sobre.css";

export default async function SobreLayout({ children }) {
  const cookieStore = await cookies();

  const fotoPerfil =
    cookieStore.get("foto_perfil")?.value ||
    "https://oukwiyxbkodrigcrstsu.supabase.co/storage/v1/object/public/fotos-perfil/foto_padrao/default.png";

  return (
    <>
      <Header variant="filme" showSearch fotoPerfil={fotoPerfil} />
      {children}
    </>
  );
}
