function tabuada() {
    var num = document.getElementById('number')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um numero')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${c} X ${n} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}