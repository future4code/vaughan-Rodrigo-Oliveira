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

const idade  = prompt ("Digite sua idade" )
const idadeAmi = prompt  ("Idade da sua melhor amiga")

const dif = idade >= idadeAmi
console.log ("Sua idade é maior que do sua melhor amiga?"), idade >= idadeAmi 


const numeroPar = prompt ("Digite um numero par")
const divisao = numeroPar % 2

console.log (divisao)

// Aqui o resultado sempre dando 0
// Se colocar um numero impar, o resultado sempre sera 1

let = num1 = prompt ("Digite um numero")
let = num2 = prompt ("Digite outro numero")

const numeroMaior = num1 > num2
const numeroIgual = num1 == num2
const numDivi = num1 / num2
const numeDividi = num2 / num1

console.log ("O primeiro numero é maior que o segundo?", numeroMaior)
console.log ("O primeiro numero é igual o segundo?", numeroIgual)
console.log ("O primeiro numero é divisivel pelo segundo?", numDivi)
console.log ("O segundo numero é divisivel pelo primeiro", numeDividi)