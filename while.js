/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
let times = 1;
while (times <= 60) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    times++;
}

/***
Find all the odd numbers from 61 to 100.
 */
let oddNumber = 61;
while(oddNumber <= 100){
    if (oddNumber % 2 === 0) {
        oddNumber++;
    }else{
    console.log(oddNumber);
    oddNumber++;
    }
}

/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
let evenNumber = 78;
while (evenNumber <= 98) {
    if (evenNumber % 2 === 0) {
        console.log(evenNumber);
        evenNumber++;
    } else {
        evenNumber++;
    }
}

/***

Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
let startOddNumber = 81;
sum = 0;
while (startOddNumber <= 131) {
    if(startOddNumber % 2 !== 0){
       sum += startOddNumber;
    //    console.log(sum);
       startOddNumber++;
    }else{
        startOddNumber++;
    }
}
// console.log(sum);

/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
let startEvenNumber = 206;
sumOfEvenNumber = 0;
while (startEvenNumber <= 311) {
    if(startEvenNumber % 2 === 0){
        sumOfEvenNumber += startEvenNumber;
    //    console.log(sumOfEvenNumber);
       startEvenNumber++;
    }else{
        startEvenNumber++;
    }
}
console.log(sumOfEvenNumber);

/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
 */
let multi = 5;
console.log(`${multi} er ghorer namota.`)
let i = 0;
 while(i <=10){
    let result = i * multi;
    console.log(`${i} * ${multi} = ${result}`);
    i++;
 }

/***
Implement a countdown timer that counts down from 21 to 15.
 */
let timeStart  = 21;
while(timeStart >= 15){
    console.log(timeStart);
    timeStart--;
}