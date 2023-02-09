function mostrar()
{
	let edad;
	let estadoCivilSelec;

	edad = txtIdEdad.value;

	estadoCivilSelec = estadoCivil.options[estadoCivil.selectedIndex].text;

	edad = parseInt(edad);

	if (edad < 18 && estadoCivilSelec != "Soltero")
	{
		alert("Es muy joven para NO ser soltero");
	}

}