function borrarFormulario(x) {
    x.preventDefault();
    for (let item of entradaDatos) {
        item.value="";
        item.classList.remove ("border-danger");
    }
    for (let item of tickets) {
        item.classList.remove ("border-success");
    }
    totalPago.classList.add ("d-none"); 
}

function checkError(){
    let informacion =false;
    for (let item of entradaDatos){
        item.value === "" ? item.classList.add ("border-danger"): item.classList.remove ("border-danger");
        formularioVenta.cantidad.value<1 ? formularioVenta.cantidad.classList.add ("border-danger"): 
        formularioVenta.cantidad.classList.remove ("border-danger");
    }
    const categoriaTicket = 
    selectorCategoria.value ==="0" && "Sin descuento" ||
    selectorCategoria.value ==="1" && "Estudiante" ||
    selectorCategoria.value ==="2" && "Trainee" ||
    selectorCategoria.value ==="3" && "Junior";
    const totalPago =
    selectorCategoria.value ==="0" && 200*formularioVenta.cantidad.value ||
    selectorCategoria.value ==="1" && 200*0.2*formularioVenta.cantidad.value ||
    selectorCategoria.value ==="2" && 200*0.5*formularioVenta.cantidad.value ||
    selectorCategoria.value ==="3" && 200*0.85*formularioVenta.cantidad.value;
    if (formularioVenta.cantidad.value>0 && formularioVenta.nombre.value && formularioVenta.apellido.value && formularioVenta.email.value && selectorCategoria.value) {
        informacion={
            categoria: categoriaTicket,
            cantidad: formularioVenta.cantidad.value,
            total: totalPago, 
        }
    }
    return informacion;
}

function resumenFormulario(y) {
    y.preventDefault();
    const completeForm = checkError();
    completeForm && sessionStorage.setItem("formulario", JSON.stringify(completeForm));
    completeForm && exito();
    console.log(completeForm);
}


botonBorrar.onclick = borrarFormulario;
botonResumen.onclick = resumenFormulario;
