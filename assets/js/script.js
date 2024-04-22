const tombol = document.querySelector('.bxs-plus-circle');
const tombol2 = document.querySelector('.tombol-2');
const tombol3 = document.querySelector('.tombol-3');
const tombol4 = document.querySelector('.tombol-4');
const layar = document.querySelector('.layar');
const balik = document.querySelector('.x');
const foto = document.querySelector('.foto-profil');

tombol.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='/assets/img/foto1.jpg';

})

tombol2.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='/assets/img/foto2.jpg';
})

tombol3.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='/assets/img/foto3.jpg';
})

tombol4.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='/assets/img/foto4.jpg';
})

balik.addEventListener('click', function(){
    layar.classList.remove('muncul');
})

$('.menu-icon').bind('click', function () {
    $(this).toggleClass('active');
    $(this).find('div').toggleClass('not-animation');
});

const tombol5 = document.querySelector('.notif-icon');
const notif = document.querySelector('.notif');
const navbar = document.querySelector('.navbar-side');
const cari = document.querySelector('.bx-search');
const Kcari = document.querySelector('input');

tombol5.addEventListener('click', function () {
    notif.classList.toggle('active');
    navbar.classList.toggle('active');
})

cari.addEventListener('click', function () {
    Kcari.classList.toggle('muncul');
})

window.setTimeout("waktu()", 1000);

        function waktu(){

            const Days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const Months = ['January', 'February', 'March', 'April', 
                    'May', 'June', 'July', 'August', 'September', 
                    'October', 'November', 'December'];
            const fullDate = new Date();
            setTimeout("waktu()", 1000);
            const tanggal = fullDate.getDate();
            const hari = fullDate.getDay();
            const bulan = fullDate.getMonth();
            const tahun = fullDate.getFullYear();
            const jam = fullDate.getHours();
            const menit = fullDate.getMinutes();
            const detik = fullDate.getSeconds();
            const isiTanggal = document.querySelector('#tngglNow');
            const isiJam = document.querySelector('#jamNow');
            
    
            isiTanggal.innerHTML=""+Days[hari].substring(0,3)+", "+tanggal+" "+Months[bulan].substring(0,3)+" "+tahun;
            isiJam.innerHTML = jam+":"+menit;
        }

    const dropzone = document.querySelector('.dropzone');
    const filenameDisplay = document.querySelector('.filename');
    const input = document.querySelector('.input');
    const uploadBtn = document.querySelector('.upload-btn');
    const syncing = document.querySelector('.syncing');
    const done = document.querySelector('.done');
    const upload = document.querySelector('.upload');
    const line = document.querySelector('.line');

    dropzone.addEventListener("dragover", (e) => {
        dropzone.classList.add("dragover");
    });
    
    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });
    
    dropzone.addEventListener("drop", (e) => {
      dropzone.classList.remove("dragover");
    });
    
    dropzone.addEventListener("dragenter", (e) => {
      dropzone.classList.add("dragover");
    });
    
    input.addEventListener('change', (event) => {
      const files = event.target.files;
      if (files.length > 0) {
        const fileName = files[0].name;
        document.querySelector('.filename').textContent = fileName;
        upload.style.display = 'none';
      }
    });
    
    
    uploadBtn.addEventListener('click', () => {
      const files = document.querySelector('.input').files;
      if (files.length > 0) {  
        dropzone.style.transition = 'opacity 0.5s ease';
        syncing.style.transition = 'opacity 0.5s ease';
        filenameDisplay.style.opacity = '0';
        syncing.style.opacity = '0.5';
        line.classList.add('active');
        uploadBtn.textContent = 'Uploading...';
    
        setTimeout(() => {
                done.style.transition = 'opacity 1s ease';
                syncing.style.transition = 'opacity 0.5s ease';
                syncing.style.opacity = '0';
                done.style.opacity = '1';
                uploadBtn.textContent = 'Done!';
                input.value = ''; 
        }, 5000); 
      }
    });

    const satu = document.querySelector('.lingkaran-1');
    const dua = document.querySelector('.lingkaran-2');
    const tiga = document.querySelector('.lingkaran-3');
   const jangan = document.querySelector('.isi-19');
   const back1 = document.querySelector('.back-1');
   const back2 = document.querySelector('.back-2');
   const back3 = document.querySelector('.back-3');

    satu.addEventListener('click', function () {
      
      jangan.classList.add('pindah-1');
      jangan.classList.remove('pindah-2');
      jangan.classList.remove('pindah-3');

      back2.classList.remove('geser-2')
      back1.classList.remove('geser-1')
      back2.classList.remove('geser-3')
      back3.classList.remove('geser-4')
      back3.classList.remove('geser-5')
      // dua.classList.toggle('active');
  })
    dua.addEventListener('click', function () {
      
      jangan.classList.remove('pindah-1');
      jangan.classList.add('pindah-2');
      jangan.classList.remove('pindah-3');


      back1.classList.add('geser-1')
      back2.classList.add('geser-2')
      back2.classList.remove('geser-3')
      back3.classList.remove('geser-4')
      back3.classList.add('geser-5')

      // dua.classList.toggle('active');
  })
    tiga.addEventListener('click', function () {
      
      jangan.classList.remove('pindah-1');
      jangan.classList.remove('pindah-2');
      jangan.classList.add('pindah-3');
      back3.classList.add('geser-4');
      back3.classList.remove('geser-5');
      back2.classList.remove('geser-2');
      back2.classList.add('geser-3');

      // dua.classList.toggle('active');
  })