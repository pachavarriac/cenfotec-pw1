document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("loginSuccess") === "true") {
    Swal.fire({
      html:
        '<div style="display: flex; align-items: center; padding: 0px; margin: 0;">' +
        '<lottie-player src="animations/success.json" background="transparent" speed="1" style="width: 100px; height: 100px;" loop autoplay></lottie-player>' +
        '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-left: 20px;">' +
        '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 32px; color: green; padding: 0px; margin: 5px;">Bienvenido</p>' +
        '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 24px; padding: 0px; margin: 5px;">Se ha logueado con éxito</p></div></div>',
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: "custom-swal-popup-success",
      },
    });

    localStorage.removeItem("loginSuccess");
  }
});
