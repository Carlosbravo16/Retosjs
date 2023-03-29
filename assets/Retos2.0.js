let num = prompt("Ingrese un numero:");
if (num < 0){
    alert("El numero: " + num + ", es negativo ");
    document.write(" El numero: " + num + ", es negativo ");
    console.log(" El umero: " + num + ", es negativo");
}else if (num > 0 ){
    alert("El numero: " + num + ", es positivo");
    document.write("El numero: " + num + ", es positivo");
    console.log("El numero: " + num + ", es positivo");
}else if (num == 0){
    alert("El numero es igual a 0");
    document.write("El numero es igual a 0");
    console.log("El numero es igual a 0");

}