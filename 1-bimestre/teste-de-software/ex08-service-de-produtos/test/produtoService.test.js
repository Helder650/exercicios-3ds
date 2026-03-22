const { cadastrarProduto } = require('../services/produtoService')
const { listarProdutos, limparBanco } = require('../database/db')

describe('produtoService', () => {

  beforeEach(() => {
    limparBanco()
  })

  test('deve cadastrar produto com nome', () => {
    const produto = {
      nome: 'PlayStation 5',
      preco: 4500
    };

    const resultado = cadastrarProduto(produto)

    expect(resultado).toBe(true)
    expect(listarProdutos().length).toBe(1)
  });

  test('não deve cadastrar produto sem nome', () => {
    const produto = {
      preco: 3000
    }

    const resultado = cadastrarProduto(produto)

    expect(resultado).toBe(false)
    expect(listarProdutos().length).toBe(0)
  })

})