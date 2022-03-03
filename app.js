window.addEventListener("DOMContentLoaded", (e) => {
   const wordChoice = document.getElementById("wordChoice")
   const wordChoice2 = document.getElementById("wordChoice2")
   const wordChoice3 = document.getElementById("wordChoice3")
   let injpartOfSpeech = document.getElementById("interjectivePartOfSpeech")
  let nounSpeech = document.getElementById("nounPartOfSpeech")
  let verbSpeech = document.getElementById("verbPartOfSpeech")

    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    fetch(`${url}`)
    .then(response => response.json())
    .then((wordData) => {
      console.log(wordData)
      let word = wordData[0].word
      
      
      let noun = wordData[0].meanings[0].definitions[0].definition
      wordChoice.innerText = `${noun}`
      
      let nounPartofSpeech = wordData[0].meanings[0].partOfSpeech 
        nounSpeech.innerText = `${nounPartofSpeech}`
      
      let verb = wordData[0].meanings[1].definitions[0].definition
        wordChoice2.innerText = `${verb}`
     
     
      let verbsPartOfSpeech = wordData[0].meanings[1].partOfSpeech
        verbSpeech.innerText = `${verbsPartOfSpeech}`
     
      let interjective = wordData[0].meanings[2].definitions[3].definition
      wordChoice3.innerText = `${interjective}`
      
      
      let interjectivePartofSpeech = wordData[0].meanings[2].partOfSpeech
      injpartOfSpeech.innerText =`${interjectivePartofSpeech}`
      
      
      let phoneticsAudio = wordData[0].phonetics[0].audio
      
      
      let phonetics2Audio = wordData[0].phonetics[1].audio
      
      
      let phonetics2Text = wordData[0].phonetics[1].text
      
      
      let phonetics3Audio = wordData[0].phonetics[2].audio
      
      
      let phonetics3Text = wordData[0].phonetics[2].text
      
      
      let sourceUrl = wordData[0].sourceUrls[0]
    //   console.log(nounPartofSpeech)

    });


})