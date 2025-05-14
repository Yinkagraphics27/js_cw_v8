# JavaScript Loops: For Loop, forEach, and map

## Table of Contents

1. [Introduction](#introduction)
2. [The For Loop](#for-loop)
   - [Syntax and Structure](#for-loop-syntax)
   - [How For Loops Work](#how-for-loops-work)
   - [For Loop Examples](#for-loop-examples)
3. [The forEach Method](#foreach-method)
   - [Syntax and Structure](#foreach-syntax)
   - [How forEach Works](#how-foreach-works)
   - [forEach Examples](#foreach-examples)
4. [The map Method](#map-method)
   - [Syntax and Structure](#map-syntax)
   - [How map Works](#how-map-works)
   - [map Examples](#map-examples)
5. [Comparing For Loop, forEach, and map](#comparing-loops)
6. [Simple Projects](#simple-projects)
   - [Project 1: Number Analyzer](#project-1)
   - [Project 2: Shopping Cart](#project-2)
   - [Project 3: Data Transformer](#project-3)
7. [Practice Exercises](#practice-exercises)

## Introduction <a name="introduction"></a>

Loops are like repeating tasks in programming. Just as you might repeat a daily chore like brushing your teeth every morning, loops let your program repeat actions. In JavaScript, we'll look at three types of loops: the classic `for` loop, the `forEach` method, and the `map` method. Each has its own special uses!

## The For Loop <a name="for-loop"></a>

### Syntax and Structure <a name="for-loop-syntax"></a>

The `for` loop is like a recipe for repetition:

```javascript
// Here's what a for loop looks like:
for (let counter = startingValue; counter <= endingValue; howToChangeCounter) {
  // The code in here runs over and over!
}
```

Breaking it down:

- **let counter = startingValue**: This sets up a counter (usually named `i`) at the beginning
- **counter <= endingValue**: The loop keeps going as long as this is true
- **howToChangeCounter**: How to update the counter after each round (usually add 1)

### How For Loops Work <a name="how-for-loops-work"></a>

Think of a for loop like controlling a toy robot:

1. First, you give the robot a starting number
2. Before each step, the robot checks if it should continue
3. The robot performs the task inside the loop
4. After finishing, the robot updates its number
5. Steps 2-4 repeat until the robot decides to stop

### For Loop Examples <a name="for-loop-examples"></a>

**Example 1: Counting from 1 to 5**

```javascript
// This will count from 1 to 5
for (let i = 1; i <= 5; i = i + 1) {
  // i = i + 1 is the same as i++, which means "add 1 to i"
  console.log("The current number is: " + i);
}

// The output will be:
// The current number is: 1
// The current number is: 2
// The current number is: 3
// The current number is: 4
// The current number is: 5
```

**Example 2: Adding up numbers from 1 to 10**

```javascript
// Let's add up all numbers from 1 to 10
let total = 0; // Start with nothing

for (let i = 1; i <= 10; i = i + 1) {
  // total = total + i means "add the current number to our running total"
  total = total + i;
  console.log("After adding " + i + ", the total is now: " + total);
}

console.log("The final total is: " + total);

// Output will show the running total, ending with 55
```

**Example 3: Going through a list of items**

```javascript
// Here's a list (array) of fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Let's print each fruit with its position number
for (let i = 0; i < fruits.length; i = i + 1) {
  // fruits.length tells us how many items are in the list
  // Note: We start from 0, as lists in JavaScript count from 0
  // i+1 gives us the human-friendly position (starting from 1)
  console.log("Fruit #" + (i + 1) + " is: " + fruits[i]);
}

// Output:
// Fruit #1 is: Apple
// Fruit #2 is: Banana
// Fruit #3 is: Cherry
// Fruit #4 is: Date
// Fruit #5 is: Elderberry
```

**Example 4: Making a times table**

```javascript
// Let's create a multiplication table for the number 5
const number = 5;
console.log("Multiplication table for the number " + number + ":");

for (let i = 1; i <= 10; i = i + 1) {
  // Calculate the result for this row
  const result = number * i;

  // Print it in a nice format
  console.log(number + " × " + i + " = " + result);
}

// Output:
// Multiplication table for the number 5:
// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ... and so on up to 10
```

## The forEach Method <a name="foreach-method"></a>

### Syntax and Structure <a name="foreach-syntax"></a>

The `forEach` method is a simpler way to go through a list (array), one item at a time:

```javascript
// forEach works only on arrays (lists)
myArray.forEach(function (currentItem, positionNumber, entireArray) {
  // Code to run for each item
});
```

What the parameters mean (all are optional):

- **currentItem**: The item we're currently looking at
- **positionNumber**: Where this item is in the list (starting from 0)
- **entireArray**: The whole list itself

### How forEach Works <a name="how-foreach-works"></a>

Think of `forEach` like giving a task to a helper:

1. You give your helper a list and instructions for what to do with each item
2. Your helper goes through the list one by one, following your instructions
3. Your helper handles each item exactly once, from beginning to end
4. When finished, your helper just says "done" (returns `undefined`)

### forEach Examples <a name="foreach-examples"></a>

**Example 1: Basic usage**

```javascript
// Create a list of fruits
const fruits = ["Apple", "Banana", "Cherry"];

// Print each fruit
fruits.forEach(function (fruit) {
  console.log("I like eating " + fruit);
});

// Output:
// I like eating Apple
// I like eating Banana
// I like eating Cherry
```

**Example 2: Using arrow function (=>) and position numbers**

```javascript
// Create a list of numbers
const numbers = [10, 20, 30, 40, 50];

// The arrow => is a shorter way to write function()
// This prints each number along with its position
numbers.forEach((number, position) => {
  console.log("The number at position " + position + " is: " + number);
});

// Output:
// The number at position 0 is: 10
// The number at position 1 is: 20
// The number at position 2 is: 30
// The number at position 3 is: 40
// The number at position 4 is: 50
```

**Example 3: Calculate total price in a shopping cart**

```javascript
// Here's a shopping cart with items and prices
const cart = [
  { item: "Book", price: 20 }, // An object with item name and price
  { item: "Pen", price: 5 },
  { item: "Notebook", price: 15 },
];

// Let's calculate the total price
let totalPrice = 0;

// Go through each product and add its price to the total
cart.forEach((product) => {
  console.log("Adding " + product.item + " price: $" + product.price);
  totalPrice = totalPrice + product.price;
});

console.log("Your total is: $" + totalPrice);

// Output:
// Adding Book price: $20
// Adding Pen price: $5
// Adding Notebook price: $15
// Your total is: $40
```

## The map Method <a name="map-method"></a>

### Syntax and Structure <a name="map-syntax"></a>

The `map` method transforms a list into a new list by applying changes to each item:

```javascript
// map creates a brand new array from your original array
const newArray = myArray.map(function (
  currentItem,
  positionNumber,
  entireArray
) {
  // Do something with the item
  return transformedItem; // This goes into the new array
});
```

Parameters (all optional):

- **currentItem**: The current item being processed
- **positionNumber**: The position of this item (starting from 0)
- **entireArray**: The entire original array

### How map Works <a name="how-map-works"></a>

Think of `map` like a factory assembly line:

1. Items from your original list go in one by one
2. Each item gets transformed according to your instructions
3. The transformed items come out as a brand new list
4. Your original list stays unchanged
5. The new list always has the same number of items as the original

### map Examples <a name="map-examples"></a>

**Example 1: Doubling numbers**

```javascript
// Start with a list of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a new list where each number is doubled
const doubledNumbers = numbers.map((number) => {
  return number * 2; // Double each number
});

// This can be shortened to:
// const doubledNumbers = numbers.map(number => number * 2);

console.log("Original numbers: " + numbers);
console.log("Doubled numbers: " + doubledNumbers);

// Output:
// Original numbers: 1,2,3,4,5
// Doubled numbers: 2,4,6,8,10
```

**Example 2: Converting temperatures**

```javascript
// Temperatures in Celsius
const celsiusTemps = [0, 15, 25, 30, 35];

// Convert each to Fahrenheit using the formula: F = (C × 9/5) + 32
const fahrenheitTemps = celsiusTemps.map((celsius) => {
  // First multiply by 9, then divide by 5, then add 32
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
});

// Print both lists to compare
console.log("Celsius: " + celsiusTemps);
console.log("Fahrenheit: " + fahrenheitTemps);

// Output:
// Celsius: 0,15,25,30,35
// Fahrenheit: 32,59,77,86,95
```

**Example 3: Getting specific information from objects**

```javascript
// A list of user objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// Create a new list containing just the names
const names = users.map((user) => {
  return user.name; // Extract only the name property
});

console.log("All user names: " + names);

// Output:
// All user names: Alice,Bob,Charlie
```

**Example 4: Formatting data for display**

```javascript
// List of products
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

// Create a nicely formatted list for display
const productLabels = products.map((product) => {
  // Create a string in the format "Name: $Price"
  return product.name + ": $" + product.price;
});

// Print the formatted list
console.log("Products for sale:");
productLabels.forEach((label) => {
  console.log("- " + label);
});

// Output:
// Products for sale:
// - Laptop: $1000
// - Phone: $500
// - Tablet: $300
```

## Comparing For Loop, forEach, and map <a name="comparing-loops"></a>

| Feature               | For Loop                   | forEach                           | map                                      |
| --------------------- | -------------------------- | --------------------------------- | ---------------------------------------- |
| What it does          | General purpose repetition | Runs code for each item in a list | Creates a new list by transforming items |
| What it returns       | Nothing special            | Nothing (undefined)               | A brand new array                        |
| Can stop early        | Yes (with `break`)         | No                                | No                                       |
| Changes original list | Only if you write code to  | Only if you write code to         | No                                       |
| Can skip items        | Yes (with `continue`)      | No                                | No                                       |
| Works with            | Anything countable         | Only arrays                       | Only arrays                              |

**When to use each:**

- **For Loop**: Use when you need full control, might need to stop early, or aren't working with a list
- **forEach**: Use when you want to do something with each item in a list but don't need a new list
- **map**: Use when you want to transform each item in a list to create a new list

## Simple Projects <a name="simple-projects"></a>

### Project 1: Number Analyzer <a name="project-1"></a>

This project uses all three loop types to analyze a set of numbers.

```javascript
// Number Analyzer - Using for, forEach, and map

function numberAnalyzer() {
  // Ask the user for some numbers
  const userInput = prompt(
    "Please enter some numbers separated by commas (e.g., 5,10,15,20):"
  );

  // Split the input into an array and convert strings to numbers
  const numbers = userInput.split(",").map((inputNumber) => {
    // Remove any spaces and convert to a number
    return Number(inputNumber.trim());
  });

  // 1. Use for loop to calculate the sum of all numbers
  let sum = 0; // Start with zero
  for (let i = 0; i < numbers.length; i++) {
    // Add each number to our sum
    sum = sum + numbers[i];
  }

  // 2. Use forEach to find the smallest and largest numbers
  let smallest = numbers[0]; // Assume first number is smallest
  let largest = numbers[0]; // Assume first number is largest

  numbers.forEach((number) => {
    // Check if this number is smaller than our current smallest
    if (number < smallest) {
      smallest = number;
    }

    // Check if this number is larger than our current largest
    if (number > largest) {
      largest = number;
    }
  });

  // 3. Use map to create a new array with squared values
  const squaredNumbers = numbers.map((number) => {
    return number * number; // Square each number
  });

  // Calculate the average (mean)
  const average = sum / numbers.length;

  // Show all the results
  alert(`
    Here's an analysis of your numbers:
    
    The numbers you entered: ${numbers.join(", ")}
    
    Sum (total): ${sum}
    Average: ${average.toFixed(2)}
    Smallest number: ${smallest}
    Largest number: ${largest}
    Squared values: ${squaredNumbers.join(", ")}
  `);
}

// Run the analyzer function
numberAnalyzer();
```

### Project 2: Shopping Cart <a name="project-2"></a>

This project simulates a simple shopping cart with all three loop types.

```javascript
// Shopping Cart - Using for, forEach, and map

// Our store inventory - these objects contain the product info
const products = [
  { id: 1, name: "Laptop", price: 1000, inStock: true },
  { id: 2, name: "Phone", price: 500, inStock: true },
  { id: 3, name: "Tablet", price: 300, inStock: false }, // Out of stock!
  { id: 4, name: "Headphones", price: 100, inStock: true },
  { id: 5, name: "Keyboard", price: 50, inStock: true },
];

function shoppingCart() {
  // 1. Use for loop to create a list of available products
  let availableProductsList = "Available Products:\n";

  for (let i = 0; i < products.length; i++) {
    // Only show products that are in stock
    if (products[i].inStock === true) {
      availableProductsList += `${products[i].id}. ${products[i].name} - $${products[i].price}\n`;
    }
  }

  // Show available products to the user
  alert(availableProductsList);

  // Ask user which products they want to buy
  const selectedIds = prompt(
    "Enter the product IDs you want to buy (separated by commas):"
  ).split(",");

  // Create an empty shopping cart
  const cart = [];

  // 2. Use forEach to add selected products to the cart
  selectedIds.forEach((id) => {
    // Convert string ID to a number and remove any spaces
    const numericId = Number(id.trim());

    // Look for a product with this ID
    const foundProduct = products.find((product) => product.id === numericId);

    // If we found a matching product and it's in stock, add it to the cart
    if (foundProduct && foundProduct.inStock) {
      cart.push(foundProduct);
    }
  });

  // 3. Use map to format the cart items for display
  const formattedCartItems = cart.map((item) => {
    return `${item.name}: $${item.price}`;
  });

  // Calculate the total price
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });

  // Show the cart summary
  alert(`
    Your Shopping Cart:
    ${formattedCartItems.join("\n")}
    
    Total Price: $${totalPrice}
  `);
}

// Run the shopping cart function
shoppingCart();
```

### Project 3: Data Transformer <a name="project-3"></a>

This project transforms student data using all three loop types.

```javascript
// Data Transformer - Using for, forEach, and map

// Sample data: Student test scores
const studentData = [
  { name: "Alice", scores: [85, 90, 92] }, // Alice's 3 test scores
  { name: "Bob", scores: [75, 80, 85] }, // Bob's 3 test scores
  { name: "Charlie", scores: [90, 95, 85] }, // Charlie's 3 test scores
  { name: "Diana", scores: [65, 70, 75] }, // Diana's 3 test scores
];

function dataTransformer() {
  // 1. Use map to calculate the average score for each student
  const studentsWithAverages = studentData.map((student) => {
    // For each student, calculate their average score using a for loop
    let totalScore = 0;

    // Add up all the scores for this student
    for (let i = 0; i < student.scores.length; i++) {
      totalScore = totalScore + student.scores[i];
    }

    // Calculate the average by dividing by the number of scores
    const averageScore = totalScore / student.scores.length;

    // Return a new object that includes the average
    return {
      name: student.name,
      scores: student.scores,
      average: averageScore.toFixed(2), // Format to 2 decimal places
    };
  });

  // 2. Use forEach to group students by performance
  const excellentStudents = []; // Average 90 or above
  const goodStudents = []; // Average 75-89
  const needsHelpStudents = []; // Average below 75

  studentsWithAverages.forEach((student) => {
    // Convert the average back to a number
    const averageScore = parseFloat(student.average);

    // Put the student in the right category
    if (averageScore >= 90) {
      excellentStudents.push(student);
    } else if (averageScore >= 75) {
      goodStudents.push(student);
    } else {
      needsHelpStudents.push(student);
    }
  });

  // 3. Create a report using for loops
  let report = "Student Performance Report:\n\n";

  // Add excellent students to the report
  report += "Excellent Students (90+):\n";
  for (let i = 0; i < excellentStudents.length; i++) {
    report += `${excellentStudents[i].name}: ${excellentStudents[i].average}\n`;
  }

  // Add good students to the report
  report += "\nGood Students (75-89):\n";
  for (let i = 0; i < goodStudents.length; i++) {
    report += `${goodStudents[i].name}: ${goodStudents[i].average}\n`;
  }

  // Add needs help students to the report
  report += "\nNeeds Improvement (below 75):\n";
  for (let i = 0; i < needsHelpStudents.length; i++) {
    report += `${needsHelpStudents[i].name}: ${needsHelpStudents[i].average}\n`;
  }

  // Show the final report
  alert(report);
}

// Run the data transformer function
dataTransformer();
```

## Practice Exercises <a name="practice-exercises"></a>

Here are some exercises you can try to practice each loop type:

### For Loop Exercises

1. Write a for loop that prints all even numbers from 2 to 20
2. Create a for loop that counts down from 10 to 1, then prints "Blast off!"
3. Use a for loop to calculate the factorial of a number (e.g., 5! = 5×4×3×2×1)

### forEach Exercises

1. Create an array of your favorite colors and use forEach to print each with a message like "I love [color]!"
2. Make an array of words and use forEach to count how many words have more than 5 letters
3. Create an array of test scores and use forEach to calculate the average score

### map Exercises

1. Convert an array of Fahrenheit temperatures to Celsius using the formula C = (F - 32) × 5/9
2. Transform an array of names into a new array where each name is in ALL CAPS
3. Create an array of numbers and use map to create a new array where odd numbers are doubled and even numbers stay the same

Happy coding!
