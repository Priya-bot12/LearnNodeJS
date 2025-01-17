//const url = require('url');
//this file is treated as ES module due to the presence of "type": "module" in your package.json file

//instead we can use the below 
import { URL } from 'url';

//We can store the URl in a very sytematic way in javaScript object
const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href); //URL finall look