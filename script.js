let botaoMudarCor = document.getElementById('MudarCor')

let letrasEnumeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

let n = 0

modoHexa.addEventListener('click', function(){
    iHex.checked = true
})
modoRgb.addEventListener('click', function(){
    iRgb.checked = true
})

botaoMudarCor.addEventListener('click', function(){
    let x = ''
    if (iRgb.checked){
        x = corRandomRgb()
    }else if (iRgb.checked === false){
        x = corRandomHex()
    }

    document.querySelector('main').style.backgroundColor = x
    document.querySelector('span').innerHTML = x
})

function corRandomHex(){
    let corHex = ['#']

    for(let cont = 0; cont < 6; cont++){
        n = 0
        n = Math.floor(Math.random() * 16)   
        corHex.push(letrasEnumeros[n])
    }
    let codeHex = corHex[0] + corHex[1] + corHex[2] + corHex[3] + corHex[4] + corHex[5] + corHex[6]

    if ((codeHex.includes('0') && (codeHex.includes('1') || codeHex.includes('2'))) || corHex[1] <= 3){
        document.querySelector('main').style.color = 'white'
    }else{
        document.querySelector('main').style.color = 'black'
    }

    return codeHex
}

function corRandomRgb(){
    let corRgb = []

    for(let cont = 0; cont < 3; cont++){
        let n = Math.round(Math.random() * 255)
        corRgb.push(n)
    }

    let codeRgb = 'rgb('+corRgb[0]+','+corRgb[1]+','+corRgb[2]+')'

    if ( (corRgb[0]  < 35) || (corRgb[1] < 35) || (corRgb[2] < 35)){
        document.querySelector('main').style.color = 'white'
    }else{
        document.querySelector('main').style.color = 'black'
    }

    return codeRgb
}

let h2Cor = document.querySelector('h2')
let pCor = document.querySelector('p')
let labelCor = document.querySelectorAll('label')

fonteBranco.addEventListener('click', function(){
    h2Cor.style.color = 'white'
    pCor.style.color = 'white'
    labelCor[0].style.color = 'white'
    labelCor[1].style.color = 'white'
})
fontePreto.addEventListener('click', function(){
    h2Cor.style.color = 'black'
    pCor.style.color = 'black'
    labelCor[0].style.color = 'black'
    labelCor[1].style.color = 'black'
})
