/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadLamparas;
    let marcaSeleccionada;  
    let IBB;

    IBB = parseFloat(IBB);

    marcaSeleccionada = Marca.options[Marca.selectedIndex].text;

    if (txtIdCantidad.value >= 6)
    {

        txtIdprecioDescuento.value = (35*txtIdCantidad.value)/2;
        alert("6 o mas de cualquier marca son 50% OFF!");

    } else if (txtIdCantidad.value == 5)
        {
            if (marcaSeleccionada == "ArgentinaLuz")
            {
                txtIdprecioDescuento.value = (35*txtIdCantidad.value) - (35*txtIdCantidad.value*0.4);
                alert("5 de ArgentinaLuz son 40% OFF!");
            } 
            else
            {
                txtIdprecioDescuento.value = (35*txtIdCantidad.value) - (35*txtIdCantidad.value*0.3);
                alert("5 de cualquier marca excepto ArgentinaLuz son 30% OFF!");
            }
    } else if (txtIdCantidad.value == 4)
        {
            if (marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas")
            {
                txtIdprecioDescuento.value = (35*txtIdCantidad.value) - (35*txtIdCantidad.value*0.25);
                alert("4 de ArgentinaLuz o FelipeLamparas son 25% OFF!");
            }
            else
            {
                txtIdprecioDescuento.value = (35*txtIdCantidad.value) - (35*txtIdCantidad.value*0.2);
                alert("4 de cualquiera menos ArgentinaLuz o FelipeLamparas son 20% OFF!");
            }
    } else if (txtIdCantidad.value == 3)
        {
            if (marcaSeleccionada == "ArgentinaLuz")
            {
                txtIdprecioDescuento.value = (35*txtIdCantidad.value) - (35*txtIdCantidad.value*0.15);
                alert("3 de ArgentinaLuz son 15% OFF!");
            }
            else if (marcaSeleccionada == "FelipeLamparas")
            {
                txtIdprecioDescuento.value = (35*txtIdCantidad.value) - (35*txtIdCantidad.value*0.10);
                alert("3 de FelipeLamparas son 10% OFF!");
            }
            else
            {
                txtIdprecioDescuento.value = (35*txtIdCantidad.value) - (35*txtIdCantidad.value*0.05);
                alert("3 de cualquier marca menos ArgentinaLuz y FelipeLamparas son 5% OFF!");
            }
    } else if (txtIdCantidad.value < 3 )
        {
            txtIdprecioDescuento.value = 35*txtIdCantidad.value;
        }

    if (txtIdprecioDescuento.value >= 120)
        {
            txtIdprecioDescuento.value = parseFloat(txtIdprecioDescuento.value) + 35*parseFloat(txtIdCantidad.value)*0.1;


            alert("IBB Usted pago $"+(35*txtIdCantidad.value*0.1));
        }

}
