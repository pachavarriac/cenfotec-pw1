document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loginSuccess') === 'true') {
        Swal.fire({
            html: '<div style="display: flex; align-items: center; padding: 20px;">' +
            '<lottie-player src="animations/success.json" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>' +
            '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-left: 20px;">' +
            '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 48px; color: green;">Bienvenido</p>' +
            '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 32px;">Se ha logueado con éxito</p></div></div>',
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                popup: 'custom-swal-popup-success'
            }
        });

        localStorage.removeItem('loginSuccess');
    }
});