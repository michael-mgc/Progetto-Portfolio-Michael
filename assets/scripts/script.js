
// Download PDF

const printBtn = document.querySelector("#print-cv");


console.log(printBtn);

printBtn.addEventListener("click", () => {
    window.print();
})


// Form handling 

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

