const keys = document.querySelectorAll('.keys')
const input = document.querySelector('.input-number')

//code for calculations
keys.forEach(keys => {
  let keyvalue = keys.innerHTML
  keys.addEventListener('click', () => {
    if (keyvalue === 'AC') { input.value = '' }
    else if (keyvalue === 'DE') { input.value = input.value.slice(0, -1) }
    else if (keyvalue === '=') {
      try {
        input.value = eval(input.value)
      }
      catch (e) {
        input.value = 'Syntax ERR0R'
      }
    }
    else { input.value += keyvalue }
  })
});

const allowedkeys = '1234567890-+*/'.split('')

//present other inputs
input.addEventListener('keydown', (event) => {
  if (!allowedkeys.includes(event.key)) { event.preventDefault(); }
console.log(!allowedkeys.includes(event.key))
  if (event.key === 'Enter') {
    try {
      input.value = eval(input.value)
    }
    catch (e) {
      input.value = 'Syntax ERROR'
    }
  }
});
