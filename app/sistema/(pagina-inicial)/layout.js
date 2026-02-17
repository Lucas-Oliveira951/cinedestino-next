import { cookies, headers } from "next/headers";
import Header from "../components/header";
import "../../assets/css/style.css";

export default async function SistemaLayout({ children }) {
  const cookieStore = await cookies();
  const headerList = await headers();

  const pathname = headerList.get("x-pathname") || "";

  const fotoPerfil =
    cookieStore.get("foto_perfil")?.value ||
    "https://oukwiyxbkodrigcrstsu.supabase.co/storage/v1/object/public/fotos-perfil/foto_padrao/default.png";

  const isFilmes = pathname.startsWith("/sistema/filmes");

  return (
    <div className="layout-home">
      {!isFilmes && <Header variant="home" fotoPerfil={fotoPerfil} />}
      {children}
    </div>
  );
}
