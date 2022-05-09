const btn = document.querySelector('.icon')
const nav = document.getElementById('nav')
console.log(btn);

btn.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})