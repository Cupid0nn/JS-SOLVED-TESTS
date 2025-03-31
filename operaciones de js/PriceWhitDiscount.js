function precioConDescuento(precio, descuento) {
    var porcentajePrecioConDescuento = 100 - descuento; // creamos la variable con el descuento
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; // creamos la variable con el precio con descuento
    return '$' + precioConDescuento; // retornamos el precio con descuento
}

console.log(precioConDescuento(100, 20)); // '$80'
console.log(precioConDescuento(50, 10));  // '$45'
