let ans = document.querySelectorAll('.answer')
let er = document.querySelector('.error-message')
let form = document.querySelector('.form')

function check(e) {
    let tooLong = false
    ans.forEach((answ) => {
        if(answ.value.length > 20){
            tooLong=true
        }
    })
    if(tooLong){
        er.style.display = 'block'
        er.style.color = 'gold'
        e.preventDefault()
    }
}

// ans.forEach((anss) => {
//     anss.addEventListener('input' , check)
// })
form.addEventListener('submit',check)