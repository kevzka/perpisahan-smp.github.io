document.addEventListener('DOMContentLoaded', () => {
    const profiles = [
        {
            id: 'rahman3',
            name: 'rahman',
            imgSrc: 'https://drive.google.com/thumbnail?id=16gV9zS_3kN-S0RZ5lxZI78jnYN6xzuEH',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'aminah3',
            name: 'aminah',
            imgSrc: 'https://drive.google.com/thumbnail?id=15kTn_mqpuWB1U_NrvozHpROBEToOKQ9f',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'vyna3',
            name: 'vyna',
            imgSrc: 'https://drive.google.com/thumbnail?id=15iqnE8lI4OTuQsALAz2_iBZ7_JfWWWGs',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'tesya3',
            name: 'tesya',
            imgSrc: 'https://drive.google.com/thumbnail?id=15o-DrMyP5-PHeEm-AzA4FRTTjzT04Oy3',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        // Tambahkan profil berikut dari rahman sampai vedro
        {
            id: 'rahman3',
            name: 'rahman',
            imgSrc: 'https://drive.google.com/thumbnail?id=16gV9zS_3kN-S0RZ5lxZI78jnYN6xzuEH',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'aisyah3',
            name: 'aisyah',
            imgSrc: 'https://drive.google.com/thumbnail?id=15bpKS0pDvyH3h538yLvdYVeg6GiX6AVM',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'aminah3',
            name: 'aminah',
            imgSrc: 'https://drive.google.com/thumbnail?id=15kTn_mqpuWB1U_NrvozHpROBEToOKQ9f',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'vyna3',
            name: 'vyna',
            imgSrc: 'https://drive.google.com/thumbnail?id=15iqnE8lI4OTuQsALAz2_iBZ7_JfWWWGs',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'didi3',
            name: 'didi',
            imgSrc: 'https://drive.google.com/thumbnail?id=162f6lMwHomE2_GK6vbM4wF5EchxVVeCE',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'nera3',
            name: 'nera',
            imgSrc: 'https://drive.google.com/thumbnail?id=15rpgIRv_wqJmCPve59VF_eD6kB4tEP2L',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'haris3',
            name: 'haris',
            imgSrc: 'https://drive.google.com/thumbnail?id=165qVdck_rjGtyUh30VDyCJedcldNFB-I',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'indri3',
            name: 'indri',
            imgSrc: 'https://drive.google.com/thumbnail?id=15WRX7gJG1WqxOhAlzlPoWcQijqlonoTk',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'kevin3',
            name: 'kevin',
            imgSrc: 'https://drive.google.com/thumbnail?id=16QYatFwpAO0tHiBSe1hWsCUQod7-YVe-',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'fadil3',
            name: 'fadil',
            imgSrc: 'https://drive.google.com/thumbnail?id=16L3cDDhV4JME2N8v71Am7-RTgcP1gL1Y',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'maulina3',
            name: 'maulina',
            imgSrc: 'https://drive.google.com/thumbnail?id=15bQ473YqeY0ZedlTs3i15KQCzzP1-U1l',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'melda3',
            name: 'melda',
            imgSrc: 'https://drive.google.com/thumbnail?id=15URSI10DHdT4_dkK143b3AF0EcHakGmG',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'maulana3',
            name: 'maulana',
            imgSrc: 'https://drive.google.com/thumbnail?id=16Vtn_eACXjDLnzCrPQI3nL7ioMKhJ29p',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'adli3',
            name: 'adli',
            imgSrc: 'https://drive.google.com/thumbnail?id=16A1iW6THxoMtXzUYSUBKoTaEjqSWV-mI',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'fayruz3',
            name: 'fayruz',
            imgSrc: 'https://drive.google.com/thumbnail?id=16mTUjlyrlyS6oLvwzWgfTkhOKi4gyPj7',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'rezki3',
            name: 'rezki',
            imgSrc: 'https://drive.google.com/thumbnail?id=163SdG9yyp17fhLfDj2r4IFh_34mZPole',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'rifat3',
            name: 'rifat',
            imgSrc: 'https://drive.google.com/thumbnail?id=15z7DDd0cLsB4aw_XJK6XhvwmLOD8dLbq',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'arifin3',
            name: 'arifin',
            imgSrc: 'https://drive.google.com/thumbnail?id=160Dr-t4zBsW_Y67K8NJa75U2UGtFFGRg',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'neneng3',
            name: 'neneng',
            imgSrc: 'https://drive.google.com/thumbnail?id=15pOD8xwOqHxjAft0nL564dbzoX07-Pt8',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'ahur3',
            name: 'ahur',
            imgSrc: 'https://drive.google.com/thumbnail?id=16ROQBltYjF1hJ2Cw1C2YUzTtLhICaGFS',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'putri3',
            name: 'putri',
            imgSrc: 'https://drive.google.com/thumbnail?id=15VY7KJ4whxMM9pd1FeYYKJe4VD_3hZjQ',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'ramdani3',
            name: 'ramdani',
            imgSrc: 'https://drive.google.com/thumbnail?id=16d3Wp6ciRc4DANQyFfVmu1czAwPnJM-6',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'roykhan3',
            name: 'roykhan',
            imgSrc: 'https://drive.google.com/thumbnail?id=15qoiMlqstPaqVbXQ822Ut9zl_1L8zkSV',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'tesya3',
            name: 'tesya',
            imgSrc: 'https://drive.google.com/thumbnail?id=15o-DrMyP5-PHeEm-AzA4FRTTjzT04Oy3',
            dob: '-none-',
            hobby: '',
            nickname: ''
        },
        {
            id: 'vedro3',
            name: 'vedro',
            imgSrc: 'https://drive.google.com/thumbnail?id=16dD-87YXnfsnpLsTw7gKe8d0E9XZ6tri',
            dob: '-none-',
            hobby: '',
            nickname: ''
        }
    ];

    const profilesContainer = document.querySelector('.kotak2');

    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('kotak3');
        profileDiv.id = profile.id;

        profileDiv.innerHTML = `
            <img src="${profile.imgSrc}" id="${profile.id.replace('3', '2')}" alt="${profile.name}">
            <h1>
                Nama : ${profile.name} <br>
                tgl/lhir : ${profile.dob}<br>
                hobi : ${profile.hobby}<br>
                julukan : ${profile.nickname}
            </h1>
            <a href="#">
                <h1>whatsapp</h1>
                <h1>instagram</h1>
            </a>
        `;
        profilesContainer.appendChild(profileDiv);
    });
});

function aisyah() {
    const aisyahElement = document.getElementById('aisyah3');
    const page = document.querySelector('.kotak2');
    if (aisyahElement) {
        aisyahElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "aisyah3" not found.');
    }
}

function rahman() {
    const rahmanElement = document.getElementById('rahman3');
    const page = document.querySelector('.kotak2');
    if (rahmanElement) {
        rahmanElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "rahman3" not found.');
    }
}

function aminah() {
    const aminahElement = document.getElementById('aminah3');
    const page = document.querySelector('.kotak2');
    if (aminahElement) {
        aminahElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "aminah3" not found.');
    }
}

function vyna() {
    const vynaElement = document.getElementById('vyna3');
    const page = document.querySelector('.kotak2');
    if (vynaElement) {
        vynaElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "vyna3" not found.');
    }
}

function didi() {
    const didiElement = document.getElementById('didi3');
    const page = document.querySelector('.kotak2');
    if (didiElement) {
        didiElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "didi3" not found.');
    }
}

function nera() {
    const neraElement = document.getElementById('nera3');
    const page = document.querySelector('.kotak2');
    if (neraElement) {
        neraElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "nera3" not found.');
    }
}

function haris() {
    const harisElement = document.getElementById('haris3');
    const page = document.querySelector('.kotak2');
    if (harisElement) {
        harisElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "haris3" not found.');
    }
}

function indri() {
    const indriElement = document.getElementById('indri3');
    const page = document.querySelector('.kotak2');
    if (indriElement) {
        indriElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "indri3" not found.');
    }
}

function kevin() {
    const kevinElement = document.getElementById('kevin3');
    const page = document.querySelector('.kotak2');
    if (kevinElement) {
        kevinElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "kevin3" not found.');
    }
}

function fadil() {
    const fadilElement = document.getElementById('fadil3');
    const page = document.querySelector('.kotak2');
    if (fadilElement) {
        fadilElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "fadil3" not found.');
    }
}

function maulina() {
    const maulinaElement = document.getElementById('maulina3');
    const page = document.querySelector('.kotak2');
    if (maulinaElement) {
        maulinaElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "maulina3" not found.');
    }
}

function melda() {
    const meldaElement = document.getElementById('melda3');
    const page = document.querySelector('.kotak2');
    if (meldaElement) {
        meldaElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "melda3" not found.');
    }
}

function maulana() {
    const maulanaElement = document.getElementById('maulana3');
    const page = document.querySelector('.kotak2');
    if (maulanaElement) {
        maulanaElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "maulana3" not found.');
    }
}

function adli() {
    const adliElement = document.getElementById('adli3');
    const page = document.querySelector('.kotak2');
    if (adliElement) {
        adliElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "adli3" not found.');
    }
}

function fayruz() {
    const fayruzElement = document.getElementById('fayruz3');
    const page = document.querySelector('.kotak2');
    if (fayruzElement) {
        fayruzElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "fayruz3" not found.');
    }
}

function rezki() {
    const rezkiElement = document.getElementById('rezki3');
    const page = document.querySelector('.kotak2');
    if (rezkiElement) {
        rezkiElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "rezki3" not found.');
    }
}

function rifat() {
    const rifatElement = document.getElementById('rifat3');
    const page = document.querySelector('.kotak2');
    if (rifatElement) {
        rifatElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "rifat3" not found.');
    }
}

function arifin() {
    const arifinElement = document.getElementById('arifin3');
    const page = document.querySelector('.kotak2');
    if (arifinElement) {
        arifinElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "arifin3" not found.');
    }
}

function neneng() {
    const nenengElement = document.getElementById('neneng3');
    const page = document.querySelector('.kotak2');
    if (nenengElement) {
        nenengElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "neneng3" not found.');
    }
}

function ahur() {
    const ahurElement = document.getElementById('ahur3');
    const page = document.querySelector('.kotak2');
    if (ahurElement) {
        ahurElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "ahur3" not found.');
    }
}

function putri() {
    const putriElement = document.getElementById('putri3');
    const page = document.querySelector('.kotak2');
    if (putriElement) {
        putriElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "putri3" not found.');
    }
}

function ramdani() {
    const ramdaniElement = document.getElementById('ramdani3');
    const page = document.querySelector('.kotak2');
    if (ramdaniElement) {
        ramdaniElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "ramdani3" not found.');
    }
}

function roykhan() {
    const roykhanElement = document.getElementById('roykhan3');
    const page = document.querySelector('.kotak2');
    if (roykhanElement) {
        roykhanElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "roykhan3" not found.');
    }
}

function tesya() {
    const tesyaElement = document.getElementById('tesya3');
    const page = document.querySelector('.kotak2');
    if (tesyaElement) {
        tesyaElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "tesya3" not found.');
    }
}

function vedro() {
    const vedroElement = document.getElementById('vedro3');
    const page = document.querySelector('.kotak2');
    if (vedroElement) {
        vedroElement.style.display = 'block';
        page.style.display = 'flex';
        page.style.animation = 'kotak2 1s forwards';
    } else {
        console.error('Element with ID "vedro3" not found.');
    }
}

const images = ['rahman3','aisyah3','aminah3','vyna3','didi3','nera3','haris3','indri3','kevin3','fadil3','maulina3','melda3','maulana3','adli3','fayruz3','rezki3','rifat3','arifin3','neneng3','ahur3','putri3','ramdani3','roykhan3','tesya3','vedro3'];

// Objek untuk menyimpan status sebelumnya dari setiap elemen
const previousDisplayStatus = {};

// Variabel global untuk menyimpan divIndex
let divIndex;

// Membuat fungsi untuk memeriksa perubahan dalam display
function checkDisplay() {
    images.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            const currentDisplay = window.getComputedStyle(element).display;
            const previousDisplay = previousDisplayStatus[id];
            
            // Memeriksa apakah display sebelumnya sama dengan display saat ini
            if (currentDisplay === 'block' && previousDisplay !== 'block') {
                console.log(`Element dengan id ${id} memiliki display block.`);
                
                // Menampilkan indeks elemen dengan display block
                divIndex = images.indexOf(id);
                console.log(`ID div '${id}' terletak di urutan ${divIndex} dalam array images.`);
            }

            // Menyimpan display saat ini sebagai display sebelumnya
            previousDisplayStatus[id] = currentDisplay;
        }
    });
}

// Memanggil fungsi checkDisplay setiap milidetik
setInterval(checkDisplay, 1);

setTimeout(() => {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    // Fungsi untuk memperbarui tampilan galeri
    function updateGallery() {
        images.forEach((id, index) => {
            const element = document.getElementById(id);
            element.style.display = (index === divIndex) ? 'block' : 'none';
        });
    }

    // Event listener untuk tombol sebelumnya
    prevBtn.addEventListener('click', () => {
        divIndex = (divIndex > 0) ? divIndex - 1 : images.length - 1;
        updateGallery();
    });

    // Event listener untuk tombol berikutnya
    nextBtn.addEventListener('click', () => {
        divIndex = (divIndex < images.length - 1) ? divIndex + 1 : 0;
        updateGallery();
    });

    // Update gallery secara langsung tanpa perlu interval tambahan
    updateGallery();
}, 2);
