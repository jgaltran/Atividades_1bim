// Componente Article
// Recebe as props: titulo, autor, data, conteudo (array de parágrafos),
// imagem (src e alt) e legendaImagem.
// Todos os dados são passados pelo componente pai <App>.

function Article({ titulo, autor, data, conteudo, imagem, legendaImagem }) {
  return (
    <main>
      <article>
        <h2>{titulo}</h2>

        {/* Metadados do post */}
        <p>
          <strong>Autor:</strong> {autor} &nbsp;|&nbsp;
          <strong>Data:</strong> {data}
        </p>

        {/* Parágrafos do conteúdo renderizados dinamicamente */}
        {conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}

        {/* Imagem ilustrativa do post */}
        <figure>
          <img src={imagem.src} alt={imagem.alt} />
          <figcaption>{legendaImagem}</figcaption>
        </figure>
      </article>
    </main>
  )
}

export default Article
