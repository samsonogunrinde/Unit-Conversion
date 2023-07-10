/* 
1 (meter=0.3048 || feet= 3.28084)
1 l(iter=3.78541 || gallons= 0.219969)
1 (kilo=0.453592  || pounds= 2.20462)
*/
let inputMtx = document.getElementById("input-mtx")
const lengthMf = document.getElementById("length-mf")
const volumeLg = document.getElementById("volume-lg")
const massKp = document.getElementById("mass-kp")
let convertBtn = document.getElementById("convert-btn")
let clearBtn = document.getElementById("clear-btn")

/* 
20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/
convertBtn.addEventListener("click", function() {
  let meters = (inputMtx.value * 0.3048)
  let feet = (inputMtx.value * 3.28084)
  let liter = (inputMtx.value * 3.78541)
  let gallons = (inputMtx.value * 0.219969)
  let kilo = (inputMtx.value * 0.453592)
  let pounds = (inputMtx.value * 2.20462)

  lengthMf.textContent = `${inputMtx.value} meters =${(feet).toFixed(3)} feet | ${inputMtx.value} feet =${(meters).toFixed(3)} meters`

  volumeLg.textContent = `${inputMtx.value} liters =${(gallons).toFixed(3)} gallons | ${inputMtx.value} gallons =${(liter).toFixed(3)} liter`

  massKp.textContent = `${inputMtx.value} kilo =${(pounds).toFixed(3)} pounds | ${inputMtx.value} pounds =${(kilo).toFixed(3)} kilo`
})

clearBtn.addEventListener("click", function() {
  inputMtx.value = ""
  inputMtx.textContent = inputMtx.value
  lengthMf.textContent = inputMtx.value
  volumeLg.textContent = inputMtx.value
  massKp.textContent = inputMtx.value
})
