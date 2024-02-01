/*
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/
for (let day = 1; day <= 60; day++) {
    console.log(`"I will invest at least 6 hrs every single day for next 60 days!" ${day}`)    
}

/*
Subtask-1:
Find all the odd numbers from 61 to 100.
*/
for (let oddNumber = 61; oddNumber <= 100; oddNumber++) {
    if (oddNumber % 2 !== 0) {
        console.log(oddNumber)
    }
}
/*
Subtask-2:
Find all the even numbers from 78 to 98.
*/
for (let evenNumber = 78; evenNumber <= 98; evenNumber++) {
    if (evenNumber % 2 === 0) {
       console.log(evenNumber); 
    }    
}

/*
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
*/
const startOddNumber = 91;
const endOddNumber = 129;
let sum = 0;

for (let i = startOddNumber; i <= endOddNumber; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(`The sum of odd numbers from ${startOddNumber} to ${endOddNumber} is: ${sum}`);

/*
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
const startEvenNumber = 51;
const endEvenNumber = 85;
let total = 0;
for (let i = startEvenNumber; i <= endEvenNumber; i++) {
    if (i % 2 === 0) {
        total += i;
    } 
}
console.log(`The sum of even numbers from ${startEvenNumber} to ${endEvenNumber} is: ${total}`);

/*
Generate a multiplication table for number 9
 */
let multi = 9;
console.log(`${multi} er ghorer namota.`)
for (let i = 0; i <= 10; i++) {
    let result = multi * i;
    console.log(`${multi} * ${i} = ${result}`);
}
/*
Implement a countdown timer that counts down from 81 to 65.
*/

for (let i = 81; i >= 65; i--) {
    setTimeout(function () {
      console.log(i);
      if (i === 65) {
        console.log("Countdown complete!");
      }
    }, (81 - i) * 1000); 
  }
  