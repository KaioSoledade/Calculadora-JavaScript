
        

function clean(){
         
    document.getElementById('rest').innerHTML = "" ;
}

function insert(num){

   var numero = document.querySelector('#rest').innerHTML
   document.querySelector('#rest').innerHTML = numero + num

}

function back(){
    var resultado = document.querySelector('#rest').innerHTML
    document.querySelector('#rest').innerHTML = resultado.substring(0, resultado.length -1)
}

function somar(){
    var resultado = document.querySelector('#rest').innerHTML
    if(resultado){
        document.querySelector('#rest').innerHTML = eval(resultado)
    }
    else{
        document.querySelector('#rest').innerHTML = "Nada..."
    }
}

// CALCULADORA 1  ^^^^^^^^

function somar1(){
    var button1 = document.querySelector('input.valor1-1')
    var button2 = document.querySelector('input.valor2-1')            
    var valor = window.document.querySelector('p.resultado2-1')

    var n1 = Number(button1.value)
    var n2 = Number(button2.value)

    var calcular = n1 + n2

    valor.innerHTML = calcular
}

function somar2(){
    var button1 = document.querySelector('input.valor1-2')
    var button2 = document.querySelector('input.valor2-2')            
    var valor = window.document.querySelector('p.resultado2-2')

    var n1 = Number(button1.value)
    var n2 = Number(button2.value)

    var calcular = n1 - n2

    valor.innerHTML = calcular
}

function somar3(){
    var button1 = document.querySelector("input.valor1-3")
    var button2 = document.querySelector('input.valor2-3')
    var valor = window.document.querySelector('p.resultado2-3')

    var n1 = Number(button1.value)
    var n2 = Number(button2.value)

    var calcular = n1 * n2

    valor.innerHTML = calcular
}

function somar4(){
    var button1 = document.querySelector("input.valor1-4")
    var button2 = document.querySelector('input.valor2-4')
    var valor = window.document.querySelector('p.resultado2-4')

    var n1 = Number(button1.value)
    var n2 = Number(button2.value)

    var calcular = n1 / n2

    valor.innerHTML = calcular
}
// CALCULADORA 2  ^^^^^^^^

function começar(){
    window.alert('Coloque 2 numeros e te darei o resultado')

    var N1 = Number(window.prompt('Coloque o primeiro numero'))
    var N2 = Number(window.prompt('Coloque o segundo numero'))

    var soma = N1 + N2
    var subt = N1 - N2
    var mul = N1 * N2
    var divs = N1 / N2

    window.alert(`
    O resultado de soma: ${soma} 
    O resultado de divisao: ${subt}
    O resultado de multiplicação: ${mul}
    O resultado de divisão: ${divs} `)
}

// CALCULADORA 3  ^^^^^^^^
