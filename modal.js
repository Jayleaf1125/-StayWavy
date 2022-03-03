// Get the phonetics modal
const modal = document.querySelector("#phoneticsModal");
// Get the button that opens the modal
const btn = document.querySelector("#phoneticsBtn");
// Get the <span> element that closes the modal
const span = document.querySelector("#close");
// When the user clicks the button, open the modal 
btn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = "none";
}

// Get Part of Speech Modal