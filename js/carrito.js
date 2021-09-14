//VOY LLAMANDO A LAS FUNCIONES
$(document).ready(function () {
  mostrarProductos();
  suscribir();
});


let carrito = [];
let contar = 0;
let precio = 0;

//Armo mi grilla de productos
const mostrarProductos = () => {
  for (const producto of productos) {
    $("#todosLosProductos").append(`<div class = "col mb-4"> 
                          <div class = "card">
                            <div class = "inner">
                              <img class = "card-img-top" src = ${producto.imagen}> </img>
                              </div>
                              <div class ="card-body">
                              <h2 class  = "card-title card__h2--marron"> ${producto.nombre}</h2>
                              <p class = "card-text card__texto"> Precio: ${producto.precio} </p>
                              <button class = "btn btn-info" id="btn${producto.id}">Agregar al Carrito</button> 
                              </div>                
                            </div>            
                          </div>
                        </div>`);
    //Boton agregar producto + acciòn de agregado
    $(`#btn${producto.id}`).on("click", function () {
      Swal.fire({
        title: "Agregaste al carrito:",
        text: `${producto.nombre}`,
        icon: "success",
      });
      //Plantilla del producto agrefado al carrito
      $("#itemCarrito").prepend(`<div class = "col mb-4"> 
                            <div class = "card">
                                <div class ="card-body">
                                <h2 class  = "card-title card__h2--marron"> ${producto.nombre} </h2>
                                <p class = "card-text card__texto"> Precio: ${producto.precio} <button class="fas fa-trash btn btn-danger" style="margin-left: 6.4vW;" id="borrarElemento"></button></p>
                                
                                </div>                
                              </div>            
                            </div>
                          </div>`);

      //contador de productos 
      contar = contar +1 ;
      $("#contadorCarrito").html(`<div class='btn btn-info bInfo bFuente mb-2'>${contar}</div>`);                
      

      //Local Storage : TERMINAR DE RESOLVER
      carrito = JSON.parse(localStorage.getItem("carrito"));
      if (carrito == null){
          carrito = []
      }
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));


      $(".esconder").hide();
      //Calculo precio
      precio = precio + producto.precio;
      // CREO LA PARTE DE TOTAL 
      $("#totalTexto").html(`<h2 id="p1">Total: ${precio}</h2>`);
      $("#p1").css({  "color": "#4f8a8b", 
                      "text-align": "left", 
                      "borderLeft": "3px solid #fdb90f",
                      "padding-top": "1rem",
                      "padding-bottom": "1rem",
                      "padding-left": "1rem"})
                      .slideUp("fast")
                      .delay(2000)
                      .slideDown("slow");
    });
 
  }

};


//JSON
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

guardarLocal("listaDeProductos", JSON.stringify(productos));
const Productosalmacenados = JSON.parse(localStorage.getItem("listaDeProductos"));



//SUSCRIPCION NEWSLETTER
//Declaramos la url que vamos a usar para el GET
const URLPOST   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  {mail:$("#email").text()};



const suscribir = () => {
  $("#formulario").submit(function(e) {
      //prevenir el comportamiento del submit
      e.preventDefault();
    
      $("#enviar").click(() => {
        $.ajax({
            method: "POST",
            url: URLPOST,
            data: infoPost,
            success: function(respuesta) {
              if ($("#email").val().length != 0) {
                Swal.fire({
                title: 'Próximamente te llegaran nuestras promociones al mail:',
                imageUrl: 'img/prueba.gif',
                text: `${respuesta.mail}`,
                imageWidth: 128,
                imageHeight: 128,
                imageAlt: 'Cerveza gif',
              })
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Para poder recibir nuestras promociones tenés que registrar tu mail',
              });
            }
          //blanqueo label
          $("#email").val('');
            }
          });   
      });
  });        
 };