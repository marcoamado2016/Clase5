var empleados = [{nombre: 'Juan', apellido : 'Pedro', edad: 40}, {nombre: 'Ana', apellido : 'García', edad: 25}, {nombre: 'Maria', apellido : 'Zarate', edad: 34}]

ciclo()//funcionalidad que no responde a un evento

function agregar(){

info1 = document.getElementById('nombreCaja').value 
info2 = document.getElementById('apellidoCaja').value 
info3 = document.getElementById('edadCaja').value

let cadena=""
cadena=info1.substr(1,info1.length-1)
info1=info1[0].toUpperCase().concat(cadena);

cadena=info2.substr(1,info1.length-1)
info2=info2[0].toUpperCase().concat(cadena);

empleados.push({nombre: info1, apellido: info2, edad: info3})
document.getElementById('nombreCaja').value  = ""
document.getElementById('apellidoCaja').value = ""
document.getElementById('edadCaja').value = "" 
//La primera letra mayuscula y el resto minuscuka


/*
function cadena(){
let nombre="marco amado";
let cadena=""
cadena=nombre.substr(1,nombre.length-1)
return nombre[0].toUpperCase().concat(cadena);
}

*/
ciclo()

}


function ciclo(){

mensaje = '<tr><th> Nombre </th><th>Apellido</th><th>Edad</th></tr>'
for( i= 0;  i  < empleados.length; i++) {
mensaje += '<tr><td>' + empleados[i].nombre + '</td><td>' + empleados[i].apellido + '</td><td>' + empleados[i].edad + '</td></tr>'
}

document.getElementById('caja').innerHTML = mensaje

}


