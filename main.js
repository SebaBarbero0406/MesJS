let mes = prompt("Ingrese un mes en minusculas")

if(mes == "enero" || mes == "marzo" || mes == "mayo" || mes == "julio" || mes == "agosto" || mes == "octubre" || mes == "diciembre" )
    {
        alert("Este mes tiene 31 dias")
    }
else if(mes == "abril" || mes == "junio" || mes == "septiembre" || mes == "noviembre")
    {
        alert("Este mes tiene 30 dias")
    }
    else if(mes == "febrero")
        {
            alert("Este mes tiene 28 dias")
        }
    else
    {
        alert("Este mes no existe")
    }