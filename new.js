let a=2;
let b=3;
let c=2+3;
console.log(c);
c="Hello World";
console.log(c);

console.log(typeof(a));

console.log(typeof(c));


//string
const fname = 'Riya';
const lname = "Singh";
const result = `My name is "${fname} ${lname}"`;
console.log(result);

const result1 =fname.slice(1, 3);
console.log(result1);

//assignment
//1st solution
const string= str=> str.split('').reverse().join("");
console.log(string("Hello"));

//2nd solution
//type1
const a1 = "Almabetter";
function replaceAtIndex(_string,_index,_newValue) {
    if(_index > _string.length-1) 
    {
        return string
    }
    else{
    return (_string.substring(0,_index) + _newValue + _string.substring(_index+1)).toUpperCase();
    }
}

//type2  
const r1 = replaceAtIndex(a1, 3, 'm');
console.log(r1);
 function replaceUpperCase(str){
    return str.replace('a','m').toUpperCase();
 }
console.log(replaceUpperCase(a1));

//3rd solution
const f="this is the almabetter.";
const r2=f[0].toUpperCase()+ f.slice(1, f.length);
console.log(r2);

