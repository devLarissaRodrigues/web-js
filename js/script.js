function calculaQuadrados(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",");

    //document.write("Parabéns por usar nosso programa ultra moderno!" + "<br>"+"<br>");
    for(i=0; i<numeros.length; i++){
        quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
       // document.write(numeros[i] + "² = " + quadrado + "<br>");
       alert(numeros[i] + "² = " + quadrado);
    }
}


function verificaMaior(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",");
    maior = parseInt(numeros[0]);
    for(i=1; i<numeros.length; i++){
        if(parseInt(numeros[i])>maior){
            maior = parseInt(numeros[i]);
        }
    }
    alert("O maior valor digitado é " + maior);
}

function verificaMaiorIdade(){
    var idades = document.getElementById("idadesDigitadas").value;
    idades = idades.split(",");
    var maioridade = 0;
    var menoridade = 0;

    for(i=0; i<idades.length; i++){
        if(parseInt(idades[i]) >= 18){
            maioridade++;
        }
        else{
            menoridade++;
        }
        mensagem = ("Há " + maioridade + " pessoa(s) de maior, enquanto há " + menoridade + " pessoa(s) de menor");
    }
    alert(mensagem);
}

function analisaData(){
    var data = document.getElementById("dataDigitada").value;
    data = data.split("/");
    
    alert("O dia é " + data[0] + ". O mês é " + data[1] + ". O ano é " + data[2]);
}

function inversorDeTexto(){
    var texto = document.getElementById("textoDigitado").value;
    var aux = '';

    for(i=texto.length-1; i>=0; i--){
        aux += texto[i];
    }
    alert("A inversão de '" + texto + "' é '" + aux + "'.");
}

function ordenaLista(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",").map(Number);

    numeros.sort((a, b) => a - b);
    numeros.join(", ");
    alert("A lista ordenada é " + numeros);
}    

function somadorMultiplosDeTres(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",").map(Number);
    let soma = 0;
    let numerosSoma = [];

    for(i=0; i<numeros.length; i++){
        if((numeros[i] % 2 != 0) && (numeros[i] % 3 == 0)){
            soma += numeros[i];
            numerosSoma.push(numeros[i]);
        }
    }
    alert("Os números ímpares múltiplos de 3 digitados foram: " + numerosSoma + ". A soma deles é igual a " + soma);
}

function analisadorDeNumeros(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",").map(Number);
    let soma = 0;
    let media;
    var positivos = 0;
    let negativos = 0;
    let porcentualPositivos;
    let porcentualNegativos;

    for(i=0; i<numeros.length; i++){
        soma += numeros[i];
        if(numeros[i] >= 0){
            positivos++;
        }
        else{
            negativos++;
        }
    }
    media = soma/numeros.length;
    porcentualPositivos = (positivos / numeros.length) * 100;
    porcentualNegativos = (negativos / numeros.length) * 100;
    alert("A média dos valores digitados é " + media.toFixed(2));
    alert("Há " + positivos + " números positivos, ou seja, " + porcentualPositivos.toFixed(2) + "% dos números da lista");
    alert("Há " + negativos + " números negativos, ou seja, " + porcentualNegativos.toFixed(2) + "% dos números da lista");
}

function inversorDeNumeros(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",").map(Number);
    
    let listaInvertida = numeros.reverse();
    let resultado = listaInvertida.join(",");
    alert("A lista invertida dos números digitados é: " + resultado);
}

function fatorial(){
    var numero = parseInt(document.getElementById("numeroDigitado").value);
    if (numero == 0) return 1;
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    alert("O fatorial de " + numero + " é " + resultado);
}