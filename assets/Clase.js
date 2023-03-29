/*let num1 ="7";
let num2 ="5";
let operacion = Number(num1) + Number (num2);

document.write(operacion);

let num1 = 7;
let transformaNumber = toString(num1);

document.write(typeof(transformaNumber));
*

 let estacion = prompt("Escricbe una estacion en minuscula");
 switch (estacion){
    case"Invierno":
    alert("todo es frio");
    break;

    case "Primavera":
        alert("Se colorea el mundo");
        break;

        case "Verano":
            alert("las noches se hacen largas");
            break;

            case "otoño":
                alert("Donde habia color ya no queda nada");
                break;

                default:
                    alert("Eso no es una estacion");
                    break;
 }
for(i=1;i<=10;i++){
    document.write("El valor del bucle es:" + i + "<br>");
}
let numero = prompt("ingrese el numero natural: ");
let fact = 1 ;
for (let i = 1; i < numero; i++){
    fact*=i;
}
document.write("el factorial es de " + numero + " es " */
/*let pizzaMargarita = ["masa", "tomate", "queso", "especias"];
console.log(pizzaMargarita[2]);

//cambiar un elemento del arreglo
pizzaMargarita[1] = "piña";
console.log(pizzaMargarita[1]);

 //pripiedad length tamaño del arreglo
let pizzaMargarita1 = ["masa", "tomate", "queso", "especias"];
console.log(pizzaMargarita1.length);*/

let pizzaMargarita2 = ["masa", "tomate", "queso", "especias"];
document.write('<h1>listado de ingredientes <br></h1>');
for (let f =0; f < pizzaMargarita2.length; f++){
    document.write("<li>" + pizzaMargarita2[f] + '</li>');
}
"</ul>"
//ordenar arreglos
let pizzaMargarita3 = ["masa", "tomate", "queso", "especias"];
console.log(pizzaMargarita3.sort());
let numeros =[ 2, 8, 5, 1, 0];
consolo-log(numeros.sort());

//agregar elementos 
const fruits =["banano", "naranja", "manzana"];
fruits.push("limon");
console.log(fruits);

//para agrgar un nuevo elemento 
fruits[fruits.length]= "melon";
console.log(fruits);

//para agregar al principio un elemento 
fruits.unshift("piña");
console.log(fruits);

//eliminar elementos el primero 
const fruits =["banano", "naranja", "manzana"];
fruits.shift();
console.log(fruits);

//devulve el valor desplazado 
const fruits =["banano", "naranja", "manzana"];
let fruit = fruits.shift();
console.log(fruit);






