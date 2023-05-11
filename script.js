function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selbtab')
    let visor = document.querySelector('.none')

    if(num.value.length == 0){
        window.alert('[ERRO] DIGITE UM NÚMERO')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =''
        while(c <= 10){
            let item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

    visor.classList.remove('none')
}
