import "./login.css"

export const metadata = {
  title: "Login",
};

export default function LoginLayout({ children }) {
  return <>
  <div className="layout-login">
  {children}
  </div>
  </>
}
