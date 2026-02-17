export default function NasTrilhasDaFe() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/aventura/Nas-Trilhas-da-Fe/Nas\ Trilhas\ da\ Fé\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Nas Trilhas da Fé.jpg"
            alt="Nas Trilhas da Fé"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Nas Trilhas da Fé</h1>

          <span>1h33 min | 🛣️ Aventura / Esperança</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,0/10</p>
          </div>

          <p className="sinopse">
            Três amigos viajam pelo interior do Brasil em uma missão espiritual.
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
