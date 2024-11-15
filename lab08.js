// Q1
let Name = "Yumna";
let age = 19;
console.log(Name, age);

// Q2
let string = "Lab";
let number = 22;
let boolean = true;
let undef;
console.log(string, number, boolean, undef);

// Q3
let RollNumber = 15;
if (RollNumber > 10) {
    console.log("The RollNumber is greater than 10");
}

// Q4
let isMember = true;
if (isMember) {
    console.log("Member discount applied.");
}

// Q5
let startValue = 50;
if (startValue > 0) {
    console.log("Value is positive");
} else if (startValue < 0) {
    console.log("Value is negative");
} else {
    console.log("Value is zero");
}

// Q6
let a = 17;
let b = 8;
console.log("a is equal to b:", a == b);
console.log("a is equal to and same type as b:", a === b);
console.log("a is not equal to b:", a != b);
console.log("a is greater than b:", a > b);
console.log("a is lesser than b:", a < b);
console.log("a is greater than or equal to b:", a >= b);
console.log("a is lesser than or equal to b:", a <= b);


// Q7
let firstName = "Yumna";
let lastName = "Ali";
let Age = 19;
console.log("Hello, " + firstName + " " + lastName + ", you are " + age + " years old");

// Q8
let num = 50;
if (num > 0 && num < 100) {
    console.log("The number is within range.");
}

// Q9
let hasCar = true;
let hasLicense = true;
let hasInsurance = true;
if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}

// Q10
let num2 = 21;
if (num2 % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// Q11
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade B")
} else {
    console.log("Grade C");
}
