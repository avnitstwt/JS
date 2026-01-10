const fs = require('fs')
const fileData = fs.readFileSync('./abcd').toString()
fileData.split('\n').forEach((variable)=> {
    const [key,value]=variable.split('=')
    console.log(key,value);
    

})