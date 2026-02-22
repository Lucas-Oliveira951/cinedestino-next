import Header from "../sistema/components/header";
import "./sobre.css";

//Titulo da Página
export const metadata = {
  title: "Sobre",
};

export default function SobreLayout({ children }) {
  return (
    <>
      <Header showSearch variant="filme-public" />
      {children}
    </>
  );
}
