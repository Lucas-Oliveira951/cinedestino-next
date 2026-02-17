export default function UmNovoAmanha() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/superacao/Um-Novo-Amanha/Um\ Novo\ Amanhã\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Um Novo Amanhã.jpg"
            alt="Um Novo Amanhã"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Um Novo Amanhã</h1>

          <span>2h10 min | 🕯️ Superação / Religioso</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,2/10</p>
          </div>

          <p className="sinopse">
            Após um acidente, um músico aprende a tocar novamente e inspira outros.
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
