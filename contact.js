const messageInput = document.getElementById("message");
const charCount = document.getElementById("current");

messageInput.addEventListener("input", function() {
  const currentLength = this.value.length;
  charCount.textContent = currentLength;
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    // Replace 'your-form-id' in the form action with your actual Formspree endpoint
    fetch(this.action, {
      method: "POST",
      body: new FormData(this),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          this.reset();
          charCount.textContent = "0";
        } else {
          throw new Error("Error sending message");
        }
      })
      .catch((error) => {
        alert("Error sending message. Please try again.");
      });
  });


const input = document.querySelector('input#name');
input.addEventListener('input', (event) => {
  console.log(event.target.value);

})
