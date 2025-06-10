
// }
// let N=5;
// let i=1;
// while(i<=10){
//     console.log(`${N}/${i}=${N/i}`);
//     i++
// }
// let numbers=[12,85,36,47,85]
// let largest= 0;
// for(let i=0;i<numbers.length;i++){
// if(numbers[i]>largest){
//     largest=numbers[i]

// }
// }

//     console.log ("largest number is"+ " "+  largest);
// let number =[2,5,6,7,9];
// let smallest =number[0];
// for (let i =1; i<number.length;i++){
//     if(number[i]<smallest){
//         smallest=number[i]
//     }
// }
// console.log(smallest);
// let numbers=[2,3,5,8,6,7];
// let largest= numbers[0];
// let Slargest=-1;
// for(let i=1;i<numbers.length;i++){
//     if(numbers[i]>largest){
//         Slargest=largest;
//         largest=numbers[i];
//       }
//         else if (numbers[i]>Slargest && numbers[i] != largest){
    
//         Slargest=numbers[i]
    
// }
// }
// console.log(Slargest);
// let numbers =[1,5,6,3,8,4,9];
// let largest =numbers[0];
// let Slargest =-1;
// for (let i=1;i<numbers.length;i++){
//     if(numbers[i]>largest){
//     Slargest=largest;
//     largest=numbers[i];
// }
// else if (numbers[i]>Slargest&&numbers[i]!=largest){

// }
// }
// console.log(Slargest);
// let numbers=[10,11,12,13,14,15]
// for(let i=numbers.length;i>=0;i--){
//     console.log(numbers[i]);
// }
// function findFrequency(arr, element) {
//     let frequency = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             frequency++;
//         }
//     }
//     return frequency;
// }

// Example usage:
// let numbers=[1,2,1,2,4,2,4,5,4,1,4,1,25,1,4]
// let elementsToFind=4;
// let frequency=0;
// for(let i=0; i<numbers.length;i++){
// if(numbers[i]===elementsToFind){
//     frequency++;
// }
// }
// console.log(`The frequency of${elementsToFind}is ${frequency}`);
let array =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for(let j=0;j<array.length;j++){
     let Sum =0;
for(let i=0;i<array.length;i++){
   
    

    
Sum+=array[i][j];
    }

console.log(Sum);
}

