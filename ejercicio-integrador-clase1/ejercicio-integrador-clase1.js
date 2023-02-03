
function mostrar()
{
    let razonsocial;
    let nombre;
    let dni;
    let fecha;
    let aleatorio;

    dni = dniTitular.value;
    fecha = fechaInicio.value;

    razonsocial = prompt("Ingrese razon social");
    nombre = prompt("Ingrese nombre");

    aleatorio = Math.floor(Math.random()*10+1);

    alert("Nombre del titular: "+nombre+"\n Razon social: "+razonsocial+"\n DNI: "+dni+"\n Fecha de inicio: "+fecha+"\n CUIT Empresa: 30-"+dni+"-"+aleatorio);

}
