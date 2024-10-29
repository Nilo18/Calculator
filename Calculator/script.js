const container = document.getElementById('jsContainer')
let operatorUsed = false;




function calculator (input, isEquals) {
    const displayP = document.getElementById('displayP');

    displayP.textContent = '0'



    input.addEventListener('click', function displayText() {
      const inputValue = input.textContent

      if (displayP.textContent === '0') {
        displayP.textContent = ''
      }


        if (['+', '-', '*', '/'].includes(inputValue)) {
         if (operatorUsed) {
          return;
        } else {
          operatorUsed = true;
        }
      }

      if (!['+', '-', '*', '/'].includes(inputValue) && !isEquals && inputValue !== 'Clear') {
        operatorUsed = false;
    }

    if (isEquals) {
        try {
            const result = eval(displayP.textContent)
            displayP.textContent = result
            operatorUsed = false
        } catch (error) {
            displayP.textContent = 'Invalid expression'
            operatorUsed = false
        } 
      } else if (inputValue === 'Clear') {
        displayP.textContent = '0';
        operatorUsed = false;
      } else if (inputValue === 'Rem') {
        displayP.textContent = displayP.textContent.slice(0, -1)
        operatorUsed = false
      }
     else {
          displayP.textContent += inputValue
    }

})
}

function createBtn (i, isEquals) {
  const buttons = document.createElement('button')
  buttons.textContent = i
  container.appendChild(buttons)
  calculator(buttons, isEquals)
}

function createBtns () {
  for (let i = 0; i < 10; i++) {
    createBtn(i, false)
  }
  createBtn('+', false)
  createBtn('-', false)
  createBtn('*', false)
  createBtn('/', false)  
  createBtn('=', true)
  createBtn('Clear', false)
  createBtn('Rem', false)
}


createBtns()
