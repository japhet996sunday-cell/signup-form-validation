let nameInput = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let submitBtn = document.querySelector("#submitBtn");
let message = document.querySelector("#message");

submitBtn.addEventListener("click", function () {
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();

  if (name === "" || email === "") {
    message.textContent = "❌ All fields are required";
    message.style.color = "red";
  } 
  else if (!email.includes("@")) {
    message.textContent = "❌ Enter a valid email";
    message.style.color = "red";
  } 
  else {
    message.textContent = "✔ Form submitted successfully";
    message.style.color = "green";
  }
});
