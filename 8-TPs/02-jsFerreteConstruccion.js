/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambre;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    alambre = parseFloat(alambre);

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    alambre = ((2 * largo) + (2 * ancho)) * 3;

    alert("La cantidad de alambre para un terreno de "+largo+"m x "+ancho+"m es de: "+alambre.toFixed(2)+" metros");

}
function Circulo () 
{
	let radio;
    let alambre;

    radio = parseFloat(radio);
    alambre = parseFloat(alambre);

    radio = txtIdRadio.value;

    alambre = (2 * Math.PI * radio) * 3;

    alert("La cantidad de alambre para un terreno de radio "+radio+"m es de: "+alambre.toFixed(2)+" metros");
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    area = parseFloat(area);

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    area = largo * ancho;

    area = Math.ceil(area);

    cemento = area * 2;

    cal = area * 3;

    alert("Para un area de "+largo+"m x "+ancho+"m se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");

}