let slides = document.querySelectorAll('.slides')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let counter = 0;

window.addEventListener('keypress',e =>{
    console.log(e)
    if(e.keyCode = "37"){
        counter--
        coursel();
    }
})
window.addEventListener('keypress',e =>{
    console.log(e)
    if(e.keyCode = "39"){
        counter++
        coursel();
    }
})

next.addEventListener('click',function(){
    counter++
    coursel();
})
prev.addEventListener('click',function(){
    counter--
    coursel()
})



function coursel(){
    if(counter === slides.length - 1){
        next.style.display = 'none'
    }
    else{
        next.style.display = 'block'
    }
    if(counter >= 1){
        prev.style.display = "block"
    }
    else{
        prev.style.display = "none"
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter*100}%)`
    });
}
