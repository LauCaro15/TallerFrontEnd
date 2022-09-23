function calcular(){
    var palabra = document.getElementById("palabra").value;
    // alert(palabra.length);
    // var pal = palabra.toUpperCase();

    var arrayLetras = [];

    var contador = 0;

    document.getElementById("cuadritos").innerHTML = "";

    for (let i = 0; i < palabra.length; i++) {
        var letra = palabra.charAt(i);
        arrayLetras.push(letra);
        // alert(letra);

        document.getElementById("cuadritos").innerHTML += '<td colspan="1"><input type="text" maxlength="1" class="letra" type="text" id="'+letra+'" name="'+letra+'"><td/>';

    }
    // console.log(arrayLetras);
}

var count = 0;

// var c=document.getElementById("canvas")//Capturo el canvas del html
// c.height=window.innerHeight
// c.width=window.innerWidth //Como esta por pixeles desde el js se acomoda al tamaño de la ventana



// var ctx=c.getContext("2d") //Para realizar gráficos en 2D


function verificar(){

    c=document.getElementById("canvas")//Capturo el canvas del html
    c.height=window.innerHeight
    c.width=window.innerWidth //Como esta por pixeles desde el js se acomoda al tamaño de la ventana

    var palabra = document.getElementById("palabra").value;
    // var pal = palabra.toUpperCase();
    // console.log(document.getElementById(letra).value);
    var conta=0;
    var contar2=0;
    for (let i = 0; i < palabra.length; i++) {

        var letra = palabra.charAt(i);
        // letr.toUpperCase();
        var letr = document.getElementById(letra).value;
        // var letrica = letr.toUpperCase();
        if(document.getElementById(letra).value === letra){
            contar2++;
        }else if(document.getElementById(letra).value === ""){
            
        }else{
            document.getElementById(letra).value = "";
            if(count < 13){
                count++;
                
                draw(c, count);

                /////////////////////////////////////////////////

                // switch (count) {
                //     case 1:
                //         base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 680);
                //         break;
                //     case 2:
                //         palo(ctx, (innerWidth/2)-100, 110, 20, 570);
                
                //         break;
                //     case 3:
                //         palo(ctx, (innerWidth/2)-100, 110, 200, 20);
                //         break;
                //     case 4:
                //         palo(ctx, (innerWidth/2)+90, 110, 5, 190);
                
                //         break;
                        
                //     case 5:
                //         cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);
                //         break;
                        
                //     case 6:
                //         //Cuello
                //         extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 330);

                
                //         break;
                        
                //     case 7:
                //         //Brazo derecha
                //         extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+80, 430);

                
                //         break;
                        
                //     case 8:
                //         //Brazo izquierda
                //         extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+70, 420);

                
                //         break;
                        
                //     case 9:
                //         //Cuerpo
                //         extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, 530);

                
                //         break;
                        
                //     case 10:
                //         //Pierna izquierda
                //         extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+70, 630);

                
                //         break;
                        
                //     case 11:
                //         //Pierna derecha
                //         extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+110, 630);

                //         break;
                        
                //     case 12:
                //         //Ojo izquierdo
                //         extremidad(ctx, (innerWidth/2)+20, (innerHeight/2)-94, (innerWidth/2)+20, (innerHeight/2)-94, (innerWidth/2)+35, 280);
                //         extremidad(ctx, (innerWidth/2)+30, (innerHeight/2)-100, (innerWidth/2)+30, (innerHeight/2)-100, (innerWidth/2)+25, 285);
                //         //Boca
                //         extremidad(ctx, (innerWidth/2)+50, (innerHeight/2)-80, (innerWidth/2)+50, (innerHeight/2)-80, (innerWidth/2)+38, 295);
                //         break;
                        

                        
                
                //     default:
                //         break;
                // }


                ////////////////////////////////////////////////
                document.getElementById("numIntentos").innerHTML = "<p>"+count+"</p>";

            }
        }
    }

    // for (let j = 0; j < palabra.length; j++) {
    //     if(document.getElementById(letra).value === ""){
    //         conta++;
    //     }
    // }
    if(contar2===palabra.length){
        alert("¡Ganaste!");
        // document.getElementById("resultado").innerHTML = "<p>¡Ganaste!</p>"
    }

    if(count>=12){
        alert("¡Perdiste!");
        // document.getElementById("resultado").innerHTML = "<p>¡Perdiste!</p>"
    }
}


function canvas(c, count){

    // c=document.getElementById("canvas")//Capturo el canvas del html
    // c.height=window.innerHeight
    // c.width=window.innerWidth //Como esta por pixeles desde el js se acomoda al tamaño de la ventana
    //x, y, radio, angulo inicial, angulo final, sentido izquierda
    //xpunto1, ypunto1, xpunto2, ypunto2, xpuntomedio, ypuntomedio
    //(innerWidth/2)+90, (innerHeight/2)+200, (innerWidth/2)-90, (innerHeight/2)+200, (innerWidth/2), 590
    draw(c, count);
}

function draw(c, count){

    var ctx=c.getContext("2d"); //Para realizar gráficos en 2D
    
    switch (count) {
        case 1:
            alert("Base. Te quedan 11 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);
            break;
        case 2:
            alert("Palo. Te quedan 10 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
    
            break;
        case 3:
            alert("Palo. Te quedan 9 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            break;
        case 4:
            alert("Cuerda. Te quedan 8 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);
    
            break;
            
        case 5:
            alert("Cabeza. Te quedan 7 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);
            break;
            
        case 6:
            alert("Cuello. Te quedan 6 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);


            //Cuello
            extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 295);

            break;
            
        case 7:
            alert("Brazo derecho. Te quedan 5 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);


            //Cuello
            extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 295);

            //Brazo derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+80, 430);
    
            break;
            
        case 8:
            alert("Brazo izquierdo. Te quedan 4 intentos.");

            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);


            //Cuello
            extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 295);

            //Brazo derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+80, 430);

            //Brazo izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+70, 420);

            break;
            
        case 9:
            alert("Cuerpo. Te quedan 3 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);


            //Cuello
            extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 295);

            //Brazo derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+80, 430);

            //Brazo izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+70, 420);

            //Cuerpo
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, 505);
    
            break;
            
        case 10:
            alert("Pierna izquierda. Te quedan 2 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);


            //Cuello
            extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 295);

            //Brazo derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+80, 430);

            //Brazo izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+70, 420);

            //Cuerpo
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, 505);
            //Pierna izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+70, 630);

    
            break;
            
        case 11:
            alert("Pierna derecha. Te quedan 1 intentos.");
            //Pierna derecha
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);


            //Cuello
            extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 295);

            //Brazo derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+80, 430);

            //Brazo izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+70, 420);

            //Cuerpo
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, 505);

            //Pierna izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+70, 630);

            //Pierna derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+110, 630);

            break;
            
        case 12:
            alert("Cara. Te quedan 0 intentos.");
            base(ctx, (innerWidth/2)-100, (innerHeight/2)+170, (innerWidth/2)-160, (innerHeight/2)+320, (innerWidth/2)-100, 650);

            palo(ctx, (innerWidth/2)-100, 110, 20, 540);
            palo(ctx, (innerWidth/2)-100, 110, 200, 20);
            palo(ctx, (innerWidth/2)+90, 110, 5, 150);

            cabeza(ctx, (innerWidth/2)+50, (innerHeight/2)-100, 35);


            //Cuello
            extremidad(ctx, (innerWidth/2)+85, (innerHeight/2)-87, (innerWidth/2)+85, (innerHeight/2)-90, (innerWidth/2)+100, 295);

            //Brazo derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+80, 430);

            //Brazo izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+70, 420);

            //Cuerpo
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, (innerHeight/2)-40, (innerWidth/2)+100, 505);

            //Pierna izquierda
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+70, 630);

            //Pierna derecha
            extremidad(ctx, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+100, (innerHeight/2)+160, (innerWidth/2)+110, 630);


            //Ojo izquierdo
            extremidad(ctx, (innerWidth/2)+20, (innerHeight/2)-94, (innerWidth/2)+20, (innerHeight/2)-94, (innerWidth/2)+35, 250);
            extremidad(ctx, (innerWidth/2)+30, (innerHeight/2)-100, (innerWidth/2)+30, (innerHeight/2)-100, (innerWidth/2)+25, 250);
            //Boca
            extremidad(ctx, (innerWidth/2)+50, (innerHeight/2)-80, (innerWidth/2)+50, (innerHeight/2)-80, (innerWidth/2)+38, 255);
            break;
            

            
    
        default:
            break;
    }
}


function base(c, xpunto1, ypunto1, xpunto2, ypunto2, xpuntomedio, ypuntomedio){
    c.beginPath();
    c.moveTo(xpunto1, ypunto1);
    c.lineTo(xpuntomedio, ypuntomedio);
    c.lineTo(xpunto2, ypunto2);
    // c.fillStyle=color;
    c.fill(); //Rellenar nariz
    // c.strokeStyle = '#dce008';
    // c.fillStyle="#dce008";
    // c.fillRect(10,10,200,130);
    // c.strokeStyle = '#dce008';
    c.stroke();
}

function extremidad(c, xpunto1, ypunto1, xpunto2, ypunto2, xpuntomedio, ypuntomedio){
    c.beginPath();
    c.moveTo(xpunto1, ypunto1);
    c.lineTo(xpuntomedio, ypuntomedio);
    c.lineTo(xpunto2, ypunto2);
    // c.fillStyle=color;
    // c.fill(); //Rellenar nariz
    // c.strokeStyle = '#dce008';
    // c.fillStyle="#dce008";
    // c.fillRect(10,10,200,130);
    // c.strokeStyle = '#dce008';
    c.stroke();
}

function palo(c, x, y, width, height){
    c.fillRect(x, y, width, height);
}

function cabeza(c, x, y, radio){
    c.beginPath();
    c.arc(x, y, radio, 0, (Math.PI/180)*360, false)
    // c.fillStyle=color;
    c.lineWidth=5;
    // c.fill();
    c.stroke();
}














































// function base(c, xpunto1, ypunto1, xpunto2, ypunto2, xpuntomedio, ypuntomedio){
//     c.beginPath();
//     c.moveTo(xpunto1, ypunto1);
//     c.lineTo(xpuntomedio, ypuntomedio);
//     c.lineTo(xpunto2, ypunto2);
//     c.fillStyle=color;
//     c.fill(); //Rellenar nariz
//     // c.strokeStyle = '#dce008';
//     // c.fillStyle="#dce008";
//     // c.fillRect(10,10,200,130);
//     // c.strokeStyle = '#dce008';
//     c.stroke();
// }

// function extremidad(c, xpunto1, ypunto1, xpunto2, ypunto2, xpuntomedio, ypuntomedio){
//     c.beginPath();
//     c.moveTo(xpunto1, ypunto1);
//     c.lineTo(xpuntomedio, ypuntomedio);
//     c.lineTo(xpunto2, ypunto2);
//     c.fillStyle=color;
//     // c.fill(); //Rellenar nariz
//     // c.strokeStyle = '#dce008';
//     // c.fillStyle="#dce008";
//     // c.fillRect(10,10,200,130);
//     // c.strokeStyle = '#dce008';
//     c.stroke();
// }

// function palo(c, x, y, width, height){
//     c.fillRect(x, y, width, height);
// }

// function cabeza(c, x, y, radio){
//     c.beginPath();
//     c.arc(x, y, radio, 0, (Math.PI/180)*360, false)
//     c.fillStyle=color;
//     c.lineWidth=5;
//     // c.fill();
//     c.stroke();
// }



