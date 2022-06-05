// DESAFIO 2 - SIMULADOR



const product1 = 'Bosque';
const product2 = 'Sirena';
const product3 = 'Selva';

function addCart(producto, detalle, precio) {
    let compraFinal = `Agregaste al carrito el Kit ${producto},
    Detalle: ${detalle}
    Valor: $${precio}`;
    return compraFinal;
}


alert(addCart(product2,"Kit cola de sirena", 1600));

let total = 1600;
let dreams = 600;
let cupon = "dreams";
let descuento = 0;

let nombreCupon = prompt("Ingrese cupón de descuento");

if (nombreCupon === cupon) {
    descuento = total - dreams;
    alert("Con tu cupón de descuento, el total de tu compra es de $" + descuento);
    alert("Haz click en aceptar para finalizar la compra");
} else {
    alert("No ingresaste el cupón, por favor ingresa uno");
    nombreCupon = prompt("Ingrese cupón de descuento");
}
