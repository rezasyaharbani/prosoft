const objects = [document.getElementById('section2_logo'),
document.getElementById('section2_desc'),
document.getElementById('earth_image'),
document.getElementById('earth_image2'),
document.getElementById('earth_desc'),
document.getElementById('comunities_image'),
document.getElementById('comunities_desc'),
document.getElementById('partner_logo1'),
document.getElementById('partner_logo2')];

function checkScroll() {
    objects.forEach(function (object) {
        let objectPosition = object.getBoundingClientRect();

        // Cek apakah objek dalam viewport
        if (objectPosition.top < window.innerHeight && objectPosition.bottom >= 0) {
            object.classList.add('animate__animated'); // Tambahkan kelas animate untuk memulai animasi
            object.classList.add('animate__fadeInDown'); // Tambahkan kelas animate untuk memulai animasi
        } else {
            object.classList.remove('animate__animated'); // Hapus kelas animate untuk menghentikan animasi
            object.classList.remove('animate__fadeInDown'); // Hapus kelas animate untuk menghentikan animasi
        }
    });
}