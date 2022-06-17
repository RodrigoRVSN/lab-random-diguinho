let timer 
const initialHours = document.getElementsByClassName('hours')[0].textContent
const initialMinutes = document.getElementsByClassName('minutes')[0].textContent
const initialSeconds = document.getElementsByClassName('seconds')[0].textContent

const getDifference = (date) => {
  const now = new Date().getTime()
  return date - now
}

const startCount = () => {
  const hours = document.getElementsByClassName('hours')[0]
  const minutes = document.getElementsByClassName('minutes')[0]
  const seconds = document.getElementsByClassName('seconds')[0]

  const date = new Date()
  date.setTime(date.getTime() + hours.textContent * 60 * 60 * 1000 + minutes.textContent * 60 * 1000 + seconds.textContent * 1000)

  timer = setInterval(() => {
    const difference = getDifference(date)

    let hoursTimer = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesTimer = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsTimer = Math.floor((difference % (1000 * 60)) / 1000);

    hours.textContent = String(hoursTimer).padStart(2, '0')
    minutes.textContent = String(minutesTimer).padStart(2, '0')
    seconds.textContent = String(secondsTimer).padStart(2, '0')
    
    if (difference < 2) {
      playAudio()
      resetCount()
    }
   
  }, 1000)
}

const stopCount = () => {
  clearInterval(timer)
}

const resetCount = () => {
  document.getElementsByClassName('hours')[0].textContent = initialHours
  document.getElementsByClassName('minutes')[0].textContent = initialMinutes
  document.getElementsByClassName('seconds')[0].textContent = initialSeconds

  stopCount()
}

const playAudio = () => {
  const audio = new Audio('./notification.mp3');
  audio.play(); 
}