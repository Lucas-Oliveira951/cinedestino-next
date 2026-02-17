import "./catalogo.css";
import Header from "../../sistema/components/header";

export default function CatalogoLayout({ children }) {
  return (
    <>
      <Header variant="filme-public" showSearch={true} />
      <div>{children}</div>
    </>
  );
}
