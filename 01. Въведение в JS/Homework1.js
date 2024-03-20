// zad 1
function sum(arr) {
    let numberOne = Number(arr[0])
    let numberTwo = Number(arr[1])
    let numberThree = Number(arr[2])

    let sum = numberOne + numberTwo + numberThree
    console.log("Сборът на числата е: " +sum);
}
sum(['2','3','4'])

console.log(sum(['2','3','4']));

// Task 2: Calculate DDS
function calculateDDS(prices) {
	let sum = 0;
	for(let price of prices){
		sum += Number(price);
	}
	console.log("Total sum: " + sum);

	let vat = sum * 0.2;
	console.log("VAT: " + vat.toFixed(2));

	let total = sum + vat;
	console.log("Total amount with VAT: " + total.toFixed(2));
}

calculateDDS(['1.50', '3.50', '4.80']);

// Task 3: Count letter occurrences
function countLetter([string, letter]){
	let count = 0;

	for( let char of string){
		if(char == letter){
			count++;
		}
	}

	console.log("The letter occurs " + count + " times in the string");
}

countLetter(['hello', 'l']);

// Task 4: Calculate figure area
function figureArea([width, height, Width, Height]){
	let area1 =  Number(width) * Number(height);
	let area2 = Number(Width) * Number(Height);

	let intersection = Math.min(Number(width), Number(width) * Math.min(Number(height), Number(Height)));

	let area = area1 + area2 - intersection;

	console.log("The area is: " + area);
}

figureArea(['2','4','5','3']);

// Task 5: Check leap year
function leapYear(year){
	let  condition1 = year % 4 === 0 && year % 100 != 0;
	let condition2 = year % 400 ==0;

	if(condition1 || condition2){
		console.log( year + ' is a leap year');
		return;
	}
	console.log( year + ' is not a leap year');
}
leapYear(1999);
leapYear(2024);

// Task 6: Concatenate numbers
function concatenateNumbers(last){
	let result = '';
	for(let i =1; i<= last; i++){
		result +=i;
	}
	console.log("Concatenated numbers: " + result);
}

concatenateNumbers(5);
concatenateNumbers(15);

// Task 7: Calculate distance between two points
function distance([x1, x2, y1, y2]){
	let first = Math.pow((Number(x2) - Number(x1)),2);
	let second = Math.pow((Number(y2) - Number(y1)),2);

	let result = Math.sqrt(first + second);

	console.log("The distance between the two points is: " + result.toFixed(2));
}

distance(['5', '6', '7', '8']);

// Task 8: Calculate required boxes
function boxes(bottles, quantity){
	let result = Math.ceil(bottles / quantity);

	console.log("You need " + result + " boxes");
}

boxes('10', '5');

// Task 9: Calculate triangle area
function triangle(array){
	array = array.map(Number);

	let a = array[0];
	let b = array[1];
	let c = array[2];

	let p = (a + b + c) / 2;

	let area = Math.sqrt(p * (p - a)*(p - b)*(p - c));

	console.log("The area is: " + area.toFixed(2));
}

triangle(['5','8','6']);

// Task 10: Calculate cone volume and surface area
function cone(params) {
	let radius = params[0];
	let height = params[1];

	let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

	
	let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
	let area = Math.PI * radius * (radius + slantHeight);

	console.log("Cone volume is: " + volume.toFixed(2));
	console.log("Cone surface area is: " + area.toFixed(2));
}

cone([3, 5]);

// Task 11: Check if number is even or odd
function evenOdd(number){
	if (number % 2 == 0){
		console.log(number + " is even");
	}
	else{
		console.log(number + " is odd");
	}

}

evenOdd('5');
evenOdd('2');
evenOdd('7');

// Task 12: Check if number is prime
function prime(number) {
	if (number <= 1) {
		console.log(number + " is not prime"); 
		return;
	}
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			console.log(number + " is not prime"); 
			return;
		}
	}
	console.log(number + " is prime"); 
}

prime(7);
prime(12);

// Task 13: Calculate distance between two objects
function distance(objects) {
	let V1 = objects[0] * 1000 / 3600; 
	let V2 = objects[1] * 1000 / 3600; 
	let T = objects[2]; 

	let distance1 = V1 * T; 
	let distance2 = V2 * T; 

	let distance = distance1 + distance2; 

	console.log("Distance between the objects at the end of the period: " + distance.toFixed(2) + " meters");
}

distance([30, 20, 3600]); 

// Task 14: Create object from array
function createObject(array){
	let object = {};
	object[array[0]] = array[1];
	object[array[2]] = array[3];
	object[array[4]] = array[5];

	console.log(object);
}

createObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);

// Task 15: Find largest number
function largest([a,b,c]){
	[a,b,c] - [a,b,c].map(Number);
	console.log(Math.max(a,b,c) + " is the largest");
}
largest(['1','3','5']);

// Task 16: Simple calculator
function calculator(num1, num2, operator) {
	let result;

	switch (operator) {
	case '+':
		result = num1 + num2;
		break;
	case '-':
		result = num1 - num2;
		break;
	case '*':
		result = num1 * num2;
		break;
	case '/':
		result = num1 / num2;
		break;
	default:
		return "Invalid operator";
	}

	return result;
}
console.log(calculator(5, 3, '+'));  
console.log(calculator(10, 4, '-')); 
console.log(calculator(6,  7,'*')); 

// Task 17: Convert string to uppercase
function uppercase(phrase) {
	
	let words = phrase.match(/\b\w+\b/g);
	
	let uppercaseWords = words.map(word => word.toUpperCase());
	
	let result = uppercaseWords.join(', ');

	return result;
}
let phrase = 'Hi, how are you?';
let uppercasePhrase = uppercase(phrase);
console.log(uppercasePhrase);