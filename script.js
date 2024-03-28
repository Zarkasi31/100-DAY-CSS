const tombol = document.querySelector('.bxs-plus-circle');
const layar = document.querySelector('.layar');

tombol.addEventListener('click', function(){
    layar.classList.toggle('muncul');
})