function calcular(){
    var palabra = document.getElementById("palabra").value;
    alert(palabra.length);

    var arrayLetras = [];

    var contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        var letra = palabra.charAt(i);
        arrayLetras.push(letra);
        // alert(letra);


    }
    console.log(arrayLetras);
}

