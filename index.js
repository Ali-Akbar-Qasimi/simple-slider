let slides = document.querySelectorAll('.slides')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let counter = 0;

window.addEventListener('keypress',e => {
        console.log(e);
        if (e.keyCode = "37") {
            counter--;
            carousel();
        }
    })
window.addEventListener('keypress',e =>{
    console.log(e)
    if(e.keyCode = "39"){
        counter++
        carousel();
    }
})

next.addEventListener('click',function(){
    counter++
    carousel();
})
prev.addEventListener('click',function(){
    counter--
    carousel()
})



function carousel(){
    if(counter === slides.length - 1){
        next.style.display = 'none'
    }
    else{
        next.style.display = 'block'
    }
    if(counter >= 1){
        prev.style.visibility = "visible"
    }
    else{
        prev.style.visibility = "hidden"
    }
    slides.forEach(function (slide) {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
}
