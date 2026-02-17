export default function VentoDaGraca() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/inspiracao/Vento-da-Graca/Vento\ da\ Graça\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Vento da Graça.jpg"
            alt="Vento da Graça"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Vento da Graça</h1>

          <span>3h30 min | 🍃 Inspiração / Espiritual</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,9/10</p>
          </div>

          <p className="sinopse">
            Em uma cidade pequena, o vento misterioso que sopra após cada oração muda o destino de todos que acreditam.
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
