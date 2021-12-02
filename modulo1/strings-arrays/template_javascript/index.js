/* let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor) */


 /* 
a.  undefined
 b.  null
 c.  11
 d.  3
 e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 f.  9 *
 */

 // Exercicio 1

// 1 Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!



const nome = prompt ("Informe seu Nome")
const email = prompt ("Informe seu Email")

const fraseContatenada = "Seja bem-vinda(o) " + nome + " Email cadastrado com sucesso " + email 
console.log (fraseContatenada)

// Exercicio 2

// Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima no console o array completo

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array no console




const comidasfav = ["Sushi" , "Nhoque" , "Pizza" , "Banana" , "Nescau"]

console.log ("Array de comidas", comidasfav); // A

console.log ("Essas são minhas comidas preferidas: ", comidasfav);  // B

const comidaUsuario = prompt ("Olá, qual é sua comida favorita?")  //c

const numero = prompt ("Digite um numero de 1 a 5") //d
console.log(numero)

const resultado = `A comida escolhida foi  ${comidasfav[numero -1]}´`
console.log (resultado)

const removeSushi = comidasfav.splice ("0" , "1")
console.log ('console na variavel removerSushi')
console.log ('console na variavel que contém o array' , comidasfav) //e

console.log ("comidasfav", comidasfav.length) //f

// exericio 3 Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console

let  listaDeTarefas

const usuario1 = prompt ("Cite 1 tarefa diario")
const usuario2 = prompt ("Cite 1 tarefe diaria")
const usuario3 = prompt ("Cite 1 tarefa diaria")

let listaDeTarefas = [usuario1, usuario2, usuario3]

let listaDeTarefas = prompt ("Escreva as listas de Tarefas")

console.log (listaDeTarefas)

const tarefasFeitas = prompt ("Escreval qual tarefa já realizou hoje?")

const novaLista = listaDeTarefas.splice(tarefasFeitas -1)

console.log (novaLista)