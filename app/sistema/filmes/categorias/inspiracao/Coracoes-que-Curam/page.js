export default function CoracoesQueCuram() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/inspiracao/Coracoes-que-curam/Corações\ que\ Curam\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Corações que Curam.jpg"
            alt="Corações que Curam"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Corações que Curam</h1>

          <span>2h33 min | 💖 Drama / Fé / Inspiração</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,9/10</p>
          </div>

          <p className="sinopse">
            Após perder tudo, um médico reencontra o sentido da vida ao dedicar seu trabalho aos pobres e enfermos.
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
