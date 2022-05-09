// let number = document.getElementById("number-el")
//   number.value = 20
let number = document.getElementById("number-el")
number.value = 20

// getElementsByClassName method gets elements as array
// in this case get a class from spanNumberEl[0] to spanNumberEl[5]
let spanNumberEl = document.getElementsByClassName("spnumber-el")


// in this case get a class from spanConvertEl[0] to spanConvertEl[5]
let spanConvertEl = document.getElementsByClassName("spconvert-el")

//variables to render in html elements
let meterFeet, feetMeter, literGallon, gallonLiter, kiloPound, poundKilo

number.addEventListener("change", renderElements )
 // itemBtn[i].addEventListener("click", addItem, false)


function renderElements() {
  for (let i = 0; i < spanNumberEl.length; i++) {
spanNumberEl[i].textContent = number.value   
}
meterFeet = (number.value * 3.2808).toFixed(3)
feetMeter = (number.value / 3.2808).toFixed(3)
literGallon = (number.value * 0.26417).toFixed(3)
gallonLiter = (number.value / 0.26217).toFixed(3)
kiloPound = (number.value * 2.2046).toFixed(3)
poundKilo = (number.value / 2.2046).toFixed(3)

spanConvertEl[0].textContent = meterFeet
spanConvertEl[1].textContent = feetMeter
spanConvertEl[2].textContent = literGallon
spanConvertEl[3].textContent = gallonLiter
spanConvertEl[4].textContent = kiloPound
spanConvertEl[5].textContent = poundKilo
}

renderElements()




