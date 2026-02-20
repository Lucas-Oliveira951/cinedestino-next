export const metadata = {
  title: "A Luz do Perdão",
};

export default function ALuzDoPerdao() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/inspiracao/A-Luz-do-Perdao/A\ Luz\ do\ Perdão\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/A Luz do Perdão.jpg"
            alt="A Luz do Perdão"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">A Luz do Perdão</h1>

          <span>1h50 min | ✨ Drama / Espiritualidade / Inspiração</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 9,2/10</p>
          </div>

          <p className="sinopse">
            Uma mulher marcada por erros do passado encontra em um simples ato de perdão a força para recomeçar e inspirar outros.
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
