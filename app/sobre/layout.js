import Header from "../sistema/components/header"
import "./sobre.css";

export default function SobreLayout({ children }) {
  return (
    <>
      <Header showSearch variant="filme-public" />
      {children}
    </>
  );
}
