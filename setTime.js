let lyricArray = [
    'dsafadsfadsfasdf',
    'rqwerqwerqwerqwerq',
    'l;hjklhjklhjklhkjl'
]
let ranBtn = document.getElementById('random')
let output = document.getElementById('output')
let stop = document.querySelector('#stop')

let timeOutId = 0

ranBtn.addEventListener('click', () => {

    // setTimeout(() => {
    //     let n = lyricArray.length
    //     let index = Math.floor(Math.random() * n)
    //     let lyric = lyricArray[index]
    //     output.innerHTML = lyric
    // } , 1500)

   timeOutId = setInterval(() => {
        let n = lyricArray.length
        let index = Math.floor(Math.random() * n)
        let lyric = lyricArray[index]
        output.innerHTML = lyric
    } , 1500)

    stop.addEventListener('click' , () => {
        clearInterval(timeOutId)
    })
})