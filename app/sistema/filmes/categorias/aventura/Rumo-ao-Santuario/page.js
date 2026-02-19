export default function RumoAoSantuario() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/Aventura/Rumo-ao-Santuario/Rumo\ Ao\ Santuário\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Rum ao Santuário.jpg"
            alt="Rumo ao Santuário"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Rumo ao Santuário</h1>

          <span>1h20 min | 🛫 Drama / Aventura</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Um peregrino enfrenta desafios naturais enquanto segue rumo a um local sagrado.
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
