export default function EntreRosariosEEstrelas() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/entre-rosarios-e-estrelas/Entre\ Rosários\ E\ Estrelas\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Entre Rosários e Estrelas.jpg"
            alt="Entre Rosários e Estrelas"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Entre Rosários e Estrelas</h1>

          <span>1h50 min | 🌠 Poético / Reflexivo</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,5/10</p>
          </div>

          <p className="sinopse">
            Uma jovem astrônoma redescobre a fé ao perceber que o universo e a oração podem revelar o mesmo mistério divino.
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
