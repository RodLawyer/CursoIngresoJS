/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;
    
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    resultado = precio1 + precio2 + precio3;

    alert("La suma de los precios es: $"+resultado.toFixed(2));
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;
    
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    resultado = (precio1 + precio2 + precio3)/3;

    alert("El promedio de los precios es: $"+resultado.toFixed(2));
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let iva;
    let resultado;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;
    
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    iva = parseFloat(iva);

    iva = (precio1 + precio2 + precio3)*0.21;
    resultado = (precio1 + precio2 + precio3) + iva;

    alert("El precio final +IVA es: $"+resultado.toFixed(2));
}