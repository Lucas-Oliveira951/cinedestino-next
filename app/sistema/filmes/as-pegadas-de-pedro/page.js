export default function SobOMantoDaVirgem() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/as-pegadas-de-pedro/As\ Pegadas\ de\ Pedro-\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/As Pegadas de Pedro.jpg"
            alt="As Pegadas de Pedro"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">As Pegadas de Pedro</h1>

          <span>2h33 min | ⚓ Histórico / Espiritualidade</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,0/10</p>
          </div>

          <p className="sinopse">
            Um pescador humilde revive as lições de São Pedro e descobre o verdadeiro significado da obediência e da fé.
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
