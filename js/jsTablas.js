function calcular() {
    num = document.getElementById("numero").value;
    for (i=1; i<=10; i++){
        resultado = num * i;
        document.write(num+" x "+i+" = "+resultado+"<br>");
    }
}