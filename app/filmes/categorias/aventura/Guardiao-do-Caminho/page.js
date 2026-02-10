export default function GuardiaoDoCaminho() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/aventura/Guardiao-do-Caminho/Guardião\ Do\ Caminho\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Guardião do Caminho.jpg"
            alt="Guardião do Caminho"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Guardião do Caminho</h1>

          <span>1h10 min | 🛡️ Aventura / Batalha</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Um jovem aventureiro precisa proteger um símbolo religioso de saqueadores.
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
