/*
>>>>>>>>>>>>>>> Free Drinks >>>>>>>>>>>>
    Burger more than 500tk: free Coke
    Else Coke: 30tk
*/

var burgerPrice = 400;

if (burgerPrice > 500) {
    console.log('free Coke');
} else {
    console.log('Coke 30tk')
}

/*
>>>>>>>>>>>>>>> BMI Calculator and Health Category >>>>>>>>>>>>    
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

var weight = 80;
var height = 1.55448;
var BMI = weight  / (height * height);
// console.log(BMI);

if (BMI <18.5) {
    console.log('You are underweight.')
    
} else {
    if (BMI >= 18.5 && BMI <= 24.9 ) {
        console.log('You are normal.')
    }
    else{
        if (BMI >= 25  && BMI <= 29.9 ) {
            console.log('You are overweight.')
        } else {
            console.log('You are obese.')
        }
    }   
}

/*
>>>>>>>>>>>>>>> Grade Calculator >>>>>>>>>>>>   
Create a simple JavaScript program that takes a student's score as input and returns
their corresponding grade based on the following grading scale:
1. A: 90-100
2. B: 80-89
3. C: 70-79
4. D: 60-69
5. F: 0-59
*/

let score = 101;

if (score <= 100 && score >= 90) {
    console.log('A')
} else if( score <= 89 && score >= 80) {
    console.log('B')
}else if(score <= 79 && score >= 70){
    console.log('C')
}else if(score <= 69 && score >= 60){
    console.log('D')
}else if(score <= 59 && score >= 0){
    console.log('F')
}else{
    console.log('Invalid Score.')
}

/*
>>>>>>>>>>>>>>> use nested if-else >>>>>>>>>>>>   
1. if you get more then 80 then inside your friend score.
2. If your friend get more than 80. then go for a lunch.
3. if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
4. if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
5. if your friend get less than 40, block your friend
6. if you get less than 80 go to home and sleep and act sad
*/

let myScore = 81;
let friendScore = 30;

if (myScore > 80) {
    if(friendScore > 80){
        console.log(`let's go for lunch.`)
    }else if(friendScore >= 60){
        console.log(`good luck next time`)
    }else if(friendScore >= 40){
        console.log(`friend's message unseen`)
    }else if(friendScore < 40){
        console.log(`block friend`)
    }
} else {
    console.log(`go to home and sleep and act sad`)
}

/*
>>>>>>>>>>>>>>> simple if-else & ternary operator >>>>>>>>>>>>   
1. you have two numbers in two variables, called: num1, num2
2. now declare a variable called result.
3. if num1 is bigger than num2 then result will be double of num1.
4. if not, then the value of the variable result will be the sum of num1 and num2.
*/
let num1 = 150;
let num2 = 70;
let results;
if (num1 > num2) {
    results = num1*2;   
} else {
    results = num1 + num2;
}
console.log(results);

let result = (num1 > num2) ? num1 * 2 : num1 + num2; //ternary operator
console.log(result);

/*
>>>>>>>>>>>>>>> Ticket fare Calculator >>>>>>>>>>>>   
1. Children (age < 10): free
2. Students get a 50% discount
3. Senior citizens (age >= 60) gets a 15% Discount
4. Otherwise Regular ticket fare 800 tk
only firest true return korbe
*/

let age = 9;
let isStudent =true;
let ticketPrice;

if (age < 10) {
    ticketPrice = 0; // Children free
} else if(isStudent){
    ticketPrice = 800 * (50 / 100); //Students get a 50% discount
}else if(age >= 60){
    ticketPrice = 800 * (15 / 100); // Senior citizens  gets a 15% Discount
}else{
    ticketPrice = 800; //Regular ticket fare 800 tk
}
console.log(`Ticket price: ${ticketPrice} tk`);


// let age = 40;
// let isStudent = true;

// if (age < 10) {
//     console.log("Children free");
// }

// if (isStudent) {
//     console.log("Students get a 50% discount");
// }

// if (age >= 60) {
//     console.log("Senior citizens get a 15% discount");
// }

// if (!(age < 10 || !isStudent || !age >= 60)) {
//     console.log("Regular ticket fare 800 tk");
// }

