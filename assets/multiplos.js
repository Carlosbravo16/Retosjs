//mostrar los multiplos de 8 hasta el valor 500
/*let numero = 8;
do {
    //document.write("multiplos de 8");
    document.write(numero);
    document.write('<br>');
    numero = numero + 8;

} while (numero <= 500);*/
let numeroCuenta, nombreCliente, saldoActual;

do{
numeroCuenta =prompt("Ingrese el numero de cuenta");
nombreCliente =prompt("ingrese el nombre del cliente");
saldo =prompt("ingrese el saldo");
if (cuenta>=0)
{
    document.write("ingrese saldo ");
    if (saldo >0)
    {
    document.write("saldo acreedor");
    suma = suma + saldoActual;
    }
    else 
    {
        if (saldo<0)
    {
    document.write("saldo deudor");
    }
    else{
        document.write("saldo nulo");
    }
}
}
}while (cuenta>=0);
document.write("total de saldos acreedores");
document.write(suma);

