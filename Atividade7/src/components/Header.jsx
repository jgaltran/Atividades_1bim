// Componente Header
// Recebe a prop "titulo" e a renderiza como título principal do blog.
// Aceita "children" para compor o componente <Navigation> internamente.

function Header({ titulo, children }) {
  return (
    <header>
      <h1>{titulo}</h1>
      {children}
    </header>
  )
}

export default Header
