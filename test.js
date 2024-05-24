function showsidebar() {
    console.log('Sidebar function called');
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.animation = 'slideIn 1s forwards'; // Ubah animasi
}
function offsidebar() {
    console.log('Sidebar function called');
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.animation = 'slideOut 1s forwards'; // Ubah animasi
}

document.addEventListener('DOMContentLoaded', (event) => {
    var audioElement = document.getElementById('myaudio');
    var toggleButton = document.getElementById('toggleButton');
    const page = document.querySelector('.tampilanawal');
    
    toggleButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            page.style.display = 'none';
            toggleButton.textContent = 'Pause';
        } else {
            audioElement.pause();
            toggleButton.textContent = 'Play';
        }
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var elements = document.getElementsByClassName('show');
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
        elements[i].classList.remove('show');
    }
    setTimeout(function() {
        var hiddenElements = document.getElementsByClassName('gambar2');
        for(var i = 0; i < hiddenElements.length; i++) {
            hiddenElements[i].classList.add('show');
            hiddenElements[i].classList.remove('hidden');
        }
    }, 500); // Ganti 1000 dengan jumlah milidetik yang diinginkan (dalam contoh ini, 1 detik)
});

//siswa

function offpage() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const rahman = document.querySelector('#rahman3');
    const aisyah = document.querySelector('#aisyah3');
    const aminah = document.querySelector('#aminah3');
    const vyna = document.querySelector('#vyna3');
    const didi = document.querySelector('#didi3');
    const nera = document.querySelector('#nera3');
    const haris = document.querySelector('#haris3');
    const indri = document.querySelector('#indri3');
    const kevin = document.querySelector('#kevin3');
    const fadil = document.querySelector('#fadil3');
    const fayruz = document.querySelector('#fayruz3');
    const adli = document.querySelector('#adli3');
    const maulana = document.querySelector('#maulana3');
    const arifin = document.querySelector('#arifin3');
    const rifat = document.querySelector('#rifat3');
    const rezki = document.querySelector('#rezki3');
    const melda = document.querySelector('#melda3');
    const maulina = document.querySelector('#maulina3');
    const neneng = document.querySelector('#neneng3');
    const ahur = document.querySelector('#ahur3');
    const putri = document.querySelector('#putri3');
    const ramdani = document.querySelector('#ramdani3');
    const roykhan = document.querySelector('#roykhan3');
    const tesya = document.querySelector('#tesya3');
    const vedro = document.querySelector('#vedro3');
    page.style.display = 'none';
    vyna.style.display = 'none';
    didi.style.display = 'none';
    nera.style.display = 'none';
    haris.style.display = 'none';
    indri.style.display = 'none';
    kevin.style.display = 'none';
    fadil.style.display = 'none';
    fayruz.style.display = 'none';
    adli.style.display = 'none';
    maulana.style.display = 'none';
    arifin.style.display = 'none';
    rifat.style.display = 'none';
    rezki.style.display = 'none';
    melda.style.display = 'none';
    maulina.style.display = 'none';
    neneng.style.display = 'none';
    ahur.style.display = 'none';
    putri.style.display = 'none';
    ramdani.style.display = 'none';
    roykhan.style.display = 'none';
    tesya.style.display = 'none';
    vedro.style.display = 'none';
    aisyah.style.display = 'none';
    rahman.style.display = 'none'; 
    aminah.style.display = 'none';// Ubah animasi
}

function aisyah() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const aisyah = document.querySelector('#aisyah3');
    page.style.display = 'flex';
    aisyah.style.display = 'block'; // Ubah animasi
}

function rahman() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const rahman = document.querySelector('#rahman3');
    page.style.display = 'flex';
    rahman.style.display = 'block'; // Ubah animasi
}

function aminah() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const aminah = document.querySelector('#aminah3');
    page.style.display = 'flex';
    aminah.style.display = 'block'; // Ubah animasi
}

function vyna() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const vyna = document.querySelector('#vyna3');
    page.style.display = 'flex';
    vyna.style.display = 'block'; // Ubah animasi
}

function didi() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const didi = document.querySelector('#didi3');
    page.style.display = 'flex';
    didi.style.display = 'block'; // Ubah animasi
}

function nera() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const nera = document.querySelector('#nera3');
    page.style.display = 'flex';
    nera.style.display = 'block'; // Ubah animasi
}

function haris() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const haris = document.querySelector('#haris3');
    page.style.display = 'flex';
    haris.style.display = 'block'; // Ubah animasi
}

function indri() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const indri = document.querySelector('#indri3');
    page.style.display = 'flex';
    indri.style.display = 'block'; // Ubah animasi
}

function kevin() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const kevin = document.querySelector('#kevin3');
    page.style.display = 'flex';
    kevin.style.display = 'block'; // Ubah animasi
}

function fadil() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const fadil = document.querySelector('#fadil3');
    page.style.display = 'flex';
    fadil.style.display = 'block'; // Ubah animasi
}

function fayruz() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const fayruz = document.querySelector('#fayruz3');
    page.style.display = 'flex';
    fayruz.style.display = 'block'; // Ubah animasi
}

function adli() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const adli = document.querySelector('#adli3');
    page.style.display = 'flex';
    adli.style.display = 'block'; // Ubah animasi
}

function maulana() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const maulana = document.querySelector('#maulana3');
    page.style.display = 'flex';
    maulana.style.display = 'block'; // Ubah animasi
}

function arifin() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const arifin = document.querySelector('#arifin3');
    page.style.display = 'flex';
    arifin.style.display = 'block'; // Ubah animasi
}

function rifat() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const rifat = document.querySelector('#rifat3');
    page.style.display = 'flex';
    rifat.style.display = 'block'; // Ubah animasi
}

function rezki() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const rezki = document.querySelector('#rezki3');
    page.style.display = 'flex';
    rezki.style.display = 'block'; // Ubah animasi
}

function melda() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const melda = document.querySelector('#melda3');
    page.style.display = 'flex';
    melda.style.display = 'block'; // Ubah animasi
}

function maulina() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const maulina = document.querySelector('#maulina3');
    page.style.display = 'flex';
    maulina.style.display = 'block'; // Ubah animasi
}

function neneng() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const neneng = document.querySelector('#neneng3');
    page.style.display = 'flex';
    neneng.style.display = 'block'; // Ubah animasi
}

function ahur() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const ahur = document.querySelector('#ahur3');
    page.style.display = 'flex';
    ahur.style.display = 'block'; // Ubah animasi
}

function putri() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const putri = document.querySelector('#putri3');
    page.style.display = 'flex';
    putri.style.display = 'block'; // Ubah animasi
}

function ramdani() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const ramdani = document.querySelector('#ramdani3');
    page.style.display = 'flex';
    ramdani.style.display = 'block'; // Ubah animasi
}

function roykhan() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const roykhan = document.querySelector('#roykhan3');
    page.style.display = 'flex';
    roykhan.style.display = 'block'; // Ubah animasi
}

function tesya() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const tesya = document.querySelector('#tesya3');
    page.style.display = 'flex';
    tesya.style.display = 'block'; // Ubah animasi
}

function vedro() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const vedro = document.querySelector('#vedro3');
    page.style.display = 'flex';
    vedro.style.display = 'block'; // Ubah animasi
}
