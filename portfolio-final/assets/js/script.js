const contactForm = document.getElementById('contactForm');
const statusMessage = document.getElementById('status');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  statusMessage.innerText = "Sending...";
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  setTimeout(() => {
    statusMessage.innerText = "Message sent successfully!";
    statusMessage.style.color = "#c18d97";
    contactForm.reset();
  }, 1000);
});