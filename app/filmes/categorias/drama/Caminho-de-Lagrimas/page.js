export default function CaminhoDeLagrimas() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/drama/Caminho-de-Lagrimas/Caminho\ de\ Lágrimas\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Caminho de Lágrimas.jpg"
            alt="Caminho de Lágrimas"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Caminho de Lágrimas</h1>

          <span>3h10 min | 🏅 Drama / Vitória</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,1/10</p>
          </div>

          <p className="sinopse">
            Após perder o emprego, um pai tenta manter a fé e sustentar seus filhos.
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
