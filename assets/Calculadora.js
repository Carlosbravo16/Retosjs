let operacion = prompt("seleccione la operacion a realizar: \n 1. Suma \n 2. Resta \n 3. Division \n 4. Multiplicion");
let n1 = prompt("ingrese el primer numero");
let n2 = prompt("ingrese el segundo numero");

let respuesta;

n1 = parseInt(n1);
n2 = parseInt(n2);
switch (operacion) {
    case "1":
        respuesta = n1 + n2;
        alert("la suma entre " + n1 + " mas " + n2 + " es =" + respuesta);
        document.write("la suma entre " + n1 + " mas " + n2 + " es =" + respuesta);
        break;
    case "2":
        respuesta = n1 - n2;
        alert("la resta entre " + n1 + " menos " + n2 + " es =" + respuesta);
        document.write("la resta entre " + n1 + " menos " + n2 + " es =" + respuesta);
        break;
    case "3":
        respuesta = n1 / n2;
        alert("la division entre " + n1 + " dividido " + n2 + " es =" + respuesta);
        document.write("la division entre " + n1 + " dividido " + n2 + " es=" + respuesta);
        break;
    case "4":
        respuesta = n1 * n2;
        alert("la multiplicaion entre " + n1 + " por " + n2 + " es=" + respuesta);
        document.write("la multiplicacion entre " + n1 + " por " + n2 + " es=" + respuesta);

    default:
        alert("no tiene ningun valor")
        break;
}