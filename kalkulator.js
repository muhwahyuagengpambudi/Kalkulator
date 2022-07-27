var angka1 = document.getElementById("variable1");
var angka2 = document.getElementById("variable2");
var hasil = document.getElementById("variablehasil")

angka1.value = 0;
angka2.value = 0;
hasil.value = 0;

function tambah() {
    hasil.value = Number(angka1.value) + Number(angka2.value);
}

function kurang() {
    hasil.value = Number(angka1.value) - Number(angka2.value);
}

function kali() {
    hasil.value = Number(angka1.value) * Number(angka2.value);
}

function bagi() {
    hasil.value = Number(angka1.value) / Number(angka2.value);
}

function hapus1() {
    angka1.value = 0;
}

function hapus2() {
    angka2.value = 0;
}