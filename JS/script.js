//Ingreso de usuario
var alumno = prompt("ingrese nombre del alumno")

//ingreso de notas

var nota1 = Number(prompt("ingrese primera nota"))
var nota2 = Number(prompt("ingrese segunda nota"))
var nota3 = Number(prompt("ingrese tercera nota"))

var promedio = (nota1 + nota2 + nota3)/3

alert("El promedio del alumno: " + alumno + " es " + promedio)