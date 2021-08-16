//CREO OBJETO PARA ARMAR CADA PRODUCTO
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

//Array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("IPA", "200", "5"));
productos.push(new Producto("Scotish", "300", "8"));
productos.push(new Producto("Bock", "250", "10"));
productos.push(new Producto("Pale Ale", "150", "8"));
console.log(productos);


//CREO UNA FUNCION PARA CALCULAR EL VALOR FINAL DE LA COMPRA
const calcularTotal = function (cantidad, precioUnitario) {
  let total = cantidad * precioUnitario;
  return total;
}

// --- Pido que ingrese los valores de cantidad y precio para poder calcular el valor final
let cantidad = parseInt(prompt("Ingrese la cantidad"));
let precioUnitario = parseInt(prompt("Ingrese precio"));

// --- Calculo el valor total a pagar
let total = calcularTotal(cantidad, precioUnitario);
alert("El precio a pagar es: " + total);


//INGRESO CUPON DE DESCUENTO
function cuponDescuento(codigo) {
  codigo = codigo.toLocaleUpperCase();
  console.log("Codigo Ingresado: " + codigo);
  if (codigo == "PRIMERACOMPRA") {
    // calculo el valor final con descuento
    let calculoDescuento = (total * 10) / 100;
    let totalConDescuento = total - calculoDescuento;
    // verifico que este bien hecho el calculo
    console.log(totalConDescuento);
    return totalConDescuento;
  } else {
    // asigno el valor final sin descuento
    totalConDescuento = total;
    return totalConDescuento;
  }
}
let codigo = prompt("Ingrese codigo de descuento");
// --- Llamo a la funcion
let totalFinal = cuponDescuento(codigo);

function mostrarMensajeDescuento(totalFinal){
if (codigo == "PRIMERACOMPRA") {
  alert("El precio total con descuento es " + totalFinal);
} else {
  alert("El precio total sin descuento es " + totalFinal);
}
}
mostrarMensajeDescuento(totalFinal);