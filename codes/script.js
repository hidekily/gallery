const ids= [
    'opt1',
    'opt2',
    'opt3',
    'opt4',
    'opt5',
    'opt6',
    'opt7',
    'opt8',
    'opt9'
]

function optOVER1(opt){
    let index = ids.indexOf(opt)
    console.log(index)
    const baal = [...ids]
    if(index !== -1) {
        baal.splice(index, 1)
    }
    baal.forEach(el => {
        document.getElementById(el).style.opacity = '80%'
        document.getElementById(el).style.scale = '80%'
    })
}

function optOUT1(opt){
    let index = ids.indexOf(opt)
    console.log(index)
    const baal = [...ids]
    if(index !== -1){
        baal.splice(index, 1)
    }
    baal.forEach(el => {
        document.getElementById(el).style.opacity = '100%'
        document.getElementById(el).style.scale = '100%'
    })
}

function intro(){
    document.getElementById('box').style.opacity = '0'
}

let transition = 0
function coisadelouco(){
    document.getElementById('startsG').style.opacity = '0'
    document.getElementById('grid').style.opacity = '1'
    document.getElementById('grid').style.pointerEvents = 'all'
}

let escala = 0
function scale(){
    switch(escala){
        case 0:
            document.getElementById('opt1').style.backgroundSize = 'contain' //1
            document.getElementById('opt2').style.backgroundSize = 'contain' //2
            document.getElementById('opt3').style.backgroundSize = 'contain' //3
            document.getElementById('opt4').style.backgroundSize = 'contain' //4
            document.getElementById('opt5').style.backgroundSize = 'contain' //5
            document.getElementById('opt6').style.backgroundSize = 'contain' //6
            document.getElementById('opt7').style.backgroundSize = 'contain' //7
            document.getElementById('opt8').style.backgroundSize = 'contain' //8
            document.getElementById('opt9').style.backgroundSize = 'contain' //9
            escala++
        break;
        case 1:
            document.getElementById('opt1').style.backgroundSize = 'cover' //1
            document.getElementById('opt2').style.backgroundSize = 'cover' //2
            document.getElementById('opt3').style.backgroundSize = 'cover' //3
            document.getElementById('opt4').style.backgroundSize = 'cover' //4
            document.getElementById('opt5').style.backgroundSize = 'cover' //5
            document.getElementById('opt6').style.backgroundSize = 'cover' //6
            document.getElementById('opt7').style.backgroundSize = 'cover' //7
            document.getElementById('opt8').style.backgroundSize = 'cover' //8
            document.getElementById('opt9').style.backgroundSize = 'cover' //9
            escala = 0
        break;
    }
}

let linhas = 0
function linha(){
    switch(linhas){
        case 0:
            document.getElementById('opt1').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/miatalinha.jpeg?v=1684640191569)' //1 terços
            document.getElementById('opt2').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/kuramalinha.jpeg?v=1684640189003)' //2 preencha
            document.getElementById('opt3').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/linhasPlinha.jpeg?v=1684802705459)' //3 linhas
            document.getElementById('opt4').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/diagonallinha.jpeg?v=1684882221090)' //4
            document.getElementById('opt5').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/quadrolinha.jpeg?v=1684803037795)' //5 quadro
            document.getElementById('opt6').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/olholinha.jpeg?v=1684803260189)' //6 olho
            document.getElementById('opt7').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/padraolinha.jpeg?v=1684802711054)' //7 padrao
            document.getElementById('opt8').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/contrastelinha.jpeg?v=1684803492034)' //8 contraste
            
            linhas++
        break;
        case 1:
            document.getElementById('opt1').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/miata.jpeg?v=1684640190290)'//1
            document.getElementById('opt2').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/kurama.jpeg?v=1684640187225)'//2
            document.getElementById('opt3').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/padrao.jpeg?v=1684802709357)'//3
            document.getElementById('opt4').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/diagonal.jpeg?v=1684882220486)'//4
            document.getElementById('opt5').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/quadro.jpeg?v=1684803037125)'//5
            document.getElementById('opt6').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/olho.jpeg?v=1684803259634)'//6
            document.getElementById('opt7').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/padrao.jpeg?v=1684802709357)'//7
            document.getElementById('opt8').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/contraste.jpeg?v=1684803491125)'//8
            
            linhas = 0
        break;
    }
}