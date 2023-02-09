function mostrar()
{
	let edad;
	let estadoCivilIngresado;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	estadoCivilIngresado = estadoCivil.options[estadoCivil.selectedIndex].text;

	if (edad >= 18 && estadoCivilIngresado == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}