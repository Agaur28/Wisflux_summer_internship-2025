document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value);

  if (name === "" || email === "" || isNaN(age)) {
    showMessage("Please fill in all fields correctly.", "red");
    return;
  }

  if (age < 18) {
    showMessage("You must be at least 18 years old to register.", "red");
    return;
  }

  showMessage(`Welcome, ${name}! Registration successful.`, "green");
});

function showMessage(text, color) {
  const message = document.getElementById("message");
  message.textContent = text;
  message.style.color = color;
}
