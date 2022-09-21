function calcular(){
    var palabra = document.getElementById("palabra").value;
    alert(palabra.length);

    var arrayLetras = [];

    var contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        var letra = palabra.charAt(i);
        arrayLetras.push(letra);
        // alert(letra);

        document.getElementById("cuadritos").innerHTML += '<input type="text" id="'+letra+'" name="'+letra+'">';

    }
    // console.log(arrayLetras);
}

var count = 0;

function verificar(){
    var palabra = document.getElementById("palabra").value;
    // console.log(document.getElementById(letra).value);
    var conta=0;
    for (let i = 0; i < palabra.length; i++) {
        var letra = palabra.charAt(i);
        if(document.getElementById(letra).value == letra){
        }else{
            document.getElementById(letra).value = "";
            conta++
            count++;
            document.getElementById("numIntentos").innerHTML = "<p>"+count+"</p>";
        }

    }

    // for (let j = 0; j < palabra.length; j++) {
    //     if(document.getElementById(letra).value === ""){
    //         conta++;
    //     }
    // }
    if(count<6 && conta==0){
        alert(conta);
        document.getElementById("resultado").innerHTML = "<p>¡Ganaste!</p>"
    }

    if(count>=5){
        document.getElementById("resultado").innerHTML = "<p>¡Perdiste!</p>"
    }
}

