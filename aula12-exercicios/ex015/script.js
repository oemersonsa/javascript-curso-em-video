verificar = () => {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        const genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'garota.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'mulher.png')
            } else {
                // Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}