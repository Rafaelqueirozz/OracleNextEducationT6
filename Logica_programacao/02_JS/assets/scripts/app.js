let listaNumerosSorteados = []
let qtdMaximaNumeros = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 0
exibirMensagemInicial()
chutar()

function exibitTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function verificarChute() {
  tentativas++
  let chute = document.querySelector('.container__input').value
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
  let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
  if(chute == numeroSecreto) {
    exibitTextoNaTela('h1', 'Parabéns!!')
    exibitTextoNaTela('p', mensagemTentativas)
    document.getElementById('reiniciar').disabled = false;
    document.getElementById('chutar').disabled = true;

  } else {
    if( chute > numeroSecreto) {
      exibitTextoNaTela('p', 'O numero secreto é menor que o chute')
    } else {
      exibitTextoNaTela('p', 'O numero secreto é maior que o chute')
    }
    limparCampo();
    chutar()
  }
}

function chutar() {
  let chute = document.querySelector('.container__input').focus()
}

function resetarJogo() {
  numeroSecreto = gerarNumeroAleatorio()
  limparCampo()
  tentativas = 0;
  exibirMensagemInicial()
  document.getElementById('reiniciar').disabled = true;
  document.getElementById('chutar').disabled = false;
  chutar()
}

function exibirMensagemInicial() {
  exibitTextoNaTela('h1', 'Jogo do número secreto')
  exibitTextoNaTela('p', 'Escolha um número de 1 a 10')
}

function gerarNumeroAleatorio() {
  let numeroGerado = parseInt(Math.random() * qtdMaximaNumeros + 1)
  // console.log(numeroGerado)
  // console.log(listaNumerosSorteados)

  if (listaNumerosSorteados.length == qtdMaximaNumeros) {
    listaNumerosSorteados = []
  }

  if (listaNumerosSorteados.includes(numeroGerado)) {
    return gerarNumeroAleatorio()
  }
  listaNumerosSorteados.push(numeroGerado)
  return numeroGerado
}

function limparCampo() {
  const campo = document.querySelector('.container__input')
  campo.value = '';
}