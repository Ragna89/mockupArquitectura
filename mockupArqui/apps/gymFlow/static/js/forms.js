$(document).ready(function() {
  var formReg = document.getElementById('registerform');
  if (formReg) {
    $("#registerform").validate({
      rules: {
        username: {
          required: true,
          minlength: 4
        },
        password: {
          required: true,
          minlength: 8,
          validarContrasena: true 
        },
        email: {
          required: true,
          email: true,
          validarCorreo: true
        },
        name: {
          required: true,
          minlength: 3
        }
      },
      messages: {
        username: {
          required: "Debe ingresar un Nombre de Usuario",
          minlength: "Mínimo 4 caracteres"
        },
        password: {
          required: "Debe ingresar una Contraseña",
          minlength: "Mínimo 8 caracteres",
          validarContrasena: "La Contraseña debe contener al menos una letra Mayúscula, una letra Minúscula y un Número."
        },
        email: {
          required: "Debe ingresar un Email",
          email: "Por favor ingrese un Email válido",
          validarCorreo: "Ingrese un Dominio válido."
        },
        name: {
          required: "Debe ingresar un nombre",
          minlength: "Minimo 3 caracteres."
        }
      }
    });
  }
});


$(document).ready(function() {
var formLog = document.getElementById('loginform');
if (formLog) {
  $("#loginform").validate({
    rules: {
      username: {
        required: true
      },
      password: {
        required: true
      },
    },
    messages: {
      username: {
        required: "Debe ingresar un Nombre de Usuario"
      },
      password: {
        required: "Debe ingresar una Contraseña"
      }
    }
  });
}
});


$.validator.addMethod("validarContrasena", function(value, element) {
return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d.*-_]{8,}$/.test(value);
}, "La Contraseña debe contener al menos una letra Mayúscula, una letra Minúscula y un Número.");

$.validator.addMethod("validarCorreo", function(value, element) {
return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}, "Ingrese un Dominio válido.");