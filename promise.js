function inputPromise (title, delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const numberInput = Number(prompt(title))
            if(isNaN(numberInput)){
                reject(new Error('ไม่ได้กินผมหรอก'))
                return
            }
            resolve(numberInput)
        },delay)
    })
}
let width = 0 
let lenght = 0
let height = 0

inputPromise('ความกว้าง',1000)
.then((result)=>{
    width = result
    return inputPromise('ความยาว',1500)
})
.then((result)=>{
    lenght = result
    return inputPromise('ความสูง',2000)
})
.then((result)=>{
    height = result
    setTimeout(() => {
        var browny = width * lenght * height
        alert(browny)    
    }, 3000);
})
.catch((error) => {
    alert(error.message)
})