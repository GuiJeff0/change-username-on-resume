let minhaImagem = document.querySelector('.foto-gui')
minhaImagem.onclick = function () {
  let meuSrc = minhaImagem.getAttribute('src')
  if (meuSrc === 'imagens/guilherme.png') {
    minhaImagem.setAttribute('src', 'imagens/foto2.png')
  } else {
    minhaImagem.setAttribute('src', 'imagens/guilherme.png')
  }
}

let meuBotao = document.querySelector('button')
let meuCabecalho = document.querySelector('h1')

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.')
  if (!meuNome || meuNome === null) {
    defineNomeUsuario()
  } else {
    localStorage.setItem('nome', meuNome)
    meuCabecalho.innerHTML = 'Você é legal, ' + meuNome
  }
}
if (!localStorage.getItem('nome')) {
  defineNomeUsuario()
} else {
  let nomeGuardado = localStorage.getItem('nome')
  meuCabecalho.textContent = 'Você é legal, ' + nomeGuardado
}
meuBotao.onclick = function () {
  defineNomeUsuario()
}
