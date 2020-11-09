let spoil = document.querySelector('.spoil')
let message = document.querySelector('.message')

spoil.addEventListener('click' , () => {
    message.style.display === 'none' ? message.style.display = 'block':message.style.display = 'none'
})

message.style.color = '#ffffff';
message.style.backgroundColor = 'black'
message.style.border = 'none'
message.style.fontSize = '50px'