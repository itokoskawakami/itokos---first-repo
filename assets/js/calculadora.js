// Pego a referência de cada elemento do site
const resultadoField = document.getElementById('resultado')
const calcularBot = document.getElementById('bot-calcular')

const d1Field = document.getElementById('C1-distancia')
const v1Field = document.getElementById('C1-velocidade')

const d2Field = document.getElementById('C2-distancia')
const v2Field = document.getElementById('C2-velocidade')

const vUnidadeField = document.getElementById('V-unidade')

// Fico de olho pra saber quando o botão foi clicado
calcularBot.addEventListener('click', calcular)

function calcular() {
  // Pegas os valores digitados em cada campo
  const d1 = +d1Field.value
  const v1 = +v1Field.value
  const d2 = +d2Field.value
  const v2 = +v2Field.value
  const vUnidade = vUnidadeField.value

  // Calcular a velocidade média
  let vm = velocidadeMedia(d1, d2, v1, v2)

  // Deixar com apenas 2 casas depois da vírgula
  vm = vm.toFixed(2)

  // Adicionar a unidade selecionada pra velocidade
  vm = vm + ' ' + vUnidade

  resultadoField.value = vm
}

function velocidadeMedia(d1, d2, v1, v2) {
  return (d1 + d2) / (d1 / v1 + d2 / v2)
}
