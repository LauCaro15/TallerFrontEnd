function calcular() {
    document.getElementById("tabla").innerHTML = "";
    num = document.getElementById("numero").value;
    for (i=1; i<=10; i++){
        resultado = num * i;
        document.getElementById("tabla").innerHTML += num+" x "+i+" = "+resultado+"<br>";
    }
}