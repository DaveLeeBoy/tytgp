const fs = require('fs');
 
function getAllFileNames(folderPath) {
  const files = fs.readdirSync(folderPath);
  const fileNames = [];
  
  files.forEach(file => {
    const fileName = file.split('/').pop(); // 获取文件名
    fileNames.push(fileName);
  });
  
  return fileNames;
}
 
const folderPath = './';
const fileNames = getAllFileNames(folderPath);
console.log(fileNames);
let a = []

function strCompare(str1,str2){if(str1==undefined&&str2==undefined){return 0}if(str1==undefined){return-1}if(str2==undefined){return 1}let c1;let c2;let regexArr=['-','_','—','~','·'],canRegex=/[^0-9\.]/g;if(canRegex.test(str1)&&canRegex.test(str2)){for(let i=0;i<regexArr.length;i++){let regex=eval('(/[^0-9\\'+regexArr[i]+'\\.]/g)');let tps1=str1.replace(/\.[0-9a-zA-Z]+$/,'');let tps2=str2.replace(/\.[0-9a-zA-Z]+$/,'');if(!regex.test(tps1)&&!regex.test(tps2)){let numberArray1=tps1.split(regexArr[i]);let numberArray2=tps2.split(regexArr[i]);return compareNumberArray(numberArray1,numberArray2)}}}for(let i=0;i<str1.length;i++){c1=str1[i];if(i>str2.length-1){return 1}c2=str2[i];if(isNumber(c1)&&isNumber(c2)){let numStr1="";let numStr2="";for(let j=i;j<str1.length;j++){c1=str1[j];if(!isNumber(c1)&&c1!=='.'){break}numStr1+=c1}for(let j=i;j<str2.length;j++){c2=str2[j];if(!isNumber(c2)&&c2!=='.'){break}numStr2+=c2}let numberArray1=numStr1.split('.');let numberArray2=numStr2.split('.');return compareNumberArray(numberArray1,numberArray2)}if(c1!=c2){return c1-c2}}return 0}function isNumber(obj){if(parseFloat(obj).toString()=="NaN"){return false}return true}function compareNumberArray(numberArray1,numberArray2){for(let i=0;i<numberArray1.length;i++){if(numberArray2.length<i+1){return 1}let compareResult=parseInt(numberArray1[i])-parseInt(numberArray2[i]);if(compareResult!=0){return compareResult}}return-1}

const http = require('http');
 
http.createServer((req, res) => {
fileNames.sort(function(str1, str2) {
    return strCompare(str1, str2)
});
fileNames.forEach(item => {
    if (item.indexOf('.htm') != -1) {
        let str = `<a href="./${item}">${item}</a>`
        a.push(str)
    }
})
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  res.write(a.join('&nbsp;'));
  res.end();
}).listen(3000);
 
console.log('Server running at http://localhost:3000/');