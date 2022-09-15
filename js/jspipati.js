// let inputValue1 = document.querySelector(".compu").value;

// console.log(inputValue1);

function jugar(){
    // if(document.getElementsByName("piedra").values = 1){
    //     jugador = document.getElementById("jug").innerHTML='<img src="./direccion_imagen.jpg"/>';
    // }
    // casillas = document.getElementsByClassName("datos");

    $('#images img').click(function (){
        src= $(this).attr('src');
        value= $(this).attr('value');
        let imagenes = new Map();
        // if(src="")
        imagenes.set(1, "https://img.freepik.com/vector-premium/roca-dibujos-animados-piedra-granito-macizo-paisaje-juego-aislado-sobre-fondo-blanco_80590-12595.jpg")
        imagenes.set(2, "https://st4.depositphotos.com/1742172/24829/v/600/depositphotos_248297604-stock-illustration-cute-cartoon-of-a-sheet.jpg")
        imagenes.set(3, "https://img.freepik.com/vector-premium/tijeras-icono-dibujos-animados-simple-vector-dibujos-animados-fondo-blanco_126267-8967.jpg")

        var valorIma = getRandomInt(1,4);
        var valorI = valorIma;

        // alert(value);

        // console.log(valorIma);

        // for (let [key, value] of imagenes) {
            
        // }
        // imagenes.get(valorI);

        
        document.getElementById("jug").innerHTML='<img id="jugador" value="'+value+'" src="'+src+'"/>';
        document.getElementById("compu").innerHTML='<img id="computador" value="'+valorI+'" src="'+imagenes.get(valorI)+'"/>';
        
        // if (condition) {
            
        // } else if{
            
        // }

        if((value == 1) && (valorI == 2)){
            document.getElementById("result").innerHTML='<h1>Ganó la máquina.<h1/>';
        }
        else if((value == 2) && (valorI == 3)){
            document.getElementById("result").innerHTML='<h1>Ganó la máquina.<h1/>';
        }
        else if((value == 3) && (valorI == 1)){
            document.getElementById("result").innerHTML='<h1>Ganó la máquina.<h1/>';
        }
        else if((value == 2) && (valorI == 1)){
            document.getElementById("result").innerHTML='<h1>Ganó el jugador.<h1/>';
        }
        else if((value == 3) && (valorI == 2)){
            document.getElementById("result").innerHTML='<h1>Ganó el jugador.<h1/>';
        }
        else if((value == 1) && (valorI == 3)){
            document.getElementById("result").innerHTML='<h1>Ganó el jugador.<h1/>';
        }
        else if((value == 1) && (valorI == 1)){
            document.getElementById("result").innerHTML='<h1>Empate<h1/>';
        }
        else if((value == 2) && (valorI == 2)){
            document.getElementById("result").innerHTML='<h1>Empate<h1/>';
        }
        else if((value == 3) && (valorI == 3)){
            document.getElementById("result").innerHTML='<h1>Empate<h1/>';
        }
    });
    // document.getElementById("jug").innerHTML='<img src="'+'j'+'"/>';

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

