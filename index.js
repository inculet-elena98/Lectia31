

const time = document.querySelector('#time')
const showCurrentTime = () => {
  setInterval(() => {
    const targetDate = new Date(2023, 11, 31)
    const now = Date.now()
    const timeToNewYear = new Date(targetDate.getTime() - now)

    const hour = timeToNewYear.getHours()
    const minute = timeToNewYear.getMinutes()
    const second = timeToNewYear.getSeconds()

    const month = timeToNewYear.getMonth()
    const day = timeToNewYear.getDate()

    const formatedMonth = month < 10 ? '0' + month : month
    const formatedDay = day < 10 ? '0' + day : day
    const formatedHour = hour < 10 ? '0' + hour : hour
    const formatedMinute = minute < 10 ? '0' + minute : minute
    const formatedSecond = second < 10 ? '0' + second : second

    const formatedTime = `${formatedMonth}m ${formatedDay}d ${formatedHour}h ${formatedMinute}min ${formatedSecond}s`
    time.innerHTML = formatedTime
  }, 1000)
}