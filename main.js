//--- --- --- --- --- EJERCICIO 1 --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---//
const option = document.querySelector(".option")
const calculator = document.querySelector("#calculator")
const answer = document.querySelector("#answer")
const reset = document.querySelector("#reset")

function random(min, max) {
    let num
    if (localStorage.getItem('randomNumber')) {
        num = JSON.parse(localStorage.getItem('randomNumber'))
        return num
    } else {
        num = Math.floor((Math.random() * (max - min + 1)) + min);
        localStorage.setItem('randomNumber', JSON.stringify(num))
        return num
    }
}

calculator.onclick = () => {

    random(1, 50)

    let randomNumber = JSON.parse(localStorage.getItem('randomNumber'))
    let numOption

    option.value ? numOption = option.value : alert('Introduce tu respuesta')

    if (option.value < 1 || option.value > 50) {
        alert('Tu respuesta debe estar entre 1 y 50')
        return
    } else {
        if (option.value > randomNumber) {
            answer.textContent = `${numOption} es mayor`
            return
        } if (option.value < randomNumber) {
            answer.textContent = `${numOption} es menor`
        } else {
            answer.textContent = `Enhorabuena!!!  Estaba pensando en el número ${numOption}. Juguemos de nuevo!`
            localStorage.clear()
        }
    }
}

//--- --- --- --- --- EJERCICIO 2 --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---//



//--- --- --- --- --- EJERCICIO 3 --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---//
