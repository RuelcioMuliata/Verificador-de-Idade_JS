var verificar = document.getElementById('verificar')
verificar.addEventListener('click', clicar)

function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(document.getElementById('year').value)
    var fotografia = document.getElementById('imagem')
    var res = document.getElementById('paragrafo')

    if (fano == 0 || (fano) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var masculino = document.getElementById('Male')
        var feminino = document.getElementById('Female')
        var idade = ano - fano
        var genero = ''
        if (feminino.checked) {
            genero = 'Female'
            if (idade >= 0 && idade < 10) {
                fotografia.src = 'menina-5-9.png'
            } else if (idade < 20) {
                fotografia.src = 'menina16-17.png'
            } else if (idade < 50) {
                fotografia.src = 'menina36-45.png'
            } else {
                fotografia.src = 'menina-46-79.png'
            }
        } else if (masculino.checked) {
            genero = 'Male'
            if (idade >= 0 && idade < 10) {
                fotografia.src = 'menino1-10.png'
            } else if (idade < 20) {
                fotografia.src = 'menino11-20.png'
            } else if (idade < 50) {
                fotografia.src = 'menino21-40.png'
            } else {
                fotografia.src = 'menino60-90.png'
            }
        }

        res.innerHTML = `It was detected a ${genero}, who are ${idade} years old!`
    }

}


    

// var femenino = document.getElementById('Female').value
// var Masculino = document.getElementById('Male').value

/*  


    var foto = document.getElementById('imagem')
    var nascimento = Number(document.getElementById('year').value)
    var anoAtual = 2023
    var resultado = (anoAtual - nascimento)
    
    
    
    var valor1 = document.querySelector('input[name="genero"]:checked').value*/


    