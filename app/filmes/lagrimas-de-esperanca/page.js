export default function LagrimasDeEsperanca() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/lagrimas-de-esperanca/Lágrimas\ de\ Esperança\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Lágrimas de Esperança.jpg"
            alt="Lágrimas de Esperança"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Lágrimas de Esperança</h1>

          <span>2h33 min | 🌹 Drama / Fé</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,9/10</p>
          </div>

          <p className="sinopse">
            Após uma tragédia, uma jovem encontra consolo e força em sua devoção, inspirando todos à sua volta.
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
