var patinetas = [{
    codigo: "0",
    tipoMaterial: "Madera", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "23453", 
},{
    codigo: "1",
    tipoMaterial: "Metal", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "12533", 
},{
    codigo: "2",
    tipoMaterial: "Aluminio", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "3422", 
},{
    codigo: "3",
    tipoMaterial: "Madera", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "23453", 
},{
    codigo: "4",
    tipoMaterial: "Metal", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "223444", 
},{
    codigo: "5",
    tipoMaterial: "Madera", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "12333", 
},{
    codigo: "6",
    tipoMaterial: "Metal", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "12354", 
},{
    codigo: "7",
    tipoMaterial: "Aluminio", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "2343", 
},{
    codigo: "8",
    tipoMaterial: "Aluminio", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "23533", 
},{
    codigo: "9",
    tipoMaterial: "Aluminio", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "2222", 
},{
    codigo: "10",
    tipoMaterial: "Madera", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "34533", 
},{
    codigo: "11",
    tipoMaterial: "Hierro", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "43333", 
},{
    codigo: "12",
    tipoMaterial: "Aluminio", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "2343", 
},{
    codigo: "13",
    tipoMaterial: "Madera", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "3222", 
},{
    codigo: "14",
    tipoMaterial: "Madera", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "1235", 
},{
    codigo: "15",
    tipoMaterial: "Maderín", 
    velocidad: "123", 
    ancho: "123", 
    alto: "123", 
    color: "Rojo", 
    precio: "1235", 
}];

function mostrarPatinetas(){
    document.getElementById("patines").innerHTML = "";

    for (let i = 0; i < patinetas.length; i++) {
        var a=patinetas[i].codigo;
        document.getElementById("patines").innerHTML += 'Tipo material: '+patinetas[i].tipoMaterial+'<br>'+'Velocidad: '+patinetas[i].velocidad+'<br>'+ 'Ancho: '+patinetas[i].ancho+'<br>'+ 'Alto: '+patinetas[i].alto+'<br>'+ 'Color: '+patinetas[i].color+'<br>'+ 'Precio: '+patinetas[i].precio+'<br><br>'+'<button id="'+patinetas[i].codigo+'" value="'+patinetas[i].codigo+'" onclick="comprar('+a+')">Comprar</button><br><br>';

    }
}

var compra = [];

function comprar(a){
    compra.push({
        codigo: a,
        tipoMaterial: patinetas[a].tipoMaterial, 
        velocidad: patinetas[a].velocidad, 
        ancho: patinetas[a].ancho, 
        alto: patinetas[a].alto, 
        color: patinetas[a].color, 
        precio: patinetas[a].precio, 
    });

    document.getElementById("compra").innerHTML = "<p>¡Compra exitosa!</p>"
}

function mostrar(){
    document.getElementById("mostrar").innerHTML = "";

    for (let i = 0; i < compra.length; i++) {
        document.getElementById("mostrar").innerHTML += 'Tipo material: '+compra[i].tipoMaterial+'<br>'+'Velocidad: '+compra[i].velocidad+'<br>'+ 'Ancho: '+compra[i].ancho+'<br>'+ 'Alto: '+compra[i].alto+'<br>'+ 'Color: '+compra[i].color+'<br>'+ 'Precio: '+compra[i].precio+'<br><br>'
    }
}

// patinetas.push({
//     tipoMaterial: "Madera", 
//     velocidad: "123", 
//     ancho: "123", 
//     alto: "123", 
//     color: "Rojo", 
//     precio: "23453", 
// });
// equipos[0].jugadores.push({idp: 2, preg: "¿Esta frio fuera?"});

