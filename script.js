const tombol = document.querySelector('.bxs-plus-circle');
const tombol2 = document.querySelector('.tombol-2');
const tombol3 = document.querySelector('.tombol-3');
const tombol4 = document.querySelector('.tombol-4');
const layar = document.querySelector('.layar');
const balik = document.querySelector('.x');

tombol.addEventListener('click', function(){
    layar.classList.toggle('muncul');
})

tombol2.addEventListener('click', function(){
    layar.classList.toggle('muncul');
})

tombol3.addEventListener('click', function(){
    layar.classList.toggle('muncul');
})

tombol4.addEventListener('click', function(){
    layar.classList.toggle('muncul');
})

balik.addEventListener('click', function(){
    layar.classList.remove('muncul');
})