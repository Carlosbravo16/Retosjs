let n1 = prompt("Ingrese el primer numero:");
var n2 = prompt("Ingrese el segundo numero:");
var n3 = prompt("Ingrese el tercer numero:");
if (n1 > n2){
    alert(n1 + " Es mayor que " + n2);
    if (n1 > n3){
        alert(n1 + "Es mayor que " + n3);
        if (n3 > n2){
            alert(n3 + " Es mayor que " + n2);
            alert(n1 + " Es el numero mayor, " + n3 + "Es el numero neutral, " + n2 + "Es el numero menor");
        }else{
            alert(n3 + " Es menor que " + n2);
            alert(n1 + " Es el numero mayor, " + n2 + "Es el numero neutral, " + n3 + "Es el numero menor");
        }
    }else {
        alert(n1 + " Es menor que " + n3); 
        if (n3 > n2){
            alert(n3 + " Es mayor que " + n2); 
            alert(n3 + " Es el numero mayor, " + n1 + "Es el numero neutral, " + n2 + "Es el numero menor");  
        }else {

        }
    }
}
else {
    alert(n1 + " Es menor que " + n2);
    if (n2 > n3){
        alert(n2 + " Es mayor que " + n3);
        alert(n2 + " Es el numero mayor, " + n3 + "Es el numero neutral, " + n1 + "Es el numero menor");   
    } else{
        alert(n2 + " Es menor que " + n3); 
        alert(n3 + " Es el numero mayor, " + n2 + "Es el numero neutral, " + n1 + "Es el numero menor"); 
    }
}