// operador suma

let numero1 = 25;
let numero2 = 75;
let texto1 = "Curso JavaScript";
// concatenacion caracter es un espacio en blanco &nbsp
let texto2 = "Cenfotec - PACHAVARRIAC";

document.write("Operaciones con suma:<br>");
// concatenacion de datos usando el signo +
document.write(numero1+numero2+"<br>");
document.write(texto1+" "+texto2+"<br>");
document.write(numero1+texto2+"<br>");

document.write("<br><hr><br>");

// operador resta
document.write("Operaciones con resta:<br>");
let n1 = 24;
let n2 = 14;
let r = 0;
r = n1 -n2;
document.write("El resultado de restar "+n1+" y "+n2+" es = "+r+"<br>");
r = -r
document.write("El inverso del resutado es = "+r+"<br>");

document.write("<br><hr><br>");

// Operaciones con división y multiplicación
document.write("Operaciones con división y multiplicación:<br>");

let num1 = 100;
let num2 = 5;
document.write("El resultado de multiplicar "+num1+" por "+num2+" es = "+(num1*num2)+"<br>");
document.write("El resultado de dividir "+num1+" entre "+num2+" es = "+(num1/num2)+"<br>");

document.write("<br><hr><br>");

let nume1 = 10;
let nume2 = 31;
let result = 0;

number1 = nume1;
number2 = nume2;

result = ++nume1;
document.write("El resultado es "+result+" y el número 1 es "+number1+"<br>");
result=--nume2;
document.write("El numero 2 es: "+number2+" y el resultado es "+result+"<br>");

document.write("<br><hr><br>");