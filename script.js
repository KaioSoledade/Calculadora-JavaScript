
        

window.confirm("Você esta preparado?")
var n1 = Number(window.prompt("Digite um numero"))
var n2 = Number(window.prompt("Digite outro numero"))

var soma = n1 + n2
var mult = n1 * n2
var div = n1 / n2
window.alert (`A soma é ${soma}. A multiplicação é ${mult},e a Divisão é ${div}`)

var result1 = window.document.getElementsByTagName('h1')[0]

window.document.write(result1.innerText)

var fundo = window.document.body

fundo.style.background = 'black'