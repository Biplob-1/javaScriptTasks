/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let numbers = 1;
while (numbers <= 40) {
    if (numbers % 2 !== 0) {
        numbers++;
        continue;
    }
    console.log(numbers);
    numbers++;
}

for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);  
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let number = 55;
while (number <= 85) {
    if (number % 5 !==0) {
        number++;
        continue;
    }
    console.log(number);
    number++;
}

for (let x = 55; x <= 85; x++) {
    if (x % 5 !== 0) {
        continue;
    }
    console.log(`this is for loop: ${x}`);
    
}