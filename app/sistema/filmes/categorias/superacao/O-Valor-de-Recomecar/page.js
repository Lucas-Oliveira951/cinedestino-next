export const metadata = {
  title: "O Valor de Recomeçar",
};

export default function OValorDeRecomecar() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/superacao/O-Valor-de-Recomecar/O\ Valor\ de\ Recomeçar\  -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/O Valor de Recomeçar.jpg"
            alt="O Valor de Recomeçar"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">O Valor de Recomeçar</h1>

          <span>3h00 min | ✊🏽 Superação/ Esperança</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,5/10</p>
          </div>

          <p className="sinopse">
            Um ex-dependente encontra apoio espiritual para reconstruir sua vida.
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
