/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

numeroSecreto = parseInt(numeroSecreto);
contadorIntentos = parseInt(contadorIntentos);
numeroIngresado = parseInt(numeroIngresado);


function comenzar()
{

  numeroSecreto = Math.floor(Math.random()*100);

  txtIdIntentos.value = 0;

  txtIdNumero.value = "";

}

function verificar()
{

  numeroIngresado = txtIdNumero.value

  contadorIntentos = txtIdIntentos.value;
  contadorIntentos++;
  txtIdIntentos.value = contadorIntentos;

	if (numeroIngresado == numeroSecreto)
    {
		if (contadorIntentos == 1)
		{
			alert("Usted es un psiquico. Primer intento.");
		} else if (contadorIntentos == 2)
			{
				alert("Excelente percepcion. Segundo intento.");
			} else if (contadorIntentos == 3)
				{
					alert("Esto es suerte. Tercer intento");
				} else if (contadorIntentos == 4)
					{
						alert("Excelente tecnica. Cuarto intento");
					} else if (contadorIntentos == 5)
						{
							alert("Usted esta en la media. Quinto intento");
						} else if (contadorIntentos >= 6 && contadorIntentos <= 10)
							{
								alert("Falta tecnica. Intento Nro. "+contadorIntentos);
							} else if (contadorIntentos > 10)
								{
									alert("Afortunado en el amor! Intento Nro. "+contadorIntentos);
								}

    } else if (numeroIngresado > numeroSecreto)
      {

    	alert("Te pasaste "+(numeroIngresado-numeroSecreto));

      } else if (numeroIngresado < numeroSecreto)
        {

          alert("Te faltan "+(numeroSecreto-numeroIngresado));

        }
	
    

}