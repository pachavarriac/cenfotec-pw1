document.addEventListener("DOMContentLoaded", function () {
  const reserve = document.getElementById("reserve");
  const agreement = document.getElementById("agreement");
  const agreement_check = document.getElementById("agreement_check");
  const agreement_block = document.getElementById("agreement_block");
  const accept_agreement = document.getElementById("accept_agreement");
  const close_agreement = document.getElementById("close_agreement");
  const confirm_data = document.getElementById("confirm_data");
  const change_data = document.getElementById("change_data");
  const confirmationBlock = document.getElementById("confirmation_block");
  const clientDataDiv = document.getElementById("client_data");
  const form = document.querySelector("form");

  reserve.disabled = true;
  reserve.classList.add("opacity-50", "cursor-not-allowed");

  agreement.onclick = function () {
    agreement_block.style.display = "block";
  };

  accept_agreement.onclick = function () {
    agreement_block.style.display = "none";
    agreement_check.checked = true;
    update_reserve_button();
  };

  close_agreement.onclick = function () {
    agreement_block.style.display = "none";
  };

  const required = document.querySelectorAll('input[required], select[required], textarea[required]');

  function update_reserve_button() {
    const required_filled = Array.from(required).every(field => field.value.trim() !== "");
    if (agreement_check.checked && required_filled) {
      reserve.disabled = false;
      reserve.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      reserve.disabled = true;
      reserve.classList.add("opacity-50", "cursor-not-allowed");
    }
  }

  required.forEach(field => {
    field.addEventListener("input", update_reserve_button);
    field.addEventListener("change", update_reserve_button);
  });

  agreement_check.addEventListener("change", update_reserve_button);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const tag = document.getElementById("tag").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;
    const facility = document.getElementById("facility").value;
    const comment = document.getElementById("comment").value;

    clientDataDiv.innerHTML = `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || "No proporcionado"}</p>
      <p><strong>Teléfono:</strong> ${tel}</p>
      <p><strong>Placa:</strong> ${tag || "No proporcionado"}</p>
      <p><strong>Fecha:</strong> ${date}</p>
      <p><strong>Hora:</strong> ${time}</p>
      <p><strong>Servicio:</strong> ${service}</p>
      <p><strong>Taller:</strong> ${facility}</p>
      <p><strong>Comentario:</strong> ${comment || "Sin comentarios"}</p>
    `;

    confirmationBlock.style.display = "block";
  });

  confirm_data.addEventListener("click", function () {
    confirmationBlock.style.display = "none";
  
    emailjs.sendForm('service_ke8lkqs', 'template_ch6l7co', 'appointment_form', '2Mao6e5Wr707lDDCr')
      .then(function () {
        Swal.fire({
          title: '¡Cita enviada!',
          text: 'Tu cita ha sido enviada con éxito.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          background: '#2c2c2c',
          color: '#ffffff',
          customClass: {
            popup: 'swal2-br-15 b-1sg',
            confirmButton: 'bg-226ce0-i fc-w br-25-i p-10-20-i fs-18 p-10-20-i'
          }
        });
  
        form.reset();
        reserve.disabled = true;
        reserve.classList.add("opacity-50", "cursor-not-allowed");
      }, function (error) {
        Swal.fire({
          title: 'Error',
          text: 'Error al enviar la cita. Intenta nuevamente más tarde.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
          background: '#2c2c2c',
          color: '#ffffff',
          customClass: {
            popup: 'swal2-br-15 b-1sr',
            confirmButton: 'bg-ee2524-i fc-w br-25-i p-10-20-i fs-18 p-10-20-i'
          }
        });
        // console.error("Error:", error);
      });
  });
  
  
  change_data.addEventListener("click", function () {
    confirmationBlock.style.display = "none";
  });
});
