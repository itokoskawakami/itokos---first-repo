const resultadoField = document.getElementById('resultado')
const calcularBot = document.getElementById('bot-calcular')

const d1Field = document.getElementById('C1-distancia')
const v1Field = document.getElementById('C1-velocidade')

const d2Field = document.getElementById('C2-distancia')
const v2Field = document.getElementById('C2-velocidade')

const vUnidadeField = document.getElementById('V-unidade')

calcularBot.addEventListener('click', calcular)

function calcular() {
  const d1 = +d1Field.value
  const v1 = +v1Field.value
  const d2 = +d2Field.value
  const v2 = +v2Field.value
  const vUnidade = vUnidadeField.value

  let vm = (d1 + d2) / (d1 / v1 + d2 / v2)
  vm = vm.toFixed(2) + vUnidade

  resultadoField.value = vm
}
