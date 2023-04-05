
//1. Tener una referencia al elemento del DOM al que queremos agregarle el eventListener

const Botonsuma= document.getElementById("submit-S");
//console.log(miBoton); 
Botonsuma.addEventListener(
    'click',
        async (event)=>{
           event.preventDefault(); //prevenir enviar formulario
            //console.log(event);
            //console.log("Ahora estoy en un eventListener");
          const numero_1= parseFloat(document.getElementById("numero_1").value);
          const numero_2= parseFloat(document.getElementById("numero_2").value);
          //console.log(num1,num2);
          const respuesta= await fetch('http://localhost:3000/api/sumar',
        {"method":"POST", 
         "headers":{
            "Content-Type":"application/json"},
         "body": JSON.stringify({numero_1,numero_2})
    });
    const dato=await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=dato;
    }
)

const Botonresta= document.getElementById("submit-R");
//console.log(miBoton); 
Botonresta.addEventListener(
    'click',
        async (event)=>{
           event.preventDefault(); //prevenir enviar formulario
            //console.log(event);
            //console.log("Ahora estoy en un eventListener");
          const numero_1= parseFloat(document.getElementById("numero_1").value);
          const numero_2= parseFloat(document.getElementById("numero_2").value);
          //console.log(num1,num2);
          const respuesta= await fetch('http://localhost:3000/api/restar',
        {"method":"POST", 
         "headers":{
            "Content-Type":"application/json"},
         "body": JSON.stringify({numero_1,numero_2})
    });
    const dato=await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=dato;
    }
)

const Botonmultiplica= document.getElementById("submit-M");
//console.log(miBoton); 
Botonmultiplica.addEventListener(
    'click',
        async (event)=>{
           event.preventDefault(); //prevenir enviar formulario
            //console.log(event);
            //console.log("Ahora estoy en un eventListener");
          const numero_1= parseFloat(document.getElementById("numero_1").value);
          const numero_2= parseFloat(document.getElementById("numero_2").value);
          //console.log(num1,num2);
          const respuesta= await fetch('http://localhost:3000/api/multiplicar',
        {"method":"POST", 
         "headers":{
            "Content-Type":"application/json"},
         "body": JSON.stringify({numero_1,numero_2})
    });
    const dato=await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=dato;
    }
)


const Botondivide= document.getElementById("submit-D");
//console.log(miBoton); 
Botondivide.addEventListener(
    'click',
        async (event)=>{
           event.preventDefault(); //prevenir enviar formulario
            //console.log(event);
            //console.log("Ahora estoy en un eventListener");
          const numero_1= parseFloat(document.getElementById("numero_1").value);
          const numero_2= parseFloat(document.getElementById("numero_2").value);
          //console.log(num1,num2);
          const respuesta= await fetch('http://localhost:3000/api/dividir',
        {"method":"POST", 
         "headers":{
            "Content-Type":"application/json"},
         "body": JSON.stringify({numero_1,numero_2})
    });
    const dato=await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=dato;
    }
)
