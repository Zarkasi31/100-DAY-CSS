const tombol = document.querySelector('.bxs-plus-circle');
const tombol2 = document.querySelector('.tombol-2');
const tombol3 = document.querySelector('.tombol-3');
const tombol4 = document.querySelector('.tombol-4');
const layar = document.querySelector('.layar');
const balik = document.querySelector('.x');
const foto = document.querySelector('.foto-profil');

tombol.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='foto1.jpg';

})

tombol2.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='foto2.jpg';
})

tombol3.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='foto3.jpg';
})

tombol4.addEventListener('click', function(){
    layar.classList.toggle('muncul');
    foto.src='foto4.jpg';
})

balik.addEventListener('click', function(){
    layar.classList.remove('muncul');
})