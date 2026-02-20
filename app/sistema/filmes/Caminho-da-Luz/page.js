export const metadata = {
  title: "Caminho da Luz",
};

export default function CaminhoDaLuz() {
  return (
    <main 
      className="filme-page"
      style={{backgroundImage: "url('/filmes-background/caminho-da-luz/Caminho\ da\ Luz\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Caminho da Luz.jpg"
            alt="Caminho da Luz"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Caminho da Luz</h1>

          <span>1h33 min | 🎭 Drama / Inspiração</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,5/10</p>
          </div>

          <p className="sinopse">
            A história de um jovem que encontra força na fé para transformar sua
            comunidade em meio às adversidades.
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
