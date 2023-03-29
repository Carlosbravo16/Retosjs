let Nombre = prompt("Ingrese el nombre del postulante");
var Cantidad = prompt("Ingresa la cantidad de preguntas");
let Correctas = prompt("Ingrese las respuestas correctas");

resultado =(Correctas/Cantidad)*100;

if (resultado>=90){
    document.write("su porcentaje es, " + resultado + " tiene un nivel ALTO");
}else if (resultado>=75 && resultado<90){
    document.write("su porcetanje es, " + resultado + " tiene un nivel superior");
}else if (resultado>=60 && resultado<75){
    document.write("su porcentaje es, " + resultado + " tiene un nivel regular");
}else if (resultado<60){
    document.write("su porcentaje es, " + resultado + " tiene un nivel muy bajo");
}
