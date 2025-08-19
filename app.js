function enviarFormulario(event) {
  event.preventDefault();

  const paquete = document.getElementById("paqueteSeleccionado").value;
  const nombre = document.getElementById("nombreInput").value;
  const telefono = document.getElementById("telefonoInput").value;
  const fecha = document.getElementById("fechaInput").value;
  const hora = document.getElementById("horaInput").value;

  fetch('https://script.google.com/macros/s/AKfycbwgjc1zEOlULrVX2rmbucBd48hdr9flSW0DUX9hsCfSqONxuVtk2OOMgbkiDYaDcbkPOA/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paquete, nombre, telefono, fecha, hora })
  })
  .then(res => res.json())
  .then(data => {
    if (data.result === 'success') {
      alert("¡Tu cita ha sido agendada con éxito!");
      event.target.reset();
    } else {
      alert("Error al guardar: " + data.message);
    }
  })
  .catch(error => {
    alert("Error de red: " + error.message);
  });
}
