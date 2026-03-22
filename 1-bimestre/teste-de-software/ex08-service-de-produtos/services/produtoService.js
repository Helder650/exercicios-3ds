const { salvarProduto } = require('../database/db');

function cadastrarProduto(produto) {
  if (!produto.nome) {
    return false;
  }

  salvarProduto(produto);
  return true;
}

module.exports = {
  cadastrarProduto
};