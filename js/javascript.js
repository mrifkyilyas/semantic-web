
function insert(num) {
    document.form.layar.value = document.form.layar.value + num
}

function reset() {
    document.form.layar.value = ""
}

function equal() {
    if (document.form.layar.value != "") {
        hasil = eval(document.form.layar.value)
        if (hasil % 1 == 0) {
            document.form.layar.value = hasil

        } else {
            document.form.layar.value = hasil.toFixed(2)
        }
    }
}

function del() {
    var isi = document.form.layar.value
    document.form.layar.value = isi.substr(0, isi.length - 1)
}

function akar() {
    if (document.form.layar.value != "") {
        hasil = Math.sqrt(document.form.layar.value)
        if (hasil % 1 == 0) {
            document.form.layar.value = hasil
        } else {
            document.form.layar.value = hasil.toFixed(2)
        }
    }
}

$(document).ready(function () {
    document.form.layar.value = "welcome"
})



