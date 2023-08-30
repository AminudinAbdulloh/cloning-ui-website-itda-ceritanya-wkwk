const slider = document.getElementById("slider");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const slides = slider.getElementsByClassName("img-slide");
let slideIndex = 0;

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

showSlide(slideIndex);

prevSlide.addEventListener("click", function next() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
});
nextSlide.addEventListener("click", function prev() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
});


const namaInput = document.getElementById('nama')
const tanggalLahirInput = document.getElementById('tanggalLahir')
const radioButton1 = document.getElementById('lakiLaki')
const radioButton2 = document.getElementById('perempuan')
const pesanInput = document.getElementById('pesan')
const submitButton = document.getElementById('submit')
const output = document.getElementById('output')

const messageUs = document.getElementById('message-us-menu')
const namaInputUser = document.getElementById('namaPengunjung')

submitButton.addEventListener('click', function() {
    const nama = namaInput.value;
    const tanggalLahir = tanggalLahirInput.value;

    let jenisKelamin = "";
    if (radioButton1.checked) {
        jenisKelamin = radioButton1.value;
    } else if (radioButton2.checked) {
        jenisKelamin = radioButton2.value;
    }

    const pesan = pesanInput.value;

    const tanggalSekarang = new Date();
    const tanggalFormatted = tanggalSekarang.toISOString().split('T')[0];

    if (nama == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == ""){
        alert("Tidak boleh ada yang kosong")
    } else {
        namaInputUser.textContent = nama;

        output.textContent = "current time : " + tanggalFormatted + "<br> <br>" + "Nama : " + nama + "<br>" +
        "Tanggal lahir : " + tanggalLahir + "<br>" + "jenis kelamin : " + jenisKelamin + "<br>" + "Pesan : " + pesan;

        output.innerHTML = output.textContent;
    }
});


messageUs.addEventListener('click', function() {
    const nama = namaInput.value;
    const tanggalLahir = tanggalLahirInput.value;

    let jenisKelamin = "";
    if (radioButton1.checked) {
        jenisKelamin = radioButton1.value;
    } else if (radioButton2.checked) {
        jenisKelamin = radioButton2.value;
    }

    const pesan = pesanInput.value;

    const tanggalSekarang = new Date();
    const tanggalFormatted = tanggalSekarang.toISOString().split('T')[0];

    namaInputUser.textContent = nama;

    output.textContent = "current time : " + tanggalFormatted + "<br> <br>" + "Nama : " + nama + "<br>" +
    "Tanggal lahir : " + tanggalLahir + "<br>" + "jenis kelamin : " + jenisKelamin + "<br>" + "Pesan : " + pesan;

    output.innerHTML = output.textContent;
});


const menuToggleInput = document.querySelector('#menu-toggle input')
const checkbox = document.querySelector('input')
const navMenu = document.querySelector('ul')

menuToggleInput.addEventListener("click", () => {
    
    if (checkbox.checked){
        navMenu.style.transform = 'translate(0)'
    } else {
        navMenu.style.transform = 'translate(100%)'
    }

    // Toggle the bar animations
    document.getElementById("bar1").classList.toggle("rotate-45");
    document.getElementById("bar2").classList.toggle("hide");
    document.getElementById("bar3").classList.toggle("rotate-135");
});