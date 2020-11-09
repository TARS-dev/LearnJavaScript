// let fruit = ['apple','Banana','Carrot'];
// console.log(fruit);
// fruit.push('Watermelon')
// console.log(fruit);
// fruit.splice(1,0,'Mango')
// console.log(fruit);
// fruit.splice(2,1)
// console.log(fruit);
// console.log(fruit.length)
// ======================================


// let scores = [82,75,48,64,36,100]
// let passedCount= 0;
// scores.forEach((score)=>{
//     if(score>=50) passedCount++;
// })
// console.log("We have "+passedCount)
// ====================================


// ************Map**********************
// let scores = [82,75,48,64,36,100]
// let passFailScore = scores.map((score)=>{
//     if(score >= 50){
//         return 'passed';
//     }
//     return 'Failed'
// })
// console.log(scores)
// console.log(passFailScore)
// =====================================


// **********filter*********************
// let scores = [82,75,48,64,36,100]
// let passedScores = scores.filter((score) => {
//     return score >= 50;
// })
// console.log(scores)
// console.log(passedScores)
// ====================================


// *************reduce*****************
// let scores = [82,75,48,64,36,100]
// let sumScore = scores.reduce((sum,score) => {
//     return sum + score;
// })
// console.log(scores)
// console.log(sumScore)
// ===================================

// *************Find******************
// let scores = [82,75,48,64,36,100]
// // return value
// // let findScore = scores.find((score) => {
// //     return score < 50
// // })
// let findScore = scores.findIndex((score) => {
//     return score < 50
// })

// console.log(findScore)
// ==================================

// ***************every**************
// let scores = [82,75,48,64,36,100]
// let ev = scores.every((score)=>{
//     return score>=50;
// })
// console.log(ev)

// ==================================


// ***************Some*******************
let scores = [82,75,48,64,36,100]
let some = scores.some((score) => {
    return score>=50;
})
console.log(some)