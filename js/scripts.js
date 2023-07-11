  /*masuk animasi scroll*/
      document.addEventListener('DOMContentLoaded', function() {
         const navLinks = document.querySelectorAll('header.navbar-container .nav-list li a');

         navLinks.forEach(navLink => {
            navLink.addEventListener('click', e => {
               e.preventDefault();

               // Hapus class active dari semua nav link
               navLinks.forEach(link => {
                  link.classList.remove('active');
               });

               // Tambahkan class active ke nav link yang diklik
               navLink.classList.add('active');

               // Scroll ke konten terkait
               const target = document.querySelector(navLink.getAttribute('href'));
               target.scrollIntoView({ behavior: 'smooth' });
            });
         });
      });
/*akhir animasi scroll*/

/*masuk visual notif form kirim*/
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-daftar');
  const buttonKirim = form.querySelector('button');

  buttonKirim.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Cek apakah form telah terisi
    const inputNama = form.querySelector('#nama');
    const inputNomorHP = form.querySelector('#nomor-hp');
    const inputEmail = form.querySelector('#email');
    
    if (inputNama.value && inputNomorHP.value && inputEmail.value) {
      // Tampilkan notifikasi "data sudah terkirim" dalam bentuk pop-up
      alert('Terima Kasih data sudah terkirim dan mohon ditunggu');

      // Kosongkan form
      inputNama.value = '';
      inputNomorHP.value = '';
      inputEmail.value = '';
    }
  });
});
/*akhir visual notif form kirim*/