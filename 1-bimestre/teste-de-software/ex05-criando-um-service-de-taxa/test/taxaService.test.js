const { calcularTaxa } = require('../services/taxaService')

describe('taxaService', () => {

  beforeEach(() => {
  })

  test('deve retornar 5% se valor for maior que 500', () => {
    const resultado = calcularTaxa(600)
    expect(resultado).toBe(30)
  });

  test('deve retornar 0 se valor for menor ou igual a 500', () => {
    const resultado = calcularTaxa(500)
    expect(resultado).toBe(0)
  })

})