function ticketsOver(ticket) {
    ticket.classList.add("border-primary");
}

function ticketsLeave(ticket) {
    ticket.classList.remove("border-primary");
}

function ticketsClick(ticket) {
    ticket.classList.add("border-success");
    for (let item of tickets) {
        if (item.id !== ticket.id) {
            item.classList.remove("border-success");
        }
    }
    selectorCategoria.value =
        ticket.id === "ticketEstudiante" && "1" ||
        ticket.id === "ticketTrainee" && "2" ||
        ticket.id === "ticketJunior" && "3";
}

function categoriaChange (){
    selectorCategoria.value === "1" && ticketsClick(ticketEstudiante);
    selectorCategoria.value === "2" && ticketsClick(ticketTrainee);
    selectorCategoria.value === "3" && ticketsClick(ticketJunior);
    if (selectorCategoria.value === "0") {
        for (let item of tickets) {
            item.classList.remove ("border-success");
        }
    }
}


function asignarEventos(ticket) {
    ticket.addEventListener("mouseover",() =>ticketsOver(ticket));
    ticket.addEventListener("mouseleave",() =>ticketsLeave(ticket));
    ticket.addEventListener("click",() =>ticketsClick(ticket));
}

asignarEventos(ticketEstudiante);
asignarEventos(ticketTrainee);
asignarEventos(ticketJunior);

selectorCategoria.addEventListener("change", categoriaChange);