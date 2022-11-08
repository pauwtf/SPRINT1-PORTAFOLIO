// Validar formulario

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("datos").addEventListener('submit', validarFormulario); 
});
function validarFormulario(evento) {
    evento.preventDefault();


    let nombre = document.getElementById('nombre').value;
    if(nombre.length > 50) {
        Swal.fire({
            title: 'Error en el nombre',
            text: 'máximo de 50 caracteres',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    } else if (nombre == ""){
        Swal.fire({
            title: 'Error en el nombre',
            text: 'debes escribir un nombre',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
          return;
    }

    let email = document.getElementById("email").value;
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1){
        Swal.fire({
            title: 'Error en el email',
            text: 'El E-mail es invalido, sugerencia: xxxxx@xxxxx.xxx',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
          return;
    } else if (email=""){
        Swal.fire({
            title: 'Error en el email',
            text: 'debes escribir un correo',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
          return;
    }
    let telefono = document.getElementById("telefono").value;
    if (telefono ==""){
        Swal.fire({
            title: 'Error en el asunto',
            text: 'Debes escribir un telefono',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    }

    let asunto = document.getElementById("asunto").value;
    if(asunto.length > 50) {
        Swal.fire({
            title: 'Error en el asunto',
            text: 'Puede contener un máximo de 50 caracteres',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    }else if(asunto==""){
        Swal.fire({
            title: 'Error en el asunto',
            text: 'Debes escribir un asunto',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    }
    let mensaje = document.getElementById("mensaje").value;
    if(mensaje.length > 500) {
        Swal.fire({
            title: 'Error en el mensaje',
            text: 'Puede contener un máximo de 500 caracteres',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    }else if(mensaje==""){
        Swal.fire({
            title: 'Error en el mensaje',
            text: 'Debes escribir un mensaje',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    } 
    this.submit();
} 

var btnEnviar = document.getElementById('enviar');
btnEnviar.onclick = enviar;

function enviar (validarFormulario){
    console.log('aaah')
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado, me contactaré contigo pronto!',
        showConfirmButton: false,
        timer: 1500
      })
}