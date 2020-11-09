// let birdImage = document.querySelector('.bird-image')
// let jsLink = document.querySelector('.js-link')
// let textInput = document.querySelector('.text-input')

// console.log(textInput.hiddenMessage)

// // classic
// // console.log(textInput.getAttribute('hidden-message'))
// // textInput.setAttribute('hidden-message','น่าเกลียด')


// // Modern
// // console.log(textInput.dataset.hiddenMessage)
// textInput.dataset.hiddenMessage = 'น่าเกลียด' 
const spoilButtons = document.querySelectorAll('.spoil-button')

function spoilClick(e){
    const messageId= e.target.dataset.messageId
    const message = document.querySelector('#'+messageId)
    message.classList.toggle('show')
}

spoilButtons.forEach((button) => {
    button.addEventListener('click' , spoilClick)
})