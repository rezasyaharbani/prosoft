const section2_logo = document.getElementById('section2_logo');
const section2_desc = document.getElementById('section2_desc');
const earth_image = document.getElementById('earth_image');
const earth_image2 = document.getElementById('earth_image2');
const earth_desc = document.getElementById('earth_desc');
const comunities_image = document.getElementById('comunities_image');
const comunities_desc = document.getElementById('comunities_desc');
const partner_logo1 = document.getElementById('partner_logo1');
const partner_logo2 = document.getElementById('partner_logo2');

const animations = {
    section2_logo: 'fadeInLeft',
    section2_desc: 'fadeInRight',
    earth_image: 'fadeInRight',
    earth_image2: 'fadeInRight',
    earth_desc: 'fadeInLeft',
    comunities_image: 'fadeInLeft',
    comunities_desc: 'fadeInRight',
    partner_logo1: 'fadeInUp',
    partner_logo2: 'fadeInUp',
}

const animations_out = {
    section2_logo: 'fadeOutLeft',
    section2_desc: 'fadeOutRight',
    earth_image: 'fadeOutRight',
    earth_image2: 'fadeOutRight',
    earth_desc: 'fadeOutLeft',
    comunities_image: 'fadeOutLeft',
    comunities_desc: 'fadeOutRight',
    partner_logo1: 'fadeOutUp',
    partner_logo2: 'fadeOutUp',
}

function checkScroll() {
    // Looping semua elemen yang akan dianimasikan
    for (const elementId in animations) {
        if (animations.hasOwnProperty(elementId)) {
            const element = document.getElementById(elementId);
            const animationIn = animations[elementId];
            const animationOut = animations_out[elementId];

            // mendapatkan viewport elemen
            let elementPosition = element.getBoundingClientRect();

            // Cek apakah elemen berada dalam viewport
            if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
                // element.classList.remove('d-none'); // Hapus class d-none untuk menampilkan elemen
                element.classList.remove(`animate__animated`); // Hapus kelas animasi yang diinginkan
                element.classList.remove(`animate__${animationIn}`); // Hapus kelas animasi yang diinginkan

                element.classList.add('animate__animated'); // Tambahkan base class animate untuk memulai animasi
                element.classList.add(`animate__${animationIn}`); // Tambahkan kelas animasi yang diinginkan
            }
        }
    }
}
