import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Article from './components/Article.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'

// ─────────────────────────────────────────────
// Dados do blog armazenados no componente <App>
// e passados para os filhos via props.
// ─────────────────────────────────────────────

function App() {
  // Dados do site / cabeçalho
  const nomeSite = 'Meu Blog de Viagens'

  // Links de navegação
  const linksNav = [
    { label: 'Home',    href: '#' },
    { label: 'Post',    href: '#' },
    { label: 'Sobre',   href: '#' },
    { label: 'Contato', href: '#' },
  ]

  // Dados do post (passados como props para <Article>)
  const post = {
    titulo: 'Minha Primeira Aventura em um Lugar Incrível',
    autor: 'Viajante Curioso',
    data: '14 de abril de 2026',
    conteudo: [
      'Viajar é uma das experiências mais enriquecedoras que podemos viver. Conhecer novos lugares, pessoas e culturas transforma nossa visão de mundo.',
      'Nesta viagem, descobri paisagens maravilhosas, provei comidas deliciosas e vivi momentos que certamente ficarão marcados para sempre.',
      'Além disso, pude aprender mais sobre os costumes locais e aproveitar cada momento dessa experiência única.',
    ],
    imagem: {
      src: 'https://img.freepik.com/fotos-gratis/paraiso-de-praia-tropical-com-palmeiras-e-agua-azul-turquesa_23-2151975534.jpg?semt=ais_hybrid&w=740&q=80',
      alt: 'Vista de uma praia do Nordeste com mar azul e areia clara',
    },
    legendaImagem: 'Vista de uma das belas praias do Nordeste brasileiro.',
  }

  // Posts relacionados (passados como prop para <Sidebar>)
  const postsRelacionados = [
    { titulo: 'Como planejar sua primeira viagem', href: '#' },
    { titulo: '5 destinos baratos para conhecer',  href: '#' },
    { titulo: 'O que levar na mala',               href: '#' },
  ]

  return (
    <>
      {/* Cabeçalho com título e navegação */}
      <Header titulo={nomeSite}>
        <Navigation links={linksNav} />
      </Header>

      {/* Conteúdo principal: post completo via props */}
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        conteudo={post.conteudo}
        imagem={post.imagem}
        legendaImagem={post.legendaImagem}
      />

      {/* Barra lateral com posts relacionados */}
      <Sidebar postsRelacionados={postsRelacionados} />

      {/* Rodapé */}
      <Footer ano={2026} nomeSite={nomeSite} />
    </>
  )
}

export default App
