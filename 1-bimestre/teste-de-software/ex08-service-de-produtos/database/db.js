const produtos = []

function salvarProduto(produto) {
  produtos.push(produto)
}

function listarProdutos() {
  return produtos
}

function limparBanco() {
  produtos.length = 0
}

module.exports = {
  salvarProduto,
  listarProdutos,
  limparBanco
}