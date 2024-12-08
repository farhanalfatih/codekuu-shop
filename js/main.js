

// navbar aktif
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section'); // Ambil semua section
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        // Cek apakah section sedang terlihat di viewport
        if (sectionTop >= 0 && sectionTop < window.innerHeight) { // Ubah di sini
            // Hapus kelas aktif dari semua link
            navLinks.forEach(link => link.classList.remove('active'));
            // Tambahkan kelas aktif ke link yang sesuai
            document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add('active');
        }
    });
});

// navbar burger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// faq 
document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');

        const panel = accordion.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});
