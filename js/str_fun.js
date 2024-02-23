
const theString="Hello, world!";

//value of the string
const lenght=theString.length;

//extract the charcter from a string giving an index
const character= theString.charAt(5); //an alternative could be the .at method

//return true if the string include the given string
const contain = theString.includes("world");

//makes the string lower case
const lCase = theString.toLowerCase();

//makes the string upper case
const uCase = theString.toUpperCase();

//extract a substring from a given string
const substring = theString.substring(7,12); //it doesn't go out of bound 

//split a string by a given token
let exampleStr = 'The quick brown fox jumps over the lazy dog.';
const words = exampleStr.split(' ');

//remove the backspaces from the start and the end
exampleStr =  '   Hello world!   ';
const trimmedStr = exampleStr.trim();
//remove the backspaces just from the end OR the start
const trimmedEnd= exampleStr.trimEnd()
const trimmedStart= exampleStr.trimStart()

//replace a string in a string
const replaced = exampleStr.replace('world', 'man');

//pad the end or the start of a string
const paddedEndString = theString.padEnd(15,'!');
