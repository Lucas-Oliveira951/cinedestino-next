export const metadata = {
  title: "Sob o Manto da Virgem",
};

export default function SobOMantoDaVirgem() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/sob-o-manto-da-virgem/Sob\ o\ Manto\ da\ Virgem\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Sob o Manto da Virgem.jpg"
            alt="Sob o Manto da Virgem"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Sob o Manto da Virgem</h1>

          <span>1h20 min | 💫 Religioso / Milagre</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,0/10</p>
          </div>

          <p className="sinopse">
            Quando um pequeno vilarejo enfrenta tempos difíceis, uma imagem da Virgem Maria passa a inspirar fé e esperança nos corações.
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
