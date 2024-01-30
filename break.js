/*          CENTURY
Write a while loop 1 to 200. Use break to exit the loop once you find 100.
*/
let count = 1;
while (count <= 200) {
    // console.log(count);

    if (count === 100) {
        // console.log(`found 100, now exit the while loop.`)
        break;
    }

    count++;
}
// Write a for loop 1 to 200. Use break to exit the loop once you find 100.
for (let i = 1; i <= 200; i++) {
    // console.log(i);

    if (i === 100) {
        console.log(`found 100, now exit the for loop.`)
        break;
    }
    
}

/*          sum upto 100
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let  currentNumber = 1;
let sum = 0;
while (true) {
    console.log(currentNumber);
    sum = sum + currentNumber;

    if (sum >= 100) {
        console.log(`The sum is ${sum}, so that stop the loop.`);
        break;
    }
    currentNumber++;

}
// Write a for loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

total = 0;

for (let number = 1; true; number++) {
    
    console.log(number);
    total = total + number;

    if (total >= 100) {
        console.log(`The sum is ${total}, so that stop the loop.`)
        break;
    } 
}

/*          square break
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let i = 1;

while (i <= 100) {
    if (i * i === Math.pow(i, 2)) { // Check if i is a square number
        console.log(`The first square number encountered is ${i}`);
        break;
    } else {
        console.log(`Current number: ${i}`);
        i++;
    }
}

for (let i = 2; i <= 100; i++) {
    if (i * i === Math.pow(i, 2)) { // Check if i is a square number
        console.log(`The first square number encountered is ${i}`);
        break;
    } else {
        console.log(`Current number: ${i}`);
    }
}

