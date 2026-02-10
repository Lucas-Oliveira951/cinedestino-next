export default function oMilagreEmRoma() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes/o-milagre-em-roma/O\ Milagre\ em\ Roma\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/O Milagre em Roma.jpg"
            alt="O Milagre em Roma"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">O Milagre em Roma</h1>

          <span>1h30 min | 🕊️ Histórico / Religioso</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,5/10</p>
          </div>

          <p className="sinopse">
            Durante a Idade Média, uma pequena capela no coração de Roma torna-se palco de um milagre que muda a vida de todos ao redor.
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
