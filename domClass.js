let message = document.querySelector('.message')
// message.classList.add('orange-box')
// message.classList.remove('orange-box')
message.classList.replace('orange-box','green-box')
let body = document.body
let btn = document.querySelector('.theme-btn')

btn.addEventListener('click' , () => {
    body.classList.toggle('dark-theme')
})