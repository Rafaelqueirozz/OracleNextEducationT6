alert('Boas vingas ao jogo do número secreto')

// Declaração de variáveis
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)

let numeroEscolhido
let numeroTentativas = 1;


while(numeroEscolhido != numeroSecreto) {
  numeroEscolhido = prompt(`Escolha outro número inteiro entre 1 e ${numeroMaximo}`)
  if (numeroEscolhido == numeroSecreto) {
    break
  } else {
    if (numeroEscolhido > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroEscolhido}`)
    } else {
      alert(`O número secreto é maior que ${numeroEscolhido}`)
    }
  }
  numeroTentativas++
}

let tentativas = numeroTentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabéns, você acertou com ${numeroTentativas} ${tentativas} ! O número secreto era ${numeroSecreto}`)


