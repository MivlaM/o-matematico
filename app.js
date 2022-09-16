const form = document.querySelector('form');
const tempParagraph =  document.createElement('p')
const secondParagraph = document.createElement('p')

const tabuadaAdiSub = (valore) => {
  for (let i = 0; i < 11; i++){
    tempParagraph.innerHTML += `${valore} + ${i} = ${valore + i} ||| ${valore} - ${i} = ${Math.abs(valore - i)}  <br>`
  }
}

const tabuadaMultiDiv = (A) => {
    secondParagraph.innerHTML += `${A} * 0 = 0 ||| ${A} / 0 = ∞ <br>`
    for (let i = 1; i < 11; i++){
    secondParagraph.innerHTML += `${A} * ${i} = ${A * i} ||| ${A} / ${i} = ${A/i} <br>` 
    }
}

const domManipulation = () => {
    tempParagraph.style.color = 'white'
    tempParagraph.style.fontSize = '28'

    secondParagraph.style.color = 'white'
    secondParagraph.style.fontSize = '28'
}

const checkCondition = (valore) => {
    if (valore != 0){
        tempParagraph.innerHTML = ''
        secondParagraph.innerHTML = ''
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()

    let valore = form.number.value

    checkCondition(valore)

    tabuadaAdiSub(Number(valore))
    tabuadaMultiDiv(Number(valore))

    domManipulation()

    event.target.insertAdjacentElement('afterend', secondParagraph)
    event.target.insertAdjacentElement('afterend', tempParagraph)
})
