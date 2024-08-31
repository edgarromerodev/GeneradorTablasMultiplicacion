document.addEventListener("DOMContentLoaded", () => {
    const botonGenerar = document.getElementById("botonGenerar")
    botonGenerar.addEventListener("click", generarTabla)


    function generarTabla () {
        const datosRecibidos = document.getElementById("numberInput").value; 
        const mostrarTabla = document.getElementById("tableContainer")
        mostrarTabla.innerHTML = ""

        if (isNaN(datosRecibidos) || datosRecibidos <= 0) {
            alert("Por favor ingrese un número válido");
            return;
        }
        //crear tabla 
        const tabla = document.createElement("table")
        //crear fila del encabezado
        const filaEncabezado = tabla.insertRow()
        //crear celdas dentro del encabezado
        const celdasEncabezado = document.createElement("th")

        celdasEncabezado.textContent = `Tabla de multiplicar del ${datosRecibidos}`   

        filaEncabezado.appendChild(celdasEncabezado)

        for (let i = 1; i <= 10; i++) {
            //creamos las filas en el cuerpo de la tabla
            const fila = tabla.insertRow()
            //dentro de la fila insertamos las celdas 
            const celda = fila.insertCell()

            celda.textContent = `${datosRecibidos} X ${i} = ${datosRecibidos * i}`
          
        }

        mostrarTabla.appendChild(tabla)

    }


    document.getElementById("botonLimpiar").addEventListener("click", 
        function limpiarTabbla() {
            document.getElementById("numberInput").value = "";
            document.getElementById("tableContainer").innerHTML = ""
        }
    )


})