let repeaters = new Array()
for(let  number  = 0 ; number <= 100 ; number ++)
{
    if ( Math.floor(number/10) == (number % 10) && number!=0)  {
        repeaters.push(number)
    }
}
console.log("The reapeated numbers are "+repeaters);