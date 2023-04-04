
//1. Tener una referencia al elemento del DOM al que queremos agregarle el eventListener

const miBoton= document.getElementById("submit");

//console.log(miBoton); 
miBoton.addEventListener(
    'click',
        async (event)=>{

            event.preventDefault(); //prevenir enviar formulario

            //console.log(event);
        //console.log("Ahora estoy en un eventListener");
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        //console.log(num1,num2);

        const respuesta= await fetch('http://localhost:3000/api/sumar',
        {"method":"POST", 
         "headers":{
            "Content-Type":"application/json"
         },
         "body": JSON.stringify({numero_1,numero_2})
    });

    const dato=await respuesta.json();

    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=dato;


    }
)