function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    var hora = 15
    if (hora >= 0 && hora <= 12) {
        //Bom dia
        img.src = 'images/foto-manha.gif'
        document.body.style.background = '#8BC0EB'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'images/foto-tarde.png'
        document.body.style.background = '#E89B5D'
    } else {
        //Boa noite
        img.src = 'images/foto-noite.png'
        document.body.style.background = '#845AE8'
    }

}