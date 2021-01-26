var numero01 = prompt("Primeiro número");
var numero02 = prompt("Segundo número");
var numero03 = prompt("Terceiro número");

    if ((numero01 > numero02) && (numero01 > numero03)) mensagem = "O primeiro número informado é maior!"
        else
    if ((numero02 > numero01) && (numero02 > numero03)) mensagem = "O segundo número informado é maior!"
        else
    if ((numero03 > numero01) && (numero03 > numero02)) mensagem = "O terceiro número informado é maior!"
        else
    mensagem = "Os números são iguais ou nada foi informado";
        alert(mensagem);