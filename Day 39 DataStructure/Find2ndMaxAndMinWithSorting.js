let numArray = new Array()
for(let count = 0 ; count <10 ; count++)
{
    let randomNumber =(Math.floor(Math.random() * 100) % 900) + 100
    numArray.push(randomNumber)
}
console.log("Original Array "+numArray);
numArray.sort()
console.log("Sorted Array "+numArray);
console.log(`The 2nd minimum value is ${numArray[1]}`);
console.log(`The 2nd maximum value is ${numArray[8]}`);