export default function oPeregrinoDeAssis() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/o-peregrino-de-assis/O\ Peregrino\ de\ Assis\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/O Peregrino de Assis.jpg"
            alt="O Peregrino de Assis"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">O Peregrino de Assis</h1>

          <span>3h00 min | 🚶 Aventura / Espiritualidade</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,5/10</p>
          </div>

          <p className="sinopse">
            Um homem comum decide refazer os passos de São Francisco em uma jornada de autoconhecimento e devoção.
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
