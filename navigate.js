const inputForm = document.querySelector(`#input-form`);
const inputBtn = document.querySelector(`#submit-btn`);
const openingPageSection = document.querySelector(`#opening-page`);
const wordInfoSection = document.querySelector(`#word-information`);
const speechSection = document.querySelector(`#speech`);
const choosenWord = document.querySelector(`#input-word`)
const defBtn = document.querySelector(`#definition-page`);

inputBtn.addEventListener('click', handleInputForm)

function handleInputForm() {
    const value = inputForm.value;
    // console.log(value)
    openingPageSection.style.display = 'none';
    wordInfoSection.style.display = 'block'
    choosenWord.innerText = `${value.toUpperCase()}`
}

defBtn.addEventListener('click', transitionToDefPage)

function transitionToDefPage() {
    speechSection.style.display = 'block';
    wordInfoSection.style.display = 'none';
}