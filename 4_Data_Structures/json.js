/*
    ♋ JSON

JSON stands for JavaScript Object Notation. It's a lightweight data interchange format that is easy for humans to read and write, and also easy for machines to parse and generate.

JSON is often used to transmit data between a server and a web application as it's a text-based format and is language-independent. It's important in web development because it's easy for both computers and humans to understand, making it a popular choice for storing and exchanging data.

Here are some key points about JSON:

1. **Format**: JSON is a text format that consists of key-value pairs. The data is structured and easy to read.

2. **Data Types**: JSON supports several data types, including:
  - Strings: A sequence of characters enclosed in double quotes (`"Hello World"`).
  - Numbers: Integers or floating-point numbers (`42`, `3.14`).
  - Booleans: `true` or `false`.
  - Arrays: Ordered lists of values enclosed in square brackets (`[1, 2, 3]`).
  - Objects: Unordered collections of key-value pairs enclosed in curly braces (`{"key": "value"}`).
  - null: Represents an empty value (`null`).

3. **Example**:
  Here's an example of a simple JSON object:
*/

/* json example below:

  {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "hiking"],
    "address": {
      "city": "New York",
      "country": "USA"
    },
    "isEmployed": null
  }
*/

/*
4. **Syntax Rules**:
  - Keys and strings must be enclosed in double quotes.
  - Values can be strings, numbers, objects, arrays, booleans, or null.
  - Data is organized using key-value pairs separated by a colon (`:`).
  - Multiple key-value pairs are separated by commas (`,`).
  - Curly braces `{}` define objects, and square brackets `[]` define arrays.

5. **Usage**:
  - In web development, JSON is often used in APIs (Application Programming Interfaces) to send and receive data between a server and a client (like a web browser or mobile app).
  - Many programming languages have built-in functions or libraries to parse JSON strings into data structures and vice versa.

6. **Parsing JSON**:
  - To work with JSON in a programming language, you can parse (decode) a JSON string into objects or arrays that the language can manipulate.
  - Conversely, you can stringify (encode) an object or array in your programming language into a JSON string.

Here's a simple example in JavaScript showing how you might work with JSON:
*/

// JSON string
var jsonString = '{"name": "John Doe", "age": 30, "isStudent": false}';

// Parsing JSON string to an object
var parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Output: John Doe

console.log('\n+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// Creating a JavaScript object
var person = {
	name: 'Jane Smith',
	age: 25,
	isStudent: true,
};

// Converting JavaScript object to JSON string
var jsonFromObject = JSON.stringify(person);
console.log(jsonFromObject); // Output: {"name":"Jane Smith","age":25,"isStudent":true}
console.log('\n+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// JSON's simplicity and versatility make it a widely used data format in modern web development and beyond. It's a fundamental skill for any developer working with web APIs or data exchange between different systems.

// When dealing with JSON data in programming languages, the JSON text is typically parsed into an object or some other appropriate data structure provided by the programming language.

//  JSON data can be parsed into an array if the JSON structure represents an array.

// JSON can contain an array at its root level or nested within an object. When the JSON data is an array, the parsing method will return an array in the programming language.

// Here's an example in JavaScript:

// JSON array string
var jsonArrayString =
	'[{"name": "John Doe", "age": 30}, {"name": "Jane Smith", "age": 25}]';

// Parsing JSON array string into a JavaScript array
var parsedArray = JSON.parse(jsonArrayString);
console.log(parsedArray[0].name); // Output: John Doe
console.log('\n+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');
console.log(parsedArray[1].age); // Output: 25
console.log('\n+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');
console.log(parsedArray);

/*
In this example, jsonArrayString contains JSON data representing an array of objects. When parsed using JSON.parse(), it returns a JavaScript array (parsedArray) containing objects.

Remember, the key point is that the JSON structure being parsed must represent an array at its root level or at the appropriate nesting level to be parsed as an array in the programming language.
*/

/*
Why is it called JavaScript Object Notation?

JSON stands for JavaScript Object Notation because it was derived from JavaScript's object literal notation. Douglas Crockford originally introduced JSON. He noticed that JavaScript's syntax for creating objects with key-value pairs was both easy to use and human-readable.

JSON's structure and syntax closely resemble JavaScript's object literal notation, which is why it's named JavaScript Object Notation. However, despite the name, JSON is a LANGUAGE-INDEPENDENT data interchange format. It's widely used in various programming languages beyond JavaScript due to its simplicity, ease of use, and readability.

While JSON shares similarities with JavaScript's object literal notation, it has become a popular choice for transmitting and storing data across different programming languages and platforms due to its lightweight and easy-to-understand nature.
*/
