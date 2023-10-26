//Mostrar Toasts
$(document).ready(function() {
    if ($('.alert-success').length) {
        var successToast = document.getElementById('successToast');
        var toast = new bootstrap.Toast(successToast);
        toast.show();
    }
    setTimeout(function() {
        var successToast = document.getElementById('successToast');
  
        if (successToast) {
            var toast = new bootstrap.Toast(successToast);
            successToast.classList.add("d-none");
          }
    }, 1000);
  });
  
  $(document).ready(function() {
    if ($('.alert-success').length) {
        var errorToast = document.getElementById('errorToast');
        var toast = new bootstrap.Toast(errorToast);
        toast.show();
    }
    setTimeout(function() {
        var errorToast = document.getElementById('errorToast');
  
        if (errorToast) {
            var toast = new bootstrap.Toast(errorToast);
            errorToast.classList.add("d-none");
          }
    }, 1000);
  });