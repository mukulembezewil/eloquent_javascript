// STRINGS AND THEIR PROPERTIES

// ♋ slice()

console.log('coconut'.slice(4, 7));

// ♋ indexOf()
console.log('coconut'.indexOf('u'));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

// ♋ trim()

// removes whitespaces (spaces, newlines, tabs and similar characters) from the start and end of a string.

let thiString = ' very ';
console.log(`We are ${thiString.trim()} cool.`);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ padStart()

// Takes the desired length and padding character as arguments. Used to pad the current string with another string until the resulting string reaches a given length.

let num = 62;

console.log(String(num).padStart(5, '0')); // String(num) converts the number to a string and then the string method padStart() is called on the resulting string
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ padEnd()
console.log(String(num).padEnd(5, '0')); // applies padding to end (right) of the string.
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ split()

// used to split a string into an array of substrings based on a specified separator and returns the new array. It does not change the original string.

/*
  string.split(separator, limit)

  Parameters:
❖ separator (Optional): Specifies the character or regular expression used for splitting the string. If omitted, the entire string is split into individual characters in the array.

This can be a string or a regular expression. If a string is provided, the split() method uses that string as a delimiter to determine where to make each split. If a regular expression is used, the pattern defines the delimiter.

❖ limit (Optional): An integer that specifies the maximum number of splits to be found.
If specified, the resulting array will have at most limit elements.
*/

let phrase = 'we are great.';

console.log(phrase.split(' '));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

let sentence = 'Secretarybirds specialize in stomping';

let words = sentence.split(' ');
console.log(words);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ join()

// The join() method in JavaScript is the opposite of the split() method. It is used to create a new string by concatenating all the elements of an array (or an array-like object) into a single string.
console.log(words.join('. '));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ repeat()

//The repeat() method in JavaScript is used to create and return a new string by concatenating the original string a specified number of times.

//  string.repeat(count)

// count: An integer value indicating the number of times the original string should be repeated in the new string. It must be a non-negative number.

console.log('la'.repeat(5));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

console.log('ha'.repeat(3));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

let shortstrg = 'hello ';
console.log(shortstrg.repeat(4));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ length

let wordee = 'Belowing';
console.log(wordee.length);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// Accessing individual characters in a string
console.log(wordee[2]);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// Accessing the individual characters in a string looks like accessing array elements (with a caveat that we’ll discuss in Chapter 5).
