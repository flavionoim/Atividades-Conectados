var agora = new Date()
var diaSem = agora.getDay()

var agorinha = new Date()
var hora = agorinha.getHours()

var tempo = new Date()
var minuto = tempo.getMinutes()
/*
    Domingo = 0
    Segunda = 1
    Terça = 2 
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
*/


switch(diaSem) {
    case 0:
    console.log(" Hoje é Domingo")
    console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
    break

    case 1:
    console.log(" Hoje é Segunda")
    console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
    break
    
    case 2:
    console.log(" Hoje é Terça")
    console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
    break

    case 3:
    console.log(" Hoje é Quarta")
    console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
    break

    case 4:
    console.log(" Hoje é Quinta")
    console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
    break

    case 5:
    console.log(" Hoje é Sexta")
    console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
    break

    case 6:
    console.log(" Hoje é Sábado")
    console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
    break

    default: 
    console.log("Dia Inválido")
    break
}