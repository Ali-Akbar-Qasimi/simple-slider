let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let imageContainer = document.querySelector('.images')

for(let i = 1; i <= 5 ; i++){
    console.log(i)
    imageContainer.innerHTML += `
        <div class="slides">
            <img src="images/image-${i}.png" alt="image of tile">
        </div>
    `
}

let slides = document.querySelectorAll('.slides')

let counter = 0;

next.addEventListener('click',function(){
    counter++
    carousel();
})

prev.addEventListener('click',function(){
    counter--
    carousel()
})

prev.disabled = true
function carousel(){
    console.log(counter)
    console.log('fasd')
    if(counter >= 4){
        next.classList.add('disabled')
        prev.disabled = false
    }
    else{
        next.classList.remove('disabled')
        prev.disabled = false
    }
    if(counter >= 1){
        prev.disabled = false
        next.disabled = false
    }
    else{
        prev.disabled = true
        next.disabled = false
    }
    slides.forEach(slide=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}