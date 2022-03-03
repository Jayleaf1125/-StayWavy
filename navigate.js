const inputForm = document.querySelector(`#input-form`);
const inputBtn = document.querySelector(`#submit-btn`);
const openingPageSection = document.querySelector(`#opening-page`);
const wordInfoSection = document.querySelector(`#word-information`);
const speechSection = document.querySelector(`#speech`);
const choosenWord = document.querySelector(`#input-word`);
const defBtn = document.querySelector(`#definition-page`);
const nounSec = document.querySelector(`#noun-section`);

inputBtn.addEventListener('click', handleInputForm)

function handleInputForm() {
    const value = inputForm.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;

   fetch(`${url}`)
   .then(response => response.json())
   .then((wordData) => {
    //    console.log(wordData)
    let noun = wordData[0].meanings[0].definitions[0].definition
     let meanings = wordData[0].meanings;
    //  console.log(meanings)
    meanings.forEach(speech => {
        const newListItem = document.createElement('li');
        const defs = speech.definitions[1];
        newListItem.innerText = defs.definition;
        nounSec.append(newListItem)
        console.log(defs.definition)
    });
   })
    openingPageSection.style.display = 'none';
    wordInfoSection.style.display = 'block'
    choosenWord.innerText = `${value.toUpperCase()}`
}

defBtn.addEventListener('click', transitionToDefPage)

function transitionToDefPage() {
    speechSection.style.display = 'block';
    wordInfoSection.style.display = 'none';
}