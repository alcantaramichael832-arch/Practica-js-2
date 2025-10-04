
// pedir dos valores al usuario y hacer todas las operaciones basicas y mostrar el resultado en la consola

// que el usuario elija la operacion
const operacion = prompt('ingresa la operaciones que deseas realizar +, -, *, /, %,')

const valor1 = parseInt( prompt('ingrese un valor'));
const valor2 = parseInt( prompt('igrese un valor'));

const suma = valor1 + valor2
const resta = valor1 - valor2
const multiplicacion = valor1 * valor2
const division = valor1 / valor2
const modulo = valor1 % valor2

if (operacion === '+' ) {
    alert('El resultado de la suma es' + suma);
}
else if (operacion === '-' ) {
    alert('El resultado de la resta es' + resta);
}
else if (operacion === '*' ) { 
    alert('El resultado de la multiplicacion es' + multiplicacion);
}
else if (operacion === '/' ) {
    alert('El resultado de la divisione es' + division);
}
else if (operacion === '%' ) { 

    alert('El resultado de la modulo es' + modulo);
}

