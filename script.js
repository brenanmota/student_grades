let student = prompt(`Enter the student's name`)
let firstTest = prompt(`Enter the score of the first test`)
let secondTest = prompt(`Enter the score of the second test`)

let average = (Number(firstTest) + Number(secondTest)) / 2

let result = average >= 7
// add .toFixed for setting the number of decimal places
average = average.toFixed(2)

if (result) {
  alert(`${student}, your average: ${average}. Congratulations, you were approved!`)
} else{
  alert(`${student}, your average: ${average}. It wasn't this time, you were disapproved!`)
}
  
