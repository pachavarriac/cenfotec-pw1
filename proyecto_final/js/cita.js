document.addEventListener("DOMContentLoaded", function () {
  const reserve = document.getElementById("reserve");
  const agreement = document.getElementById("agreement");
  const agreement_check = document.getElementById("agreement_check");
  const agreement_block = document.getElementById("agreement_block");
  const accept_agreement = document.getElementById("accept_agreement");
  const close_agreement = document.getElementById("close_agreement");

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
});
