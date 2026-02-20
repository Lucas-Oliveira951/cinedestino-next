export const metadata = {
  title: "Chama do Perdão",
};

export default function ChamaDoPerdao() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/chama-do-perdao/_Chama\ do\ Perdão\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Chama do Perdão.jpg"
            alt="Chama do Perdão"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Chama do Perdão</h1>

          <span>1h10 min | 💔 Drama / Superação</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,0/10</p>
          </div>

          <p className="sinopse">
            Uma família dividida encontra a reconciliação através da fé e do poder transformador do perdão.
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
