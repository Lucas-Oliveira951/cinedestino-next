export default function MilagreNoDeserto() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/religioso/Milagre-no-Deserto/Milagre\ No\ Deserto\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Milagre no Desert.jpg"
            alt="Milagre no Deserto"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Milagre no Deserto</h1>

          <span>3h35 min | ⛪ Drama / Religioso</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,1/10</p>
          </div>

          <p className="sinopse">
            Um viajante perdido encontra sinais divinos que o guiam de volta para casa.
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
