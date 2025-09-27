document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || phone === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
  } else if (!/^\d{10,15}$/.test(phone)) {
    formMessage.textContent = "Please enter a valid phone number (10-15 digits).";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
