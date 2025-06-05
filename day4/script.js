function checkAge() {
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let result = document.getElementById("result");

  if (!name || isNaN(age)) {
    result.textContent = "Please enter valid name and age.";
    return;
  }

  let message;

  if (age < 13) {
    message = `Hi ${name}, you're a child.`;
  } else if (age < 20) {
    message = `Hey ${name}, you're a teenager.`;
  } else {
    message = `Hello ${name}, you're an adult.`;
  }

  result.textContent = message;
}