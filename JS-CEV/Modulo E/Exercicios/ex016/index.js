function contar() {
    let ini = document.getElementById('txtIni')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Revisar campos')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
        } else {
            //COntagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
        }

    }







}