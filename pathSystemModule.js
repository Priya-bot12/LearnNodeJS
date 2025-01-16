const fs = require('fs');

//to read a file
//if we use fs.readFile() than it will execute the task below it if it is not ready 
fs.readFile('notes.txt' ,'utf-8' , (err,data)=>{
    console.log(err,data);
})

//but if we want to do the task in the particular sequence  of the code intenstially we can use 
const a = fs.readFileSync('notes.txt');
console.log(a.toString()) //data is printed in the string format not some code

console.log("Done with the file reading");

//to write in the file
//call back is executed when the task of writing is done 
//it remove or overwrite the existing content of the file
fs.writeFile('note.txt' , "HELLO" , ()=>{
    console.log("Done with the writting file");
});

//if we not want to overwrite the content in the file we can use 
fs.appendFile('example.txt', '\nAdditional content', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Content appended to file');
});

//also we can use path.writeFileSync()
const b = fs.writeFileSync('note.txt' , "This is data2");
console.log(b);


