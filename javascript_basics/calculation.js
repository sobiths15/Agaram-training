let initialamount = 23000
let total = 0;
for( i=0;i<30;i++){
    let extraAmount = 350
    if(i==0){
        extraAmount = 0
    }
    initialamount =initialamount +extraAmount
    total = total + initialamount
    console.log(i+1,initialamount)
}
console.log(total)
profit= 1000000 - total
console.log(profit)

// let increment=350;
// let first=23000;
// let total=0;
// for(i=0;i<30;i++){
//     if(i==0){   
//         first=first+0
//     }
//     else if(i>0){
//     first=first+increment}
//     total=total+first
    
//     console.log(i+1,first)
//     profit=1000000-total 
// }
// console.log(profit)

