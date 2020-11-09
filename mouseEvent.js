let thumbnails = document.querySelectorAll('.thumbnail-image')
let big = document.querySelector('.big-Image')

function changeImage(event) {
    big.src =  event.target.src
}

function removeImage(params) {
    big.src = ''
}
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseover',changeImage)
    thumbnail.addEventListener('mouseout',removeImage)
})