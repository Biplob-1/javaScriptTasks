/*
>>>>>>>>>>>>>>> Declare an array >>>>>>>>>>>>   
1. Declare an array with 5 elements containing fruits
2. console log the 3rd index element
3. change the value of the 2nd index element to jambura
4. console log the final array
*/

let fruits = ['apple', 'banana', 'mango', 'watermelon', 'orange']
console.log(fruits[3]) //output: watermelon
fruits.splice(2,1,'jambura'); //update mango to jambura
console.log(fruits); // output: [ 'apple', 'banana', 'jambura', 'watermelon', 'orange' ]

/*
>>>>>>>>>>>>>>> Add or remove elements >>>>>>>>>>>>   
1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output
*/
let destinations = ['Gaibandha', 'Lalmonirhat', 'Dhaka']
destinations.push('Rangpur'); // add element in the last
console.log(destinations); // output: [ 'Gaibandha', 'Lalmonirhat', 'Dhaka', 'Rangpur' ]
destinations.pop(); // remove element from last
console.log(destinations); // output: [ 'Gaibandha', 'Lalmonirhat', 'Dhaka' ]

/*
>>>>>>>>>>>>>>> Checking Array Membership with ‘includes’ >>>>>>>>>>>>   
1. Create an array of books containing different book.
2. Use the includes method to check if the array contains a javascript book.
3. Print a message to the console indicating whether the element is present in the array or not.
*/
let books = ['php', 'javascript', 'html', 'css']
let message = books.includes('javascript'); //includes() is case sensetive
if (message === true) {
    console.log(`The element is present in the array.`)
} else {
    console.log(`The element is not present in the array.`);
}
/*
>>>>>>>>>>>>>>> Checking if it's an Array >>>>>>>>>>>>  
1. Create different variables, each containing either an array or a non-array value.
2. Now use isArray to check if each variable is an array.
3. Print a message to the console indicating whether each variable is an array or not.
*/
let name = 'Biplob Sarkar'
let names = ['Biplob', 'Sadik', 'Shuvo', 'Limon', 'Likhon']

if (Array.isArray(name)) {
    console.log(`${name} is an array.`)
} else{
    console.log(`${name} is not an array.`)
}
if(Array.isArray(names)){
    console.log(`${names} is an array.`)
    
}else{
    console.log(`${names} is not an array.`)
}
/*
>>>>>>>>>>>>>>> Combining Arrays >>>>>>>>>>>>  
1. Create two arrays of your choice.
2. Use the concat method to combine the two arrays into a new array.
3. Print both the original arrays and the combined array using console.log().
*/
let firstName = ['Biplob', 'Limon', 'Likhon', 'Sadik']
let age = [ ,29, 31, 29, 5]
let concatArray = firstName + age; // two arrays concat change datatypes to string
let convertArray = concatArray.split(',') //split() convet string to array
console.log(firstName);
console.log(age);
console.log(concatArray);
console.log(convertArray);