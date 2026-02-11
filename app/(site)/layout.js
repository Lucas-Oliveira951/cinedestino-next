import "./home.css";
import Header from "../sistema/components/header"

export default function SiteLayout({ children }) {
  return (
    <>
    <Header variant="public" />
      {children}
    </>
  );
}
