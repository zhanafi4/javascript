function angka1() {
    let frm = document.getElementById("formulir")
    frm.a1.value = "";
}

function angka2() {
    let frm = document.getElementById("formulir")
    frm.a2.value = "";
}

function ulang() {
    let frm = document.getElementById("formulir")
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function tambah() {
    let frm = document.getElementById("formulir")
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else {
        //jika inputan benar
        let total = + angka1 + + angka2; //perhitungan
        frm.hasil.value = total; //penempatan hasil di element form hasil
    }
}

function kurang() {
    let frm = document.getElementById("formulir")
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else {
    let total =  angka1 - angka2; //tombol Kurang
    frm.hasil.value = total; //total hasil Kurang

    }
}


function kali() {
    let frm = document.getElementById("formulir")
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else {
    let total =  angka1*angka2; //tombol kali
    frm.hasil.value = total; //total hasil kali 
    }
}

function bagi() {
    let frm = document.getElementById("formulir")
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else {
    let total =  angka1/angka2; //tombol bagi
    frm.hasil.value = total; //total hasil bagi
    }
}

function kuadrat() {
    let frm = document.getElementById("formulir")
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else {
    let total =  Math.pow(angka1,angka2); //tombol kuadrat
    frm.hasil.value = total; //total hasil kuadrat
    }
}
    
    
    
