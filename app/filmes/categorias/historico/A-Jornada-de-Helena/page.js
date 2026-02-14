export default function AJornadaDeHelena() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/historico/A-Jornada-de-Helena/A\ Jornada\ de\ Helena\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/A Jornada de Helena.jpg"
            alt="A Jornada de Helena"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">A Jornada de Helena</h1>

          <span>3h33 min | ⛰️ Viagem / Histórico</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,0/10</p>
          </div>

          <p className="sinopse">
            Uma cristã da antiguidade se arrisca para levar mensagens de esperança a vilas perseguidas.
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
