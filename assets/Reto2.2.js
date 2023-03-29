let num = prompt("Ingrese un numero:");
var num1 = prompt("Ingrese otro numero:");
if (num < num1){
    alert(num + " Es menor que " + num1 + ".");
    document.write(num + " Es menor que " + num1 + ".");
    console.log(num + " Es menor que " + num1 + ".");
}else if (num > num1){
    alert(num + " Es mayor que " + num1 + ".");
    document.write(num + " Es mayor que " + num1 + ".");
    console.log(num + " Es mayor que " + num1 + ".");
}else if (num == num1){
    alert(num + " Es igual que " + num1 + ".");
    document.write(num + " Es igual que " + num1 + ".");
    console.log(num + " Es igual que " + num1 + ".");
}