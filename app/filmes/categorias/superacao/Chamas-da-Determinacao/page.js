export default function ChamasDaDeterminacao() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/superacao/Chamas-da-Determinacao/Chamas\ da\ Determinação\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Chamas de Determinação.jpg"
            alt="Chamas da Determinação"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Chamas da Determinação</h1>

          <span>2h30 min | 💪🏽 Esperança / Superação</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,9/10</p>
          </div>

          <p className="sinopse">
            Um atleta ferido busca forças na fé para voltar a competir.
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
