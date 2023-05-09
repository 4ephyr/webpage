let search = document.getElementById('search')
let box = document.getElementById('input-box')

box.addEventListener('focus',()=>{
    search.style.boxShadow = '0px 0.36rem 2.5rem 5px rgba(0, 0, 0, .125)'
})
box.addEventListener('blur',()=>{
    search.style.boxShadow = 'none'
})
