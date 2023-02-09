function mostrar()
{
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad < 13 || edad > 17)
	{
		alert("NO es adolescente");
	}	else
		{
			alert("Es adolescente");
		}

}