function gerar() {
    let numtab = document.getElementById("txttab");
    let res = document.getElementById("res");
  
    if (numtab.value.length == 0) {
      window.alert("Por favor, insira um número!");
    } else {
      res.innerHTML = "Tabuada: <br>";
      let n = Number(numtab.value);
  
      for (let x = 1; x <= 10; x++) {
        let resp = n * x; // Calcula o valor
        res.innerHTML += `${n} x ${x} = ${resp} <br>`; // Adiciona ao resultado
      }
    }
  }