// function saudacao() {
//   return "Seja bem-vindo!";
// }

// console.log(saudacao());
// ________________________________________________________________________________

// function multiply (a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return "Erro, Digite um valor valido"
//     }
//     return a * b;
// }


// let num1 = Number(prompt("Digite um numero"))
// let num2 = Number(prompt("Digite mais um numero"))

// let produto = multiply(num1, num2);
// console.log(produto);
// ________________________________________________________________________________

// function somar(a, b){
//     if (isNaN(a) || isNaN(b)) {
//         return "Erro, Digite um valor valido"
//     }
//     return a + b;   
// }

// let num1 = Number(prompt("Digite um numero"))
// let num2 = Number(prompt("Digite mais um numero"))

// let resultado = somar(num1, num2);
// console.log(resultado);
// ________________________________________________________________________________

// function verificarPar(numero) {
//     if (numero % 2 === 0) {
//         return "Par";
//     } else {
//         return "impar";
//     }
// }

// let num1 = Number(prompt("Digite um numero"));

// let resultado = verificarPar(num1);
// console.log(resultado);

// ________________________________________________________________________________

function aluno(nota) {
    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
        return "Invalido";
    }

    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

let num1 = Number(prompt("Digite a primeira nota do aluno"));
let num2 = Number(prompt("Digite a segunda nota do aluno"));
let num3 = Number(prompt("Digite a terceira nota do aluno"));

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let media = calcularMedia(num1, num2, num3);
console.log("Média:", media);
console.log(aluno(media));