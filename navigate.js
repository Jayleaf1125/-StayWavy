// DOM Elements
const randomBtn = document.querySelector(`#random-btn`);
const filterBtn = document.querySelector(`#filter-btn`);
const welcomeSection = document.querySelector(`#welcome-section`);
const filterForm = document.querySelector(`#filter-form`);
const budgetBtn = document.querySelector(`#budget-btn`);
const budget = document.querySelector(`#budget`);

// Filter Form
filterBtn.addEventListener('click', switchOverToFilterForm);

function switchOverToFilterForm() {
    welcomeSection.style.display = "none";
    filterForm.style.display = "block";
}

budgetBtn.addEventListener('click', getBudgetValue);

function getBudgetValue() {
    const value = budget.value;
   console.log(+value)

    filterForm.style.display = "none";

}