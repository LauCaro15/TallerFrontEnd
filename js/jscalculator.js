function sumar(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    resultado = (a+b);
    document.getElementById("resultado").value = resultado;
}

function restar(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    resultado = (a-b);
    document.getElementById("resultado").value = resultado;
}

function multiplicar(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    resultado = (a*b);
    document.getElementById("resultado").value = resultado;
}

function dividir(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    resultado = (a/b);
    document.getElementById("resultado").value = resultado;
}

function limpiar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
}