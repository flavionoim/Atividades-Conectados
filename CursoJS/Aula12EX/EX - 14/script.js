function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date()
  var hora = data.getHours()
  
  if (hora >= 0 && hora < 12){
    msg.innerHTML = `Agora são ${hora} horas da manhã`
    img.src = 'img/imagemmanha.png'
    document.body.style.background = '#6f7599'
  }else if (hora >= 12 && hora <= 18){
    msg.innerHTML = `Agora são ${hora} horas da tarde`
    img.src = 'img/imagemtarde.png'
    document.body.style.background = '#fe6a00'
  }else{
    msg.innerHTML = `Agora são ${hora} horas da noite`
    img.src = 'img/imagemnoite.png'
    document.body.style.background = '#21363b'
  }
}
