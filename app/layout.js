// import "./globals.css"
import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800","900","1000"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata = {
  title: "CineDestino",
  description: "Descubra filmes e destinos incríveis",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
