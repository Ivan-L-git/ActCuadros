/* En este archivo se encargarán de generar el código que hará dinámica la página */
//let cuadros_pares=document.getElementsByClassName("par");
//let cuadros_impares=document.getElementsByClassName("impar");

a=`
let boton_par=document.getElementById("pares");
let boton_impares=document.getElementById("impares");
let boton_primos=document.getElementById("primos");

boton_par.addEventListener("click", ()=>
{
    if(ilumina_pares==null) //verificación sobre si los pares están iluminados o no
    {
        ilumina_pares="ilumina_pares"; //si no están iluminados, los iluminará
    }
    else
    {
        ilumina_pares=null;
    }
}
);
`;

