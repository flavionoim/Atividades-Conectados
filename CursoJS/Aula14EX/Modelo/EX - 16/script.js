function contar() {
  let pnum = document.getElementById("primeironum");
  let ultnum = document.getElementById("fimdosnum");
  let intnum = document.getElementById("passoentrenum");
  let res = document.getElementById("res");

  if (
    pnum.value.length == 0 ||
    ultnum.value.length == 0 ||
    intnum.value.length == 0
  ) {
    res.innerHTML = `Impossível Contar`
    
  } else {
    res.innerHTML = "Contando... <br>";
    let i = Number(primeironum.value);
    let f = Number(fimdosnum.value);
    let p = Number(passoentrenum.value);
    if(p == 0){
      window.alert("Passo Inválido! Considerando PASSO 1")
      p = 1
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
