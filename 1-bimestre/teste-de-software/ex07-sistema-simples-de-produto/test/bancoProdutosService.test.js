const bancoProdutos = require('../services/bancoProdutosService')

test("Banco começa vazio", () => {
  const banco = new bancoProdutos()
  expect(banco.listar().length).toBe(0)
})

test("Produto é adicionado", () => {
  const banco = new bancoProdutos()
  banco.adicionar({ nome: "Caneta", quantidade: 10 })

  expect(banco.listar().length).toBe(1)
})