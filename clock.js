setInterval(setClock, 1000)

const dataHour = document.querySelector('[data-hour]')
const dataMinute = document.querySelector('[data-minute]')
const dataSecond = document.querySelector('[data-second]')

function setClock() {
    const currentTime = new Date()
    const currentSecond = currentTime.getSeconds() / 60
    const currentMinute = (currentSecond + currentTime.getMinutes()) / 60
    const currentHour = (currentMinute + currentTime.getHours()) / 12
        // console.log(currentHour);
        // console.log(currentMinute);
        // console.log(currentSecond);
    setRotation(dataSecond, currentSecond)
    setRotation(dataMinute, currentMinute)
    setRotation(dataHour, currentHour)
}

function setRotation(element, rotationRate) {
    element.style.setProperty('--rotation', rotationRate * 360)
}
setClock()