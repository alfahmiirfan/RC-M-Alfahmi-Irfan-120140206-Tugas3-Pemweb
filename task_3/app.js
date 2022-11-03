//M Alfahmi Irfan
//120140206
//PemWeb RC

//DOM Manipulation
///menyembunyikan teks asli HTML (inner HTML)
const tugas3 = document.getElementById('tugas3')
tugas3.innerHTML = 'Iphone 14 Series';
const sectionA = document.querySelector('section#series')
sectionA.innerHTML = 'Daftar Iphone 14';
const sectionB = document.querySelector('section#ram')
sectionB.innerHTML = 'Varian RAM';

const p4 = document.querySelector('p5');

//mengubah warna pada background
function ubahWarna() {
    p5.style.backgroundColor = 'lightblue';
};
const p5 = document.querySelector('.p5');
p5.onclick = ubahWarna;

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input Salah";
    } else {
        text = "Terima Kasih ";
    }
    document.getElementById("demo").innerHTML = text;
}