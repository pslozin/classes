// Write your code below this line.
const luckyNumbers = (number) => {

    let randomArray = []
if (number < 0 || number > 10)
console.log("Wrong Number")

for(i = 0; i < number; i++ )
{
    let randomNumber = Math.random() * number
    randomNumber = Math.round(randomNumber)
if (randomArray.includes(randomNumber))
{
    randomNumber = Math.random() * number
    randomNumber = Math.round(randomNumber)
}
    else 
    {
    randomArray.push(randomNumber)
    }
}

return randomArray
}

console.log(luckyNumbers(8))
