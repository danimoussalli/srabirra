//SIMULADOR INTERACTIVO
//CALCULAR EL COSTO DE UN PRODUCTO


//CREO UNA FUNCION PARA CALCULAR EL VALOR FINAL DE LA COMPRA
const calcularTotal = function (cantidad, precioUnitario){
    let total = cantidad * precioUnitario;
    return total;
}

// --- Pido que ingrese los valores de cantidad y precio para poder calcular el valor final
let cantidad = parseInt(prompt("Ingrese la cantidad"));
let precioUnitario = parseInt(prompt("Ingrese precio"));

// --- Calculo el valor total a pagar 
let total = calcularTotal (cantidad, precioUnitario);
console.log("El precio a pagar es: " + total);
// FIN FUNCION




//INGRESO CUPON DE DESCUENTO
function cuponDescuento (codigo){
    if (codigo == "PRIMERACOMPRA"){
        // calculo el valor final con descuento
        let calculoDescuento = (total * 10 ) / 100;
        let totalConDescuento = total - calculoDescuento
        // verifico que este bien hecho el calculo
        console.log(totalConDescuento); 
        return totalConDescuento;
    }else{
        // asigno el valor final sin descuento
        totalConDescuento = total;
        return totalConDescuento;
    }
}

// --- Solicitò el nombre del cupon
let codigo = prompt("Ingrese codigo de descuento");
// --- Paso el codigo a mayuscula
codigo = codigo.toLocaleUpperCase();
// --- Veo que codigo fue el ingresado
console.log("Codigo Ingresado: " + codigo);
// --- Llamo a la funcion
let totalFinal = cuponDescuento(codigo);

// --- Depende el codigo ingresado es el mensaje a mostrar
if (codigo == "PRIMERACOMPRA"){
    alert("El precio total con descuento es " + totalFinal);
} else{
    alert("El precio total sin descuento es " + totalFinal);
}
// FIN CUPON