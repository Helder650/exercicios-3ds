function calcularDesconto(valor) {
  if (valor > 100) {
    return valor - (valor * 0.10)
  }
  return valor
}

module.exports = {
  calcularDesconto
}