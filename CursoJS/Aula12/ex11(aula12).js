var idade = 79;
console.log(`Você Tem ${idade} anos`);
if (idade < 16) {
  console.log("Você não pode trabalhar ainda");
} else if (idade > 110) {
  console.log("Você está mentindo sua idade!");
} else if (idade > 70 || idade < 110) {
  console.log("Se aposenta logo cara, é pelo seu bem");
} else if (idade > 65) {
  console.log("Você ja pode se aposentar!");
} else {
  console.log("VocÊ já pode trabalhar!");
}
