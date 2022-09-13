//declaracion de variables  
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos= 0;
let temporizador= false;
let timer = 50;
let timerInicial = 50;
let tiempoRegresivoId = null;
let error = 0;
//apuntando a documento html


let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos =document.getElementById('aciertos');   
let mostrarTiempo = document.getElementById('T.restante');

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
//|let paths = ["1.png","1.png","2.png","2.png"...];

numeros = numeros.sort(()=>{return Math.random()-0.5});
 
console.log(numeros);

//funciones
function contarTiempo(){
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0){
          clearInterval(tiempoRegresivoId);
          bloquearTarjetas();
        } 
    }, 1000);
}
function bloquearTarjetas(){
    for (let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;  
    }
}

//funcion principal
function destapar(id){

    if (temporizador == false){
        contarTiempo();
        temporizador = true;

    }

 tarjetasDestapadas++;

 console.log(tarjetasDestapadas);
 
 if(tarjetasDestapadas == 1){
     

    
     //mostrar primer numero

    tarjeta1 = document.getElementById(id);
    primerResultado = numeros [id]
    tarjeta1.innerHTML = primerResultado;
    //tarjeta1.innerHTML = `<img src="${paths[numeros [id]]}"></>`;
    //desahabilitar primer boton
    tarjeta1.disabled = true;
    }else if(tarjetasDestapadas ==2){
    //mostrar segunda tarjeta
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    //deshabilitar segunda tarjeta
    tarjeta2.disabled = true;

    //movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`; 

    if(primerResultado == segundoResultado){
    //encerrar contador de tarjetas destapadas
    tarjetasDestapadas = 0;

    
    //aumentor aciertos

    aciertos++;

    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;  

        if (aciertos == 8){
            clearInterval(tiempoRegresivoId);
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}😎`;
            mostrarTiempo.innerHTML = `Fantastico! Sólo Demoraste ${timerInicial - timer} segundos`;
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}😎`
        }
        

    }  else{
        //mostrar momentaneamente valores
        setTimeout(()=>{
         tarjeta1.innerHTML = ' ';
         tarjeta2.innerHTML = ' ';   
         tarjeta1.disabled = false;
         tarjeta2.disabled = false;
         tarjetasDestapadas = 0;
        },800);
    }
}
}