let numbers = [10, 2, 45, 6, 1, 100];
let smallest = numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]<smallest){
        smallest=numbers[i];
    }
}
console.log(smallest);