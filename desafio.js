function calcularMedia(nota1, nota2) {
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
    console.log("Média: " + media);
    console.log("Situação: " + situacao);
}

let media1 = calcularMedia(8, 6);
let situacao1 = verificarSituacao(media1);
mostrarResultado("Joãozinho", media1, situacao1);

let media2 = calcularMedia(5, 6);
let situacao2 = verificarSituacao(media2);
mostrarResultado("Maria", media2, situacao2);

let media3 = calcularMedia(3, 4);
let situacao3 = verificarSituacao(media3);
mostrarResultado("Cleusa Maria", media3, situacao3);

// teste