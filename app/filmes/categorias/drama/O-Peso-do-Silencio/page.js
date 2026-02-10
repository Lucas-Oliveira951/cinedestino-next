export default function OPesoDoSilencio() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/drama/O-Peso-do-Silencio/O\ Peso\ Do\ Silêncio\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/O Peso Do Silêncio.jpg"
            alt="O Peso do Silêncio"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">O Peso do Silêncio</h1>

          <span>3h33 min | 💔 Drama / Esperança</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,8/10</p>
          </div>

          <p className="sinopse">
            Uma mulher enfrenta o passado e busca reconciliação com a família.
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
