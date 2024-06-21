document.getElementById("generateButton").addEventListener("click", generarTabla);
document.getElementById("clearButton").addEventListener("click", limpiarTabla)

function generarTabla () {
    const datosRecibidos = parseInt(document.getElementById("numberInput").value);
    const mostrarTabla = document.getElementById("tableContainer")
    mostrarTabla.innerHTML = "";

    if (isNaN(datosRecibidos) || datosRecibidos  <= 0) {
        alert("Por favor ingrese un número valido");
        return;
    }

    //crear tabla 
    const crearTabla = document.createElement("table");
    //crear fila del encabezado
    const filaDelEncabezado = crearTabla.insertRow();
    //crear celdas dentro del encabezado
    const celdaDelEncabezado = document.createElement("th");

    celdaDelEncabezado.textContent = `Tabla de Multiplicar del ${datosRecibidos}`
    filaDelEncabezado.appendChild(celdaDelEncabezado);

    for (let i = 1; i <= 10; i++) {
        //creamos las filas en el cuerpo de la tabla
        const fila = crearTabla.insertRow();
        //dentro de la fila insertamos las celdas 
        const celda = fila.insertCell();
        //en la celda mostramos la tabla de multiplicar
        celda.textContent = `${datosRecibidos} X ${i} = ${datosRecibidos * i}`
        console.log(celda)
    }

    mostrarTabla.appendChild(crearTabla);
}


function limpiarTabla () {
    document.getElementById("numberInput").value = "";
    document.getElementById("tableContainer").innerHTML = "";
}