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
        img.src ='./7.png';
        document.body.style.background = '0BA7DB';
        var section = document.querySelector('section');
        section.style.boxShadow = '5px 5px 1000px #2596be';
    } else if (hours >= 12 && hours <= 18){
        img.src = './17.png'
        document.body.style.background = '#F5500F';
        var section = document.querySelector('section');
        section.style.boxShadow = '5px 5px 100px #d85c81';
    } else{
        img.src = './19.png'
        var section = document.querySelector('section');
        section.style.boxShadow = '5px 5px 100px #77d1ef';
    }
}

setInterval(() => {
   carregar()
}, 100)




