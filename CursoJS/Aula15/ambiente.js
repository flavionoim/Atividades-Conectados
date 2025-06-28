let num = [9, 7, 8, 4];
num.push(1);
num.sort(); //Se o push estiver primeiro que o sort, ele vai colocar o 1 primeiro e depois organizá-lo em ordem numérica, assim deixando o 1 primeiro
console.log(num);
console.log(`Nosso vetor tem ${num.length} Posições`);
console.log(`O primeiro valor do vetor é de ${num[0]}`);
let pos = num.indexOf(8);
if (pos == -1) {
  console.log(`O número não foi encontrado`);
} else {
  console.log(`O valor está na posição ${pos}`);
}

/*
num[3] = 6   (este comando fala para colocar o numero 6 na posicão 3 da variável)
num.push(7)  (este comando fala para colocar o 7 na ultima posição da variável)
num.length   (este comando pede para o JS mostrar quantas posições/casas tem sua variável)
num.sort     (este comando fala para o programa colocar as casas da sua variável por ordem numérica (1, 2, 3, 4, 5))
*/
