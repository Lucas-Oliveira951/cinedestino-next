export const metadata = {
  title: "A Cruz do Império",
};

export default function ACruzDoImperio() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/historico/A-Cruz-do-Imperio/A\ Cruz\ do\ Império\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/A Cruz do império.jpg"
            alt="A Cruz do Império"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">A Cruz do Império</h1>

          <span>3h33 min | 🕯️ Histórico / Esperança</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,4/10</p>
          </div>

          <p className="sinopse">
            Um soldado romano testemunha um acontecimento misterioso que transforma sua visão de fé.
          </p>

          <div className="buttons">
            <a href="#" className="button-trailer">Ver Trailer</a>
            <a href="#" className="button-quiz">Ver Agora</a>
          </div>
        </div>

      </div>

    </main>
  )
}
