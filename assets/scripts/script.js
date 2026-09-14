
// Form handling 

emailjs.init({
    publicKey: "BzQSq9kxDABXrx7Hp"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_md4wp1b",
        "template_io6iz8o",
        contactForm

    )
    .then(() => {
        alert("Messaggio inviato con successo!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("Errore:", error);
        alert("Si è verificato un errore. Riprova.");
    });
});

