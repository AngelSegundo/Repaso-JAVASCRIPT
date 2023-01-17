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

addEventListener('keypress', (e) => { enter(e) })

function enter(e) {
    let tecla = (document) ? e.keyCode : e.which;
    if (tecla == 13) {
        random(1, 10)

        let randomNumber = JSON.parse(localStorage.getItem('randomNumber'))
        let numOption

        option.value ? numOption = option.value : alert('Introduce tu respuesta')

        if (option.value < 1 || option.value > 10) {
            alert('Tu respuesta debe estar entre 1 y 10')
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
}

calculator.onclick = () => {

    random(1, 10)

    let randomNumber = JSON.parse(localStorage.getItem('randomNumber'))
    let numOption

    option.value ? numOption = option.value : alert('Introduce tu respuesta')

    if (option.value < 1 || option.value > 10) {
        alert('Tu respuesta debe estar entre 1 y 10')
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

let exercise2 = document.querySelector(".exercise2")
let start = document.querySelector('#start')

start.onclick = () => {
    let option1 = document.getElementById('option1')
    let option2 = document.getElementById('option2')
    let option3 = document.getElementById('option3')
    let higher = document.getElementById('higher')

    num1 = prompt("Primer número") * 1
    num2 = prompt("Segundo número") * 1
    num3 = prompt("Tercer número") * 1

    option1.textContent = num1
    option2.textContent = num2
    option3.textContent = num3

    numArary = []
    higherNum = 0

    numArary.push(num1, num2, num3)

    numArary.forEach(num => {
        if (higherNum < num) {
            higherNum = num
        }
    });

    higher.textContent = `El número mayor es ${higherNum}`

}


//--- --- --- --- --- EJERCICIO 3 --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---//
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('apis.json')
        const studentsList = await res.json()
        showStudents(studentsList)
    } catch (error) {
        console.log(error);
    }
}

const showStudents = studentsList => {
    studentsList.sort((a, b) => b.age - a.age)
    studentsList.forEach(student => {
        let studentInfo = document.createElement('div')
        studentInfo.setAttribute('class', 'card')
        document.querySelector('.container').appendChild(studentInfo)
        studentInfo.innerHTML = `
        <h4>Hover Me</h4>
                        <span>${student.name}</span>

                        <span>${student.age}</span>
            `
    });
}