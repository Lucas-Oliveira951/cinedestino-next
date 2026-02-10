export default function PromessaQuebrada() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/drama/Promessa-Quebrada/Promessa\ Quebrada\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Promessa Quebrada.jpg"
            alt="Promessa Quebrada"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Promessa Quebrada</h1>

          <span>2h20 min | 🤝 Drama /Inspiração</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,8/10</p>
          </div>

          <p className="sinopse">
            Um jovem promete mudar de vida, mas luta contra as próprias fraquezas.
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
