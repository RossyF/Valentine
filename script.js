const explosion =
"https://www.baixamais.net/resources/efeitos-sonoros/explosoes/Explosion%2001.mp3";
const yei =
"https://github.com/HectorBlisS/AnimatedCards/blob/master/yei.mp3?raw=true";

const colors = ["#ddcb46", "#46dd7f", "#4658dd", "#dd46a3", "#7f46dd"];
const emojies = ['🍆', '❤️‍🔥', '💘', '😍', '💖', '🥰','😘', '🤯']
const card = document.querySelector('.card')
const root = document.querySelector('.root')

// audio
const audio1 = document.createElement('audio')
audio1.src = explosion
const audio2 = document.createElement('audio')
audio2.src = yei

const generateOneConfetti = (i, explosion) => {
const div = document.createElement('div')
div.classList.add('confetti')
const randomNumber = Math.floor(Math.random() * 100)
const randomIndex = Math.floor(Math.random() * colors.length)
const emojieIndex = Math.floor(Math.random() * emojies.length)
div.style = `--i:${i};left:${randomNumber}%;background:${colors[randomIndex]}`
div.innerText = emojies[emojieIndex]
root.appendChild(div)
if(explosion) {
div.classList.add('explosion')
}
}

const generateConfettis = (n, explosion) => {
  // 1.- crear un ciclo para crear n conffetis
for(let i = 0; i < n ; i++) {
    // 2.- llamariamos a la funcion que crea 1 solo generateConfetti
    generateOneConfetti(i, explosion)
}
  // 3.- agregar el effecto de explosion
  // 4.- manipular el audio
}

// listeners
card.onclick = () => {
card.classList.add('flip')
generateConfettis(200, true)
generateConfettis(128)
audio1.play()
audio2.play()
}