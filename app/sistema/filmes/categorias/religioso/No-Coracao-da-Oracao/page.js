export const metadata = {
  title: "No Coração da Oração",
};

export default function NoCoracaoDaOracao() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/religioso/No-Coracao-da-Oracao/No\ Coração\ da\ Oração\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/No Coração da Oração.jpg"
            alt="No Coração da Oração"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">No Coração da Oração</h1>

          <span>3h40 min | 📿Religioso / Esperança</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Uma comunidade descobre o poder da oração unida para transformar vidas.
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
