// //resposta aqui

// Agora, a Lumelância quer dar descontos para produtos que estão proximos da validade.
// Quando os funcionários estiverem reorganizando as prateleiras, eles deverão verificar se o produto
// esta próximo do vencimento informando quantos dias faltam para o vencimento.

// - O array de objetos produtos devem conter os dados
//     - nome: string
//     - tempoDeValidade: number
//     - congelado: boolean

// - Exemplo:
//     var produtos = [{
//         nome: 'Nescau',
//         tempoDeValidade: 200, //indicando que a validade dele é de 200 dias
//         congelado : false
//     }];
    
// - O funcionário deverá:
//     - Escolher (digitar) um produto do array de objetos: "Escolha um produto entre 0 e x: "
//     - Digitar quantos dias faltam para o produto vencer: "Digite quantos dias faltam para vencer: "

// - Calcular a porcentagem:
//     porcentagem = (diasParaOVencimentoDoProduto * 100) / tempoDeValidadeDoProduto;

// - Você deverá:
//     - Printar a mensagem "Descartar produto, muito proximo de vencer" caso produto esteja com 2% ou menos de dias para vencer;

//     - Printar a mensagem "Desconto!  Produto não congelado e próximo da validade." caso produto não seja congelado e esteja com 10% ou menos de dias para vencer;

//     - Printar a mensagem "Desconto! Produto congelado e próximo da validade." caso produto seja congelado e com 5% ou menos de dias para vencer;

//     - Printar a mensagem "Produto longe do vencimento." caso produto esteja com mais de 10% dos dias para vencer;

var r = require("readline-sync");

var produtos = [
{
    nome:'Biscoito',
    tempoDeValidade: 150,
    congelado: false
},
{
    nome: 'carne',
    tempoDeValidade: 38,
    congelado: true

},
{
    nome:'Tomate',
    tempoDeValidade: 45,
    congelado: false
},
{
    nome:'frango',
    tempoDeValidade: 60,
    congelado: true
},
];

var posicao = parseInt(r.question("Escolha um produto entre 0 e 3"))
console.log(produtos[`${posicao}`]);

var diasParaOVencimentoDoProduto = parseInt(r.question("Digite quantos dias faltam para vencer:"))
console.log(`${diasParaOVencimentoDoProduto}`);

var porcentagem = (diasParaOVencimentoDoProduto * 100) / produtos[posicao].tempoDeValidade;

if (porcentagem <= 2) {
    console.log("Descartar produto, muito proximo de vencer")
} else if (porcentagem <= 10 && !produtos.congelado) {
    console.log('Desconto!  Produto não congelado e próximo da validade.')
} else if (porcentagem <= 5 && produtos.congelado) {
    console.log('Desconto!  Produto congelado e próximo da validade.')
} else if (porcentagem > 10) {
    console.log('Produto longe do vencimento.');
} else {
    console.log('Algo está errado');
}
