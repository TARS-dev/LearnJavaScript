let imageIndex = 0
let imageLinks = ['rabbit.jpg' , 'panda.jpg' , 'bird.jpg']
let image = document.querySelector('.image')

function prevImage() {
    if(imageIndex > 0){
        imageIndex--
        image.src = imageLinks[imageIndex]        
    }
}

function nextImage() {
    if(imageIndex < imageLinks.length - 1){
        console.log(imageIndex)
        imageIndex++
        image.src = imageLinks[imageIndex]
    }
}

function keyUp(e) {
    if(e.key === 'ArrowLeft'){
        prevImage()

    }else if(e.key ==='ArrowRight'){
        nextImage()
    }
}

document.addEventListener('keyup' , keyUp)