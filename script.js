const randomNumber = Math.round(Math.random() * 10)
let counter = 0

document.querySelector('#form').addEventListener('submit', (event) => {
  event.preventDefault()
  let inputValue = document.querySelector('#numberInput')



  if (Number(inputValue.value) == randomNumber) {
    document.querySelector('.result').textContent = `Parabéns você acertou ! o número era: ${randomNumber}`
    document.querySelector('#title').textContent = `Tentativas: ${counter}`
    document.querySelector('.screen1').classList.add('hidden')
    document.querySelector('.screen2').classList.remove('hidden')
  }
  counter += 1
  inputValue.value = ""

})

form.addEventListener('keypress', function (event) {
  if (event.key === 'press') {
    document.querySelectorAll('button').click();
  }
});

