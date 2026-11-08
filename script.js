document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector(".booking-form");
const message = document.querySelector(".booking-message");
const dateInput = document.querySelector('input[type="date"]');

  const today = new Date();

  const localDate = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");

  dateInput.min = localDate;

form.addEventListener("submit", function(event) {
  event.preventDefault();

  message.textContent = "Your table has been booked!";

  setTimeout(function() {
    message.textContent = "";
  }, 3000);

  form.reset();
});

});
