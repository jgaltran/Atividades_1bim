// Componente Footer
// Recebe a prop "ano" e "nomeSite" para exibir os direitos autorais.

function Footer({ ano, nomeSite }) {
  return (
    <footer>
      <p>
        &copy; {ano} {nomeSite}
      </p>
    </footer>
  )
}

export default Footer
