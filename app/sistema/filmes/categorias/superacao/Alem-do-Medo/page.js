export default function AlemDoMedo() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/superacao/Alem-do-Medo/Além\ do\ Medo\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Além do Medo.jpg"
            alt="Além do Medo"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Além do Medo</h1>

          <span>1h10 min | 🏆 Vitória / Superação</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Uma jovem tímida supera sua insegurança ao participar de um grupo da igreja.
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
