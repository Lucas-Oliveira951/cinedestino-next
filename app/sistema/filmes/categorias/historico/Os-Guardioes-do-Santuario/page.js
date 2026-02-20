export const metadata = {
  title: "Os Guardiões do Santuário",
};

export default function OsGuardioesDoSantuario() {
  return (
    <main 
        className="filme-page"
        style={{backgroundImage: "url('/filmes-background/historico/Os-Guardioes-do-Santuario/Os\ Guardiões\ do\ Santuário\ -\ background\ \(Desktop\ \ Versão\).jpg')"}}
    >

      <div className="container-poster">

        <div className="poster">
          <img
            src="/assets/Image/Os Guardiões do Santuário.jpg"
            alt="Os Guardiões do Santuário"
            title="Imagem Criada pelo Gemini IA"
          />
        </div>

        <div className="info-filme">
          <h1 className="titulo-filme">Os Guardiões do Santuário</h1>

          <span>3h33 min | ⚔️ Ação / Histórico</span>

          <div className="nota-filme">
            <p><i className="fa-solid fa-star"></i> 8,9/10</p>
          </div>

          <p className="sinopse">
            Um grupo de monges precisa proteger seu monastério durante tempos turbulentos.
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
