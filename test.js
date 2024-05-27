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
function gambarOn() {
    console.log('Sidebar function called');
    const gambar2 = document.querySelector('.kotak4');
    gambar2.style.display = 'flex'; // Ubah animasi
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
        var hiddenElements2 = document.getElementsByClassName('teks1');
        for(var i = 0; i < hiddenElements2.length; i++) {
            hiddenElements2[i].classList.add('teksshow');
            hiddenElements2[i].classList.remove('tekshide');
        }
    }, 1); // Ganti 1000 dengan jumlah milidetik yang diinginkan (dalam contoh ini, 1 detik)
});

//siswa

function offpage() {
    console.log('Sidebar function called');
    const page = document.querySelector('.kotak2');
    const aisyah = document.getElementById('aisyah3');
    const rahman = document.getElementById('rahman3');
    const aminah = document.getElementById('aminah3');
    const vyna = document.getElementById('vyna3');
    const didi = document.getElementById('didi3');
    const nera = document.getElementById('nera3');
    const haris = document.getElementById('haris3');
    const indri = document.getElementById('indri3');
    const kevin = document.getElementById('kevin3');
    const fadil = document.getElementById('fadil3');
    const fayruz = document.getElementById('fayruz3');
    const adli = document.getElementById('adli3');
    const maulana = document.getElementById('maulana3');
    const arifin = document.getElementById('arifin3');
    const rifat = document.getElementById('rifat3');
    const rezki = document.getElementById('rezki3');
    const melda = document.getElementById('melda3');
    const maulina = document.getElementById('maulina3');
    const neneng = document.getElementById('neneng3');
    const ahur = document.getElementById('ahur3');
    const putri = document.getElementById('putri3');
    const ramdani = document.getElementById('ramdani3');
    const roykhan = document.getElementById('roykhan3');
    const tesya = document.getElementById('tesya3');
    const vedro = document.getElementById('vedro3');
    page.style.display = 'none';
    aisyah.style.display = 'none';
    rahman.style.display = 'none';
    aminah.style.display = 'none';
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
}
