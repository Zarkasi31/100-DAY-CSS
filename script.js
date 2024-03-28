const tombol = document.querySelector('.bxs-plus-circle');
const layar = document.querySelector('.layar');
const balik = document.querySelector('.bx-plus-medical');

tombol.addEventListener('click', function(){
    layar.classList.toggle('muncul');
})

balik.addEventListener('click', function(){
    layar.classList.remove('muncul');
})