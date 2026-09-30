let saida, i;

function Contar(){
    saida = "";
    for(i = 0; i <= 10; i++){
        saida += i + "<br>";
        
        document.getElementById("resultado").innerHTML = saida;

    }

}

/* Contagem Regressiva */

let saida2;

function ContagemRegressiva(){
    saida2 = "";
    for(i = 10; i >= 0; i--)
    {
        saida2 += i + "<br>";
    }

    document.getElementById("resultado2").innerHTML = saida2;
}

/*Contar até 100 */

let inicio, a, saida3;

function ContarAteCem()
{
    saida3 = "";
    inicio = Number(document.getElementById("inicio").value);
    for(a = inicio; a <= 100; a++)
    {   
        saida3 += a + "<br>";
    }

    document.getElementById("ateCem").innerHTML = saida3;
}

/*  Tabuada */

let valorTabuada, conta, showTabuada;

function Tabuada()
{
    showTabuada = document.getElementById("showTabuada");
    valorTabuada = Number(document.getElementById("valorTabuada").value);

    for(let f = 0; f <= 10; f++){
        conta = valorTabuada * f;
        showTabuada.innerHTML += f + " x " + valorTabuada + " = " + conta + "<br>";
    }

}

/* */

let saida6, q;

function Gerar(){
    saida6 = "";
    for(q = 0; q <= 5; q++)
    {
        saida6 = saida6 + `<div class="caixa"> <br>`;
    }

    document.getElementById("quadrado").innerHTML = saida6;


}