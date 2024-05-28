elem = document.querySelectorAll('span[unselectable]')

fullString = ''

elems.forEach(elem => {console.log(elem.innerHTML); fullString += elem.innerHTML})

console.log(fullString)
