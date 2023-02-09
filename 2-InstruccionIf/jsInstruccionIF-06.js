function mostrar()
{
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad < 13)
	{
		alert("Es niño");
	} else if (edad >= 13 && edad <= 17)
		{
			alert("Es adolescente");
		} else if (edad > 17)
			{
				alert("Es adulto");
			}
}