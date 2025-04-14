let valueOfTimeCalculator = document.querySelector('.time-calculator__input')
let resultOfTimeCalculator = document.querySelector('.time-calculator__result')
valueOfTimeCalculator.addEventListener('input' , function() {
    let totalMinutes = Number(valueOfTimeCalculator.value.trim());
    let inputArray = valueOfTimeCalculator.value.trim().split('')
    if (isNaN(totalMinutes) || totalMinutes < 0 || (inputArray[0] === '0' && inputArray[1] != '.')){
        resultOfTimeCalculator.textContent = 'Введіть коректне значення'
        return
    }
    if (/^0{2,}/.test(valueOfTimeCalculator.value)) {
        resultOfTimeCalculator.textContent = 'Не може містити два і більше нуля спочатку'
        return
    }
    let hoursOfConvert = Math.floor((totalMinutes / 60))
    let daysOfConvert = Math.floor((hoursOfConvert / 24))
    let secondsOfConvert = Math.floor((totalMinutes * 60))
    if (totalMinutes < 1440){
        resultOfTimeCalculator.textContent = `${hoursOfConvert} год. ${totalMinutes- hoursOfConvert*60} хв`
         if (totalMinutes < 1){
            resultOfTimeCalculator.textContent = `0 год. 0 хв. ${secondsOfConvert} сек`
        }
    }
    else if (totalMinutes >= 1440){
        resultOfTimeCalculator.textContent = `${daysOfConvert} дн. ${hoursOfConvert - daysOfConvert*24} год. ${totalMinutes- hoursOfConvert*60} хв`
    }
})