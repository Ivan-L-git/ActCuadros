const cuadrados = document.getElementById("cuadrados");
let n = 0;
let html = '';

let detecta;
let Cpar="par";
let Cimpar="impar";
 
for(let i=1; i<=10; i++) //establece el dígito de las decenas
{
    html += `<div class="fila">`;
    for(let j=1; j<=10; j++)
    {
        detecta=j%2; //permite detectar la secuencia de impar-par-impar-par
        if(detecta == 1)
        {
            html += `<div class="cuadrado ${Cimpar}" id="${j+n}">${j+n}</div>`;
        }
        else
        {
            html += `<div class="cuadrado ${Cpar}" id="${j+n}">${j+n}</div>`;

        }
    }   
    html += `</div>`;
    n = i*10;
    
}
cuadrados.innerHTML = html;

let boton_par=document.getElementById("pares");
let boton_impar=document.getElementById("impares");
let boton_primo=document.getElementById("primos");   
let todos_los_pares=document.getElementsByClassName("par");
let todos_los_impares=document.getElementsByClassName("impar");
let verifica_par=null;
let verifica_impar=null;
let verifica_primo=null;

boton_par.addEventListener("click", ()=>{
    if(verifica_par==null) //verificación sobre si los pares están iluminados o no
    {
        for (let el of todos_los_pares)  //recorre todos los elementos de todos_los_pares
        //es necesario, porque classList.add no es aplicable a un conjunto de elementos
        //sino solamente a uno por uno
        {
          el.classList.add("iluminar_pares");
        }
        verifica_par=1;
    }
    else
    {
        for (let el of todos_los_pares)  //recorre todos los elementos de todos_los_pares
        {
            el.classList.remove("iluminar_pares");
        }
        verifica_par=null;

    }
}
);

boton_impar.addEventListener("click", ()=>{
    if(verifica_impar==null)
    {
        for (let al of todos_los_impares)
        {
            al.classList.add("iluminar_impares");
        }
        verifica_impar=1;
    }
    else
    {
        for (let al of todos_los_impares)
        {
          al.classList.remove("iluminar_impares");
        }
        verifica_impar=null;

    }
}
);

boton_primo.addEventListener("click", ()=>{
    if(verifica_primo==null)
    {
        for (let ol of todos_los_impares)
        {
            if(ol.textContent%5!==0 && ol.textContent%7!==0 && ol.textContent%2!==0 && ol.textContent%3!==0)
            {
                        ol.classList.add("iluminar_primos");
                        verifica_primo=1;
                        console.log("Es primo");
            }
        }
        
    }
    else
    {
        for (let ul of todos_los_impares)
        {
            if(ul.textContent%5!==0&&ul.textContent%7!==0&&ul.textContent%2!==0)
            {
                    if(verifica_primo!==null)
                    {
                        ul.classList.remove("iluminar_primos");
                        verifica_primo=null;
                        console.log ("Hola Mundo")
                    }
            }
        }
    }
}
);





