/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;

	sueldo = txtIdSueldo.value;

	sueldo = parseInt(sueldo);
	resultado = parseInt(resultado);

	resultado = sueldo * 0.10 + sueldo;
	
	txtIdResultado.value = resultado;
}
