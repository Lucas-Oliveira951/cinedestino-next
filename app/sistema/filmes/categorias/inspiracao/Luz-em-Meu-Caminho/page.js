export const metadata = {
  title: "Luz em Meu Caminho",
};

export default function LuzEmMeuCaminho() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/inspiracao/luz-em-meu-caminho/Luz\ em\ Meu\ Caminho\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Luz em Meu Caminho.jpg"
            alt="Luz em meu Caminho"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Luz em Meu Caminho</h1>

          <span>3h50 min | 🌅 Drama / Inspiração</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,6/10</p>
          </div>

          <p className="sinopse">
            Uma jovem missionária leva esperança a uma vila esquecida e descobre que, às vezes, a maior transformação vem de dentro.
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
