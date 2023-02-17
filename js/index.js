function cargarContactos() {
    fetch("http://www.raydelto.org/agenda.php").then(function (resultado) {
        return resultado.json();
    }).then(function (resultado) {
        const contacto = resultado[0];
        const listadoContactos = document.getElementById("listadoContactos");
        listadoContactos.innerHTML = contacto.nombre + " " + contacto.apellido + " " + contacto.telefono;
    });
}