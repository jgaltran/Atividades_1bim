// Componente Navigation
// Recebe a prop "links" (array de objetos { label, href })
// e renderiza cada item como um <a> dentro do <nav>.

function Navigation({ links }) {
  return (
    <nav>
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
