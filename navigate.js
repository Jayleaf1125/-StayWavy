// DOM Elements
const randomBtn = document.querySelector(`#random-btn`);
const selectBtn = document.querySelector(`#select-btn`);
const welcomeSection = document.querySelector(`#welcome-section`);
const filterForm = document.querySelector(`#filter-form`);
const locationBtn = document.querySelector(`#location-btn`);
const search = document.querySelector(`#search`);
const locationForm = document.querySelector(`#location-form`)

// Filter Form
selectBtn.addEventListener('click', switchOverToFilterForm);

function switchOverToFilterForm() {
    welcomeSection.style.display = "none";
    locationForm.style.display = "grid";
}

locationBtn.addEventListener('click', getBudgetValue);

// function getBudgetValue() {
//     const value = budget.value;
//    console.log(+value)

//     filterForm.style.display = "none";

// }

function getBudgetValue() {
    const value = search.value;
   console.log(value)

    locationForm.style.display = "none";

}