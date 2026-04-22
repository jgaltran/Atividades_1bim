// ─── Elementos ────────────────────────────────────────────────
const inputTarefa   = document.getElementById('input-tarefa');
const btnAdicionar  = document.getElementById('btn-adicionar');
const listaTarefas  = document.getElementById('lista-tarefas');
const msgVazia      = document.getElementById('msg-vazia');
const barraWrap     = document.getElementById('barra-wrap');
const progressoFill = document.getElementById('progresso-fill');
const progressoTxt  = document.getElementById('progresso-texto');
const dataHoje      = document.getElementById('data-hoje');

// ─── Data de hoje no topo ─────────────────────────────────────
const agora = new Date();
dataHoje.textContent = agora.toLocaleDateString('pt-BR', {
  weekday: 'long', day: 'numeric', month: 'long'
});

// ─── Adicionar tarefa ─────────────────────────────────────────
function adicionarTarefa() {
  const texto = inputTarefa.value.trim();
  if (!texto) {
    inputTarefa.focus();
    return;
  }

  const li = document.createElement('li');
  li.classList.add('item-tarefa');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('aria-label', 'Marcar como concluída');

  const span = document.createElement('span');
  span.classList.add('texto-tarefa');
  span.textContent = texto;

  const btnRemover = document.createElement('button');
  btnRemover.classList.add('btn-remover');
  btnRemover.textContent = '✕';
  btnRemover.setAttribute('aria-label', 'Remover tarefa');

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btnRemover);
  listaTarefas.appendChild(li);

  inputTarefa.value = '';
  inputTarefa.focus();

  atualizar();
}

// ─── Delegação de eventos ─────────────────────────────────────
listaTarefas.addEventListener('click', function(e) {
  const alvo = e.target;

  if (alvo.classList.contains('btn-remover')) {
    alvo.closest('.item-tarefa').remove();
    atualizar();
    return;
  }

  if (alvo.type === 'checkbox') {
    alvo.closest('.item-tarefa').classList.toggle('concluida', alvo.checked);
    atualizar();
  }
});

// ─── Atualizar UI ─────────────────────────────────────────────
function atualizar() {
  const todos      = listaTarefas.querySelectorAll('.item-tarefa');
  const concluidas = listaTarefas.querySelectorAll('.item-tarefa.concluida');
  const total      = todos.length;
  const feitas     = concluidas.length;

  // Mensagem de vazia
  msgVazia.classList.toggle('escondida', total > 0);

  // Barra de progresso
  barraWrap.classList.toggle('visivel', total > 0);
  const pct = total > 0 ? Math.round((feitas / total) * 100) : 0;
  progressoFill.style.width = pct + '%';
  progressoTxt.textContent  = `${feitas} de ${total} concluída${total !== 1 ? 's' : ''}`;
}

// ─── Enter para adicionar ─────────────────────────────────────
inputTarefa.addEventListener('keydown', e => {
  if (e.key === 'Enter') adicionarTarefa();
});

btnAdicionar.addEventListener('click', adicionarTarefa);

// ─── Estado inicial ───────────────────────────────────────────
atualizar();