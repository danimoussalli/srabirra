//CREO OBJETO PARA ARMAR CADA PRODUCTO
class Producto {
  constructor(nombre, precio, stock, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }
}

//Array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("IPA", "200", "5", "img/tienda/ipa.png"));
productos.push(new Producto("Porter", "300", "8", "img/tienda/porter.png"));
productos.push(new Producto("Bock", "250", "10", "img/tienda/bock.png"));
productos.push(new Producto("Pale Ale", "150", "8", "img/tienda/paleale.png"));
productos.push(new Producto("Pilsener", "190", "2", "img/tienda/pilsener.png"));
productos.push(new Producto("Stout", "290", "2", "img/tienda/stout.png"));
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


// CLASE 8 -- CREO CARDS
let divi = document.createElement("div");
divi.setAttribute(
  "class",
  "row row-cols-1 row-cols-sm-2 row-cols-md-3 card__margen"
);

for (const producto of productos) {
  let divCardBase = document.createElement("div");
  divCardBase.setAttribute("class", "col mb-4");

  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
  divCardBase.appendChild(divCard);

  //PARTE IMAGEN
  let divCardInner = document.createElement("div");
  divCardInner.setAttribute("class", "inner");
  divCard.appendChild(divCardInner);

  let cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card-img-top");
  cardImg.setAttribute("src", producto.imagen);
  divCardInner.appendChild(cardImg);

  //CREO BODY DE LA CARD
  let divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");
  divCard.appendChild(divCardBody);

  //CONTENIDO DE TEXTO DE LA CARD + BOTON
  let cardNombre = document.createElement("h5");
  cardNombre.setAttribute("class", "card-title card__h2--marron");
  cardNombre.innerText = producto.nombre;
  divCardBody.appendChild(cardNombre);

  let cardPrecio = document.createElement("p");
  cardPrecio.innerText = `Precio: ${producto.precio}`;
  cardPrecio.setAttribute("class", "card-text card__texto");
  divCardBody.appendChild(cardPrecio);

  let cardBoton = document.createElement("button");
  cardBoton.setAttribute("class", "btn btn-info agregar");
  cardBoton.innerHTML = "Agregar al carrito";
  divCardBody.appendChild(cardBoton);

  divi.appendChild(divCardBase);
}

document.getElementById("llamar").appendChild(divi);

//BOTON AGREGAR
let botonAgregar = document.getElementsByClassName("agregar");
for (const agregar of botonAgregar) {
  /*console.log(agregar.innerHTML);*/
  agregar.onclick = () => {
    alert("Producto Agregado");
  };
}

//DOM 8
let nombre = prompt("Ingrese su nombre");
let manejoNombre = document.getElementById("nombre");
manejoNombre.setAttribute("class", "p__texto");
manejoNombre.innerHTML = `<h1> Hola: ${nombre} </h1>
                        <h2>Ya podes elegir tus cerveza preferida en nuestra tienda</h2>`;

//JSON
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
guardarLocal("listaDeProductos", JSON.stringify(productos));
const Productosalmacenados = JSON.parse(
  localStorage.getItem("listaDeProductos")
);


/*VISTA DESDE CONSOLA
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave: " + clave);
  console.log("Valor: " + localStorage.getItem(clave));
}
*/

//Evento de ventana
window.onload = () => {
  console.log("Ventana cargada");
};

