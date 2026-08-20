function calculadorMaiorNota(nota1 , nota2) {
    return (nota1 + nota2) / 2;
}   

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
 function mostrarResultado(nome, media, situacao) {
    console.log("Aluno: " + nome);
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: " + situacao);

}
function calcularMaiorNota  (nota1, nota2) {
    if (nota1 > nota2) {
        return nota1;
    } else {
        return nota2;       
    }
}
let nome=prompt("Digite o nome do aluno:");
let nota1= 8
let nota2= 6
let media = calculadorMaiorNota(nota1, nota2);
let situacao = verificarSituacao(media);
mostrarResultado(nome, media, situacao);
console.log("Maior nota: " + calcularMaiorNota(nota1, nota2));

let nome2=prompt("Digite o nome do aluno:");
let nota3= 9
let nota4= 5
let media = calcularMedia(nota3, nota4);
let situacao = verificarSituacao(media);
mostrarResultado(nome2, media, situacao);
console.log("Maior nota: " + calcularMaiorNota(nota3, nota4));