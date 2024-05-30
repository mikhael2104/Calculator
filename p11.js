function tambah(){
    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil = eval(angka1) + eval(angka2)
    document.getElementById("hasil").innerHTML = hasil
}
function kurang(){
    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil = eval(angka1) - eval(angka2)
    document.getElementById("hasil").innerHTML = hasil
}
function kali(){
    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil = eval(angka1) * eval(angka2)
    document.getElementById("hasil").innerHTML =
    hasil
}
function bagi(){
    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil = eval(angka1) / eval(angka2)
    document.getElementById("hasil").innerHTML = hasil
}