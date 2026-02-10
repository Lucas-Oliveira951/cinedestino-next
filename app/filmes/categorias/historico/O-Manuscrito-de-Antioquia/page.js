export default function OManuscritoDeAntioquia() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/historico/O-Manuscrito-de-Antioquia/O\ Manuscrito\ de\ Antioquia\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/O Manuscrito de Antioquia.jpg"
            alt="O Manuscrito de Antioquia"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">O Manuscrito de Antioquia</h1>

          <span>3h40 min | ⚖️ Drama / Histórico</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Um escriba protege um texto sagrado que pode mudar a história da Igreja.
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
