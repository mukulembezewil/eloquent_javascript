// TRANSFORMING ARRAYS WITH map();
// Like forEach and filter, map is a standard array method.

import { SCRIPTS } from './3_scripts.mjs';

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl');
console.log(map(rtlScripts, (s) => s.name));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let ages = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
	ages.map((age) => `Multiplied by 2 the age would be: , ${age * 2}`)
);

/*
Array.map() is a method in JS that allows you to create a new array by transforming each element of an existing array using a function. Here is a breakdown of how it works:

1. Syntax: The syntax for Array.map() is:

let newARray = array.map(callback(currentValue, index, array) {
  return element for newArray
}, thisArg);

--currentValue: The current element being processed in the array.
--index: (optional): The index of the current element being processed.
--array (optional): The array 'map' was called upon.
--thisARg (optional): A value to use as 'this' when executing the callback function.

2. Functionality: Array.map() iterates over each element of the array and applies the callback function to each element. The return value of the callback function is then added to a new array, which is returned as the result.

3. Example:*/

// Original array
let numbers = [1, 2, 3, 4, 5];

// Using map to double each number
let doubledNumbers = numbers.map(function (num) {
	return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/*
In this example, Array.map() is used to create a new array 'doubledNumbers where each element is twice the corresponding element in the original array.

Note that:
Array.map() does not mutate the original array. It creates and returns a new array.

You should always return a value from the callback function, otherwise, the element in the new array will be 'undefined'.

The original array remains unchanged after calling map();
*/

console.log('============================================');
let digits = [6, 7, 8, 9, 10];

let newArray = digits.map(function (currentValue, index, array) {
	console.log(
		`currentValue: ${currentValue}, index: ${index}, array: [${array}]`
	);
	return currentValue * index; // Multiply each element by its index
});

console.log(newArray);

/*
In this example:

`currentValue` represents the current element being processed.
`index` represents the index of the current element being processed.
`array` represents the array map() was called upon.

The function logs the currentValue, index, and array for each element being processed. Then, it multiplies each element by its index and returns the result.

In the resulting newArray, each element is the product of the original element and its index in the array.
*/

// A SIMPLE MERN stack App to utilize the map() function

/*
Explain to me without using code how, starting with data in MongoDB, I can utilize and apply the Array.map() method in a way useful to the user.
ChatGPT
Sure, let's break it down step by step:

Retrieve Data from MongoDB: First, you'd need to fetch the data from MongoDB. This could be any collection of documents that contain arrays or arrays of objects that you want to iterate over.

Transform the Data: Once you have the data, you might want to transform it in some way. This could involve filtering, sorting, or simply modifying the existing structure.

Apply Array.map(): Now comes the part where you utilize Array.map(). This method is used to iterate over an array and apply a function to each element, creating a new array with the results. So, in your case, you would use Array.map() to iterate over the array you obtained from MongoDB and apply some function to each element.

Display the Results: Finally, you'd want to present the transformed data to the user in a meaningful way. This could be through a web interface, a mobile app, or any other medium appropriate for your application.

To summarize, you'd start by fetching data from MongoDB, then you'd manipulate it as needed, use Array.map() to iterate over it and apply transformations, and finally, you'd present the results to the user. The key is to understand the structure of your data and how you want to modify it using Array.map() to make it more useful to the user.

User
Assume you are developing with the MERN stack. Provide the above in a simple but comprehensive code example using the MERN stack

Certainly! Let's walk through a simple example using the MERN stack (MongoDB, Express.js, React.js, and Node.js):

💫 Backend (Node.js with Express):
First, let's assume you have a MongoDB database set up with a collection called users.
You'll need to create a Node.js server using Express to handle API requests.

~ ~ javascript~ ~
server.js

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

💫 Database Model:
You'll need a Mongoose model for the users collection.

~ ~ javascript~ ~ 
models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hobbies: [String]
});

module.exports = mongoose.model('User', userSchema);

💫 Frontend (React.js):
In your React component, you'll fetch data from the backend API and use Array.map() to render it.

~ ~ javascript~ ~
UserList.js

import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Hobbies: {user.hobbies.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

💫 Rendering:
Finally, render the UserList component in your main application.

~ ~ javascript~ ~
App.js

import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;
To summarize, this example demonstrates how to use the MERN stack to fetch data from a MongoDB database, manipulate it using Array.map() in a React component, and render the results to the user.

*/
