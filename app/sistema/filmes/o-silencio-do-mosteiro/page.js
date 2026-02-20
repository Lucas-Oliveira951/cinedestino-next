export const metadata = {
  title: "O Silêncio do Mosteiro",
};

export default function oSilencioDoMosteiro() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/o-silencio-do-mosteiro/O\ Silêncio\ do\ Mosteiro\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/O Silêncio do Mosteiro.jpg"
            alt="O Silêncio do Mosteiro"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">O Silêncio do Mosteiro</h1>

          <span>1h33 min | 🏰 Suspense / Reflexão</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,0/10</p>
          </div>

          <p className="sinopse">
            No interior de um mosteiro isolado, segredos do passado vêm à tona e revelam a força da oração e do silêncio.
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
