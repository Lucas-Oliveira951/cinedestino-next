export default function EntreADorEAGraca() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/drama/Entre-a-Dor-e-a-Graca/Entre\ a\ Dor\ e\ a\ Graça\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Entre a Dor e a Graça.jpg"
            alt="Entre a Dor e a Graça"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Entre a Dor e a Graça</h1>

          <span>1h10 min | ✨ Drama / Lágrimas</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Uma médica cristã se vê dividida entre salvar vidas e enfrentar sua própria doença.
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
