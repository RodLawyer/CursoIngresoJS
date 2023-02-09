/*
Se ingresará por id el valor de una compra de productos para el hogar.
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto
de compra mayorista. El programa deberá mostrar por alert importe bruto, el iva, 
el importe con iva, el valor del descuento y el total a pagar.*/

function mostrar()
{
	let importeBruto;
	let iva;
	let totalIva;
	let descuentoMayorista;
	let valorTotal;

	importeBruto = txtIdPrecio.value;

	importeBruto = parseFloat(importeBruto);
	iva = parseFloat(iva);
	totalIva = parseFloat(totalIva);
	descuentoMayorista = parseFloat(descuentoMayorista);
	valorTotal = parseFloat(valorTotal);

	iva = importeBruto * 0.21;

	descuentoMayorista = importeBruto * 0.05;

	totalIva = importeBruto + iva;

	valorTotal = totalIva - descuentoMayorista;

	alert("Importe bruto: $"+importeBruto+"\n IVA 21%: $"+iva.toFixed(2)+"\n Importe con IVA: $"+totalIva.toFixed(2)+"\n Descuento mayorista del 5%: $"+descuentoMayorista.toFixed(2)+"\n Total a pagar: $"+valorTotal.toFixed(2));

}


