/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i = 2;
while (i <= 100) {
    let x = Number.isInteger(Math.sqrt(i));
    console.log({x,i})
    if(x){
        break;
    }
    i++;
}

/**                 Find the average
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input:
The input parameter will be an array of integers, where each integer represents the mark of a subject given above.
Output:
Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.
Hints: First check if your output is in number format or string format by typeof operator.
  Sample Input:[75.25, 65, 80, 35.45, 99.50]
  Output:71.04 
  */
const arrOfMarks = [75.25, 65, 80, 35.45, 99.50]

function average(arrOfMarks) {
    if (!Array.isArray(arrOfMarks) || !isNaN(arrOfMarks) || arrOfMarks.length === 0) {
        return "Input is invalid"
    } 
    let sum = 0;
    for (let i = 0; i < arrOfMarks.length; i++) {
        sum  += arrOfMarks[i];
    }
    const averageMarks = sum/arrOfMarks.length;
    const formatAverageMarks = averageMarks.toFixed(2);
    if (typeof +formatAverageMarks === 'number') {
        return +formatAverageMarks;
    } else {
        return 'error';
    }
    const numericFormatAverageMarks = Number(formatAverageMarks)
}
const averageMark = average(arrOfMarks);
  
console.log("Average Marks:", averageMark);

/*              Find the largest number
You will be given an array of three numbers and you will have to print the largest number. Write a function findMax that will return the largest number using if-else.
Sample Input:[55,10,95]
Sample Output: 95
*/

function findMax(arr){
    if (arr.length !== 3) {
      return "Invalid input"
    }
    const [num1, num2, num3] = arr;
  
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if(num2 >= num1 && num2 >= num3){
      return num2;
    }else{
      return num3;
    }
  }
  const sampleInput = [55, 10, 95];
  const maxOutput = findMax(sampleInput);
  console.log(maxOutput);
