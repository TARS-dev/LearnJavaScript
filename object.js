// let rabbit1={
//     name:'nini',
//     breed:'lion head',
//     color:'white',
//     weight:1.5
// }
// let rabbit2={
//     name:'nini',
//     breed:'lion head',
//     color:'white',
//     weight:1.5
// }

// ======================================================
// let name = 'farmer'
// let rabbit = [
//     {
//         name : 'mini',
//         breed : 'lion head',
//         color : 'white',
//         weight : 1.2
//     },
//     {
//         name : 'milky',
//         breed : 'lion head',
//         color : 'white',
//         weight : 1.2
//     },
//     {
//         name : 'lotions',
//         breed : 'lion head',
//         color : 'white',
//         weight : 1.2,
//         talk() {
//             console.log(this.name + ' : Hello')
//         }
//         ,
//         weightDetail(){
//             console.log(this.weight < 1 ? 'น้อยเกิน':'ปกติดี')
//         }
//     }
// ]
// rabbit[2].weightDetail()
// ==========================================================
function Rabbit(name,breed,color,weight){
    this.name = name
    this.breed = breed
    this.color  = color
    this.weight = weight
    this.talk = function() {
        console.log(this.name + ' : Hello man!!!')
    }
}
let rabbit1 = new Rabbit('Mini','Lion Head','white',1.5)
console.log(rabbit1)
rabbit1.talk()
