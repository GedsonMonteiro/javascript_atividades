function calcularIMC() {
    var altura = document.getElementById("altura").value; /* Para valores decimais, usar o ponto. Exemplo: 1.70*/
    var peso = document.getElementById("peso").value; /* Para valores decimais, usar o ponto. Exemplo: 1.70*/

    /* IMC = PESO * ALTURA.ALTURA */
    var imc = parseFloat(peso / (altura*altura));

    document.getElementById("resultadoIMC").innerHTML = "O Índice de massa corporal é: " + imc.toFixed(2);
}
