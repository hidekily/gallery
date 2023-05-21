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
            document.getElementById('opt1').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/miatalinha.jpeg?v=1684640191569)' //1
            document.getElementById('opt2').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/kuramalinha.jpeg?v=1684640189003)' //2
            document.getElementById('opt3').style.backgroundImage = 'url(/codes/pics/)' //3
            document.getElementById('opt4').style.backgroundImage = 'url(/codes/pics/)' //4
            document.getElementById('opt5').style.backgroundImage = 'url(/codes/pics/)' //5
            document.getElementById('opt6').style.backgroundImage = 'url(/codes/pics/)' //6
            document.getElementById('opt7').style.backgroundImage = 'url(/codes/pics/)' //7
            document.getElementById('opt8').style.backgroundImage = 'url(/codes/pics/)' //8
            document.getElementById('opt9').style.backgroundImage = 'url(/codes/pics/)' //9
            linhas++
        break;
        case 1:
            document.getElementById('opt1').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/miata.jpeg?v=1684640190290)'//1
            document.getElementById('opt2').style.backgroundImage = 'url(https://cdn.glitch.global/4cc125e4-5188-4673-8e54-dac283e6c6a2/kurama.jpeg?v=1684640187225)'//2
            document.getElementById('opt3').style.backgroundImage = 'url(/codes/pics/)'//3
            document.getElementById('opt4').style.backgroundImage = 'url(/codes/pics/)'//4
            document.getElementById('opt5').style.backgroundImage = 'url(/codes/pics/)'//5
            document.getElementById('opt6').style.backgroundImage = 'url(/codes/pics/)'//6
            document.getElementById('opt7').style.backgroundImage = 'url(/codes/pics/)'//7
            document.getElementById('opt8').style.backgroundImage = 'url(/codes/pics/)'//8
            document.getElementById('opt9').style.backgroundImage = 'url(/codes/pics/)'//9
            linhas = 0
        break;
    }
}