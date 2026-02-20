export const metadata = {
  title: "O Canto dos Anjos",
};

export default function OCantoDosAnjos() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/religioso/O-Canto-dos-Anjos/O\ Canto\ dos\ Anjos\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/O Canto dos Anjos.jpg"
            alt="O Canto dos Anjos"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">O Canto dos Anjos</h1>

          <span>3h05 min | ✨ Religioso/ Esperança</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,9/10</p>
          </div>

          <p className="sinopse">
            Um coral religioso testemunha um acontecimento que marca suas vidas.
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
