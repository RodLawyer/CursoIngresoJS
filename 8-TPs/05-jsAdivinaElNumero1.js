/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

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

      alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");

    } else if (numeroIngresado > numeroSecreto)
      {

        alert("Te pasaste "+(numeroIngresado-numeroSecreto));

      } else if (numeroIngresado < numeroSecreto)
        {

          alert("Te faltan "+(numeroSecreto-numeroIngresado));

        }
	
    

}