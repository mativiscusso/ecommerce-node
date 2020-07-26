$(document).ready(function ($) {
    /* Función jQuery para el evento clic en la etiqueta "x" con la clase (.carrito-total)*/
    $(".carrito-total").click(function () {
        //Mostrar los items del carrito
        $(".bolsa").slideToggle();
    });
});

//SIMPLE CART
//Configuraciones básicas, recuerda tu lo puedas adaptar a tu medida
simpleCart({
    cartColumns: [
        { view: "image", attr: "image", label: "Imagen" }, //obtiene la imagen
        { attr: "name", label: "Name" }, //obtiene el nombre
        { attr: "quantity", label: "Qty" }, //obtiene la cantidad del producto
        { view: "currency", attr: "total", label: "SubTotal" }, // Obtiene el precio total del producto
        { view: "remove", text: "X", label: false }, //Quita o remueve el producto
    ],

    cartStyle: "table", //puede ser div o table

    checkout: {
        type: "PayPal", //Pago a través de PayPal
        email: "tu-correo@dominio.com", //tu correo válido
    },
});
function addElement() {
    // crea un nuevo div
    // y añade contenido
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

let header = document.querySelector("header");
let btnCheckout = document.querySelector("#btnCheckout");

btnCheckout.onclick = function (e) {
    e.preventDefault();
    let url = "http://localhost:3000/orders/checkout";
    let cartItems = JSON.parse(localStorage.getItem("simpleCart_items"));
    let cartTotalConCaracteres = document.querySelector(".simpleCart_total").innerHTML;

    // Quito caracter simbolo peso
    let cartTotal = cartTotalConCaracteres.replace(/[^\d.-]/g, '')

    console.log(cartTotal);


    let data = {items : Object.values(cartItems),  totalPrice: cartTotal };

    fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            let alert = document.createElement("div", "alert-checkout");
            alert.innerHTML += `<div class="alert alert-success fixed-top w-50 alert-dismissible fade show" role="alert">
        <strong>${data}</strong> Su pedido fue ingresado
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
            // añade el elemento creado y su contenido al DOM
            var currentDiv = document.querySelector("footer");
            document.body.insertBefore(alert, currentDiv);
        })
        .catch((error) => console.log("Error:", error));
};
