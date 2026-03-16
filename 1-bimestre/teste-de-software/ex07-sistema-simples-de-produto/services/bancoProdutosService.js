class bancoProdutos {
  constructor() {
    this.produtos = []
  }

  adicionar(produto) {
    this.produtos.push(produto)
  }

  listar() {
    return this.produtos
  }
}

module.exports = bancoProdutos