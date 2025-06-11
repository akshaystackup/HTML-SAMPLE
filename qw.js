let numbers =[
[1,2,3],
[2,3,4],
[5,6,7],
]
for(let j= 0;j<numbers.length;j++){
 let sum= 0;
    
for (let i=0;i<numbers.length;i++){
   
        sum+=numbers[i][j];
    }

console.log(sum);
}