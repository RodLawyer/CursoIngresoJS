/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaF;
    let temperaturaC;

    temperaturaF = parseFloat(temperaturaF);
    temperaturaC = parseFloat(temperaturaC);

    temperaturaF = txtIdTemperatura.value;

    temperaturaC = (temperaturaF - 32) * (5/9);
    
    alert(+temperaturaF+" Grados Fahrenheit son "+temperaturaC.toFixed(2)+" Grados Centigrados");
}

function CentigradosFahrenheit () 
{
	let temperaturaF;
    let temperaturaC;

    temperaturaF = parseFloat(temperaturaF);
    temperaturaC = parseFloat(temperaturaC);

    temperaturaC = txtIdTemperatura.value;

    temperaturaF = (temperaturaC * (9/5)) + 32;
    
    alert(+temperaturaC+" Grados Centigrados son "+temperaturaF.toFixed(2)+" Grados Fahrenheit");
}
