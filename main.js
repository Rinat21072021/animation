let bike = document.getElementById('bike')
let box = document.getElementById('box')
let step = 0
let flag = true
let boxFlag = true
let boxStep = 50


function rides() {
    if (window.innerWidth - 200 > step && flag) {
        bike.style.transform = "scaleX(-1)"
        step += 1
    } else {
        bike.style.transform = "scaleX(1)"
        step -= 1
        flag = step === 0 ? true : false
    }
    bike.style.left = step + 'px'
    if (Math.round(window.innerWidth / 2) === step + 200) {
        box.style.visibility='visible'

        let timer = setInterval(boxRides, 50)
        if(boxStep===100){
            clearInterval(timer)
        }
    }


}
function boxRides() {
    boxStep += 5
    box.style.top = boxStep + 'px'
}

setInterval(rides, 10)
