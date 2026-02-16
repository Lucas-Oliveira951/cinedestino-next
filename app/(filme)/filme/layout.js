import "./filme.css";
import Header from "../../sistema/components/header";

export default function FilmeLayout({ children }) {
  return (
    <>
      <Header variant="filme-public" showSearch={true} />
      <div>
        {children}
      </div>
    </>
  );
}
