document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("2Mao6e5Wr707lDDCr");

  const form = document.getElementById("contact_form");
  const submitButton = document.getElementById("contact_submit");

  const fields = {
    contact_firstname: {
      el: document.getElementById("contact_firstname"),
      validate: (val) => val.trim() !== "",
      touched: false,
    },
    contact_lastname: {
      el: document.getElementById("contact_lastname"),
      validate: (val) => val.trim() !== "",
      touched: false,
    },
    contact_email: {
      el: document.getElementById("contact_email"),
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      touched: false,
    },
    contact_tel: {
      el: document.getElementById("contact_tel"),
      validate: (val) => /^[\d\s()+-]*$/.test(val.trim()) && val.trim() !== "",
      touched: false,
    },
    contact_message: {
      el: document.getElementById("contact_message"),
      validate: (val) => val.trim() !== "",
      touched: false,
    },
  };

  const markError = (input, label, placeholder) => {
    input.style.border = "3px solid red";
    if (label) label.style.color = "red";
    input.placeholder = "⚠️ " + placeholder;
    input.classList.add("placeholder-red");
  };

  const clearError = (input, label, placeholder) => {
    input.style.border = "3px solid white";
    if (label) label.style.color = "";
    input.placeholder = placeholder;
    input.classList.remove("placeholder-red");
  };

  const validateField = (fieldId) => {
    const field = fields[fieldId];
    const input = field.el;
    const label = document.querySelector(`label[for="${input.id}"]`);
    const originalPlaceholder = input.getAttribute("data-original-placeholder");

    const isValid = field.validate(input.value);
    if (!field.touched) return true;

    if (!isValid) {
      markError(input, label, originalPlaceholder);
    } else {
      clearError(input, label, originalPlaceholder);
    }

    return isValid;
  };

  const validateForm = () => {
    let allValid = true;
    for (const fieldId in fields) {
      const isValid = validateField(fieldId);
      if (!isValid) allValid = false;
    }
    submitButton.disabled = !allValid;
    return allValid;
  };

  for (const fieldId in fields) {
    const field = fields[fieldId];
    const input = field.el;
    const label = document.querySelector(`label[for="${input.id}"]`);
    const originalPlaceholder = input.placeholder;
    input.setAttribute("data-original-placeholder", originalPlaceholder);

    input.addEventListener("input", () => {
      if (!field.touched) return;
      validateField(fieldId);
      validateForm();
    });

    input.addEventListener("blur", () => {
      field.touched = true;
      validateField(fieldId);
      validateForm();
    });

    input.addEventListener("focus", () => {
      input.style.border = "";
      if (label) label.style.color = "";
      input.placeholder = originalPlaceholder;
      input.classList.remove("placeholder-red");
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validación final
    for (const fieldId in fields) {
      fields[fieldId].touched = true;
      validateField(fieldId);
    }

    if (!validateForm()) {
      return;
    }

    submitButton.disabled = true;

    emailjs
      .sendForm(
        "service_ke8lkqs",
        "template_rd4k72b",
        form,
        "2Mao6e5Wr707lDDCr"
      )
      .then(() => {
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Su mensaje ha sido enviado con éxito.",
          icon: "success",
          confirmButtonText: "Aceptar",
          background: "#2c2c2c",
          color: "#ffffff",
          customClass: {
            popup: "swal2-br-15 b-1sg",
            confirmButton: "bg-226ce0-i fc-w br-25-i p-10-20-i fs-18 p-10-20-i",
          },
        });
        form.reset();
        for (const fieldId in fields) {
          fields[fieldId].touched = false;
        }
        validateForm();
      })
      .catch((error) => {
        Swal.fire({
					title: "Error",
          text: "Ocurrió un error al enviar el mensaje. Intenta más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
          background: "#2c2c2c",
          color: "#ffffff",
          customClass: {
            popup: "swal2-br-15 b-1sr",
            confirmButton: "bg-226ce0-i fc-w br-25-i p-10-20-i fs-18 p-10-20-i",
          },
        });
        console.error("EmailJS error:", error);
        submitButton.disabled = false;
      });
  });

  validateForm();
});
