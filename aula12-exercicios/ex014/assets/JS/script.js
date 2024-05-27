function carregar() {
    const msg = document.querySelector('#msg')
    const img = document.querySelector('#imagem')
    const saud = document.querySelector('#saud')
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    const dia = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    
    saud.innerHTML = `Hoje é ${dia[data.getDay()]}, ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}.`

    setTimeout('carregar()', 500)

    if (hora >= 0 && hora < 12) {
        // BOM DIA 
        img.src = './assets/img/manha.png'
        msg.innerHTML = `Agora são <b>${hora}:${min}:${seg}</b> horas. <b><br>BOM DIA</br></b>`
        document.body.style.background = '#c66535'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = './assets/img/tarde.png'
        msg.innerHTML = `Agora são <b>${hora}:${min}:${seg}</b> horas. <b><br>BOA TARDE!</br></b>`
        document.body.style.background = '#8a555b'
    } else {
        //BOA NOITE
        img.src = './assets/img/noite.png'
        msg.innerHTML = `Agora são <b>${hora}:${min}:${seg}</b> horas. <b><br>BOA NOITE!</br></b>`
        document.body.style.background = '#283445'
    }
}