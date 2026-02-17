export default function AUltimaCapela() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/a-ultima-capela/A\ Última\ Capela\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/A Última Capela.jpg"
            alt="A Última Capela"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">A Última Capela</h1>

          <span>3h33 min | 🕯️ Drama / Esperança</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            A história de um jovem que encontra força na fé para transformar sua comunidade em meio às adversidades.
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
