const msg = document.querySelector('#msg')
const img = document.querySelector('#imagem')

let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
console.log(hours)
console.log(minutes)
msg.innerText = `Agora são: ${hours}:${minutes}`
function carregar(){
    if (hours >= 0 && hours < 12){
        img.src ='./5.png';
        document.body.style.background = '#0000'
        document.body.style.boxShadow = '3px 3px 10px rgba(39, 65, 214, 0.26)'
    } else if (hours >= 12 && hours <= 18){
        img.src = './17.png'
        document.body.style.background = '#F5500F'
        document.body.classList.add('sombra')
    } else{
        img.src = './19.png'
    }
}

setInterval(() => {
   carregar()
}, 100)




