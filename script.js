// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  document.getElementById("form-message").textContent = `Thank you, ${name}! Your message has been sent.`;
  this.reset();
});
