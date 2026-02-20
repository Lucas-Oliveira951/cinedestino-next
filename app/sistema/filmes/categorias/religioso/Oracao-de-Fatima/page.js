export const metadata = {
  title: "Oração de Fátima",
};

export default function OracaoDeFatima() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/religioso/Oracao-de-Fatima/Oração\ de\ Fátima\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Oração de Fátima.jpg"
            alt="Oração de Fátima"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Oração de Fátima</h1>

          <span>3h3 min | 🙏🏽 Religioso / Histórico</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Uma menina tem sua fé fortalecida após presenciar um evento inexplicável.
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
