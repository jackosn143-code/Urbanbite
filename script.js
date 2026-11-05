document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector(".booking-form");
const message = document.querySelector(".booking-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  message.textContent = "Your table has been booked!";

  setTimeout(function() {
    message.textContent = "";
  }, 3000);

  form.reset();
});

});
