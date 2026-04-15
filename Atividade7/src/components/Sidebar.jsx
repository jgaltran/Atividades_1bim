// Componente Sidebar
// Recebe a prop "postsRelacionados" (array de objetos { titulo, href })
// e renderiza a lista de posts relacionados.

function Sidebar({ postsRelacionados }) {
  return (
    <aside>
      <h3>Posts relacionados</h3>
      <ul>
        {postsRelacionados.map((post, index) => (
          <li key={index}>
            <a href={post.href}>{post.titulo}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
