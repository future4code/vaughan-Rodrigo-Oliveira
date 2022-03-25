// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   array.reverse()
   return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) {
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novosNumeros = array.filter(pares => (pares % 2) === 0)
    return novosNumeros

   
   
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            let numeroPar = array[i]
            arrayPar.push(numeroPar * numeroPar)
        }
    } return arrayPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: null,
        maiorDivisivelPorMenor: null,
        diferenca: null
    }
    if (num1 > num2) {
        objeto.maiorNumero = num1,
            objeto.maiorDivisivelPorMenor = num1 % num2 === 0,
            objeto.diferenca = num1 - num2
    } else {
        objeto.maiorNumero = num2,
            objeto.maiorDivisivelPorMenor = num2 % num1 === 0,
            objeto.diferenca = num2 - num1
    }
    return objeto
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    arrayPrimeirosPares = []
    for (i = 0; arrayPrimeirosPares.length < n; i++) {
        if (i % 2 === 0) {
            arrayPrimeirosPares.push(i)
        }
    } return arrayPrimeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return `Equilátero`
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return `Escaleno`
    } else {
        return `Isósceles`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
        array.sort((a, b) => a - b)
        arraySegundoMaiorESegundoMenor = [array[array.length-2], array[1]]
        return arraySegundoMaiorESegundoMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        return (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60)
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}