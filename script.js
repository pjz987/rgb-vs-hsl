const body = document.querySelector('body')

function makeRow (colors, description) {
  const row = document.createElement('figure')
  const h3 = document.createElement('h3')
  h3.innerText = description
  body.appendChild(h3)
  colors.forEach(color => {
    const swatch = document.createElement('div')
    swatch.classList = 'swatch'
    swatch.style.backgroundColor = color
    row.appendChild(swatch)
  })
  body.appendChild(row)
}

const zeroTo255 = () => Math.floor(Math.random() * 255)
const twenty5to75 = () => 25 + Math.floor(Math.random() * 51)

// random RGB
function randomRGBColors (numberOfColors) {
  const randomRGBArray = []
  for (let i = 0; i < numberOfColors; i++) {
    randomRGBArray.push(`rgb(${zeroTo255()},${zeroTo255()},${zeroTo255()})`)
  }
  return randomRGBArray
}

for (let i = 0; i < 3; i++) {
  makeRow(randomRGBColors(8), 'Random RGB')
}

// random H set SL
function randomHueColors (numberOfColors, saturationPct, lightnessPct) {
  const randomHueArray = []
  for (let i = 0; i < numberOfColors; i++) {
    randomHueArray.push(`hsl(${zeroTo255()},${saturationPct}%,${lightnessPct}%)`)
  }
  return randomHueArray
}
body.appendChild(document.createElement('hr'))
for (let i = 0; i < 3; i++) {
  const saturationPct = twenty5to75()
  const lightnessPct = twenty5to75()
  makeRow(randomHueColors(8, saturationPct, lightnessPct), 'Random Hue, Set Saturation and Lightness')
}
