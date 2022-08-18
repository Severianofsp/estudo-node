export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return Math.round(
      this.produtos.reduce((soma, produto) => soma + produto.preco, 0),
    );
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);
const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1);
carrinhoDeCompras.inserirProdutos(produto2);
carrinhoDeCompras.inserirProdutos(produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProduto());
console.log(carrinhoDeCompras.valorTotal());
