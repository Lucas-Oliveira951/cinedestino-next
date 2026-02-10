export default function AIlhaDaCruzPerdida() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/aventura/A-Ilha-da-Cruz-Perdida/A\ Ilha\ da\ Cruz\ Perdida\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/A Ilha da Cruz Perdida.jpg"
            alt="A Ilha da Cruz Perdida"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">A Ilha da Cruz Perdida</h1>

          <span>1h23 min | 🗡️ Aventura/ Vitória</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Exploradores buscam uma relíquia cristã desaparecida há séculos.
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
