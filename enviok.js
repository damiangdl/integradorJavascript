function exito(){
    totalPago.classList.remove("d-none");
    let resumen = sessionStorage.getItem("formulario");
    resumen = JSON.parse(resumen);
    document.getElementById("totalPago").innerHTML = 
    `Total compra: <br>
    - Categoria: ${resumen.categoria} <br>
    - Cantidad de tickets: ${resumen.cantidad} <br>
    - Total a pagar: ${resumen.total}`
}