import { useState } from 'react'
import './App.css'

function dataFormatada() {
  return new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

function App() {
  const [tarefas, setTarefas] = useState([])
  const [inputTexto, setInputTexto] = useState('')

  function adicionarTarefa(evento) {
    evento.preventDefault()
    if (inputTexto.trim() === '') return

    const novaTarefa = {
      id: Date.now(),
      text: inputTexto.trim(),
    }

    setTarefas([...tarefas, novaTarefa])
    setInputTexto('')
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id)
    setTarefas(novaLista)
  }

  return (
    <div className="container">

      <div className="cabecalho">
        <h1 className="titulo">To-Do List</h1>
        <p className="subtitulo">{dataFormatada()}</p>
      </div>

      <form className="formulario" onSubmit={adicionarTarefa}>
        <input
          type="text"
          className="input-tarefa"
          placeholder="Adicionar nova tarefa..."
          value={inputTexto}
          onChange={(e) => setInputTexto(e.target.value)}
        />
        <button type="submit" className="btn-adicionar">
          Adicionar
        </button>
      </form>

      {tarefas.length > 0 && (
        <p className="contador">{tarefas.length} tarefa(s)</p>
      )}

      {tarefas.length === 0 ? (
        <p className="lista-vazia">Nenhuma tarefa ainda. Que tal começar? 😊</p>
      ) : (
        <ul className="lista">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="item-tarefa">
              <div className="item-esquerda">
                <div className="item-bolinha"></div>
                <span className="item-texto">{tarefa.text}</span>
              </div>
              <button
                className="btn-remover"
                onClick={() => removerTarefa(tarefa.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default App