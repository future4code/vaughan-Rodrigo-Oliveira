const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//a. false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// b. false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// c. true 
console.log("d. ", typeof resultado)


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// exercicio 1

const idade = prompt ("Digite sua idade" )
const idadeAmi = prompt  ("Idade da sua melhor amiga")

const dif = idade 28 => idadeAmi 34 

console.log (Sua idade é maior que do sua melhor amiga?, idade => idadeami)


