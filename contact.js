const contactForm = document.getElementById("contact-form");
const messageInput = document.getElementById("message");
const nameInput = document.querySelector("input#name");

messageInput.addEventListener("input", () => {
  const currentLength = messageInput.value.length;
});

nameInput.addEventListener("input", (event) => {
  console.log("Name:", event.target.value);
});

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        alert("Message sent successfully!");
        contactForm.reset();
      } else {
        throw new Error("Error sending message");
      }
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again.");
    });
});
