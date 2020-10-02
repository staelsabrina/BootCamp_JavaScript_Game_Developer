// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let totalItems = gets();

function unico(value, index, self) { 
    return self.indexOf(value) === index;
}

for (var i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  
  
  let itensUnicos = itensOrdenados.filter(unico); // Implemente aqui a lógica para ter os itens unicos
  
  
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}

/*
filter() é uma função que varre todos elementos do array e manda para uma função de callback definida pelo programador. Nessa função faz uma comparação se é a primeira ocorrência do valor e só se for é que a filter() irá considerar como parte do novo array.

O indexOf() dá a posição da primeira ocorrência. Se ela bater com o índice atual do elemento pesquisado, é um valor que interessa no critério adotado. Se não bater significa que já é pelo menos uma segunda ocorrência desse valor, o que não interessa.

Isso deve funcionar na maioria dos navegadores usados atualmente, só não funciona nos que já são considerados muito antigos.
*/