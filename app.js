let nom = document.getElementById(`div`)
let input = document.getElementById(`spanish`)

let btn = document.getElementById(`btn`)
let text = ``

btn.addEventListener(`click` , ()=>{
    console.log(input.value);
    text =  `<p>${input.value}</p>`
    localStorage.setItem(`text`,text)
    nom.innerHTML = localStorage.getItem(`text`)
    
})
localStorage.setItem(`amir`)
