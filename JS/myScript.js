// TASK 1

let x = 0;
let y = 1;

console.log(x);
console.log(y);

// Part 2

let X = x + 3;
let Y = y + X;

console.log(X);
console.log(Y);


// TASK 2

let Resultx = 1 + 1 * 2;
let Resulty = (1 + 1) * 2;
let Resultz = 1 + ( 1 * 2 );
let Resulta =  1 + 1 * 2 / 2;
let Resultb =  (1 + 1 * 2 ) /  2;

console.log(Resultx);
console.log(Resulty);
console.log(Resultz);
console.log(Resulta);
console.log(Resultb);


// TASK 3

const overAll = 65;
let number1 = 6;
let number2 = 45;

let ans = number1 + number2 ;

if (ans === overAll || number1 === overAll || number2 === overAll){
    console.log("true");
}else{
    console.log("false");
};


// TASK 4

const all = 3;
let first = 3;
let second = 0;

let Newsum = first + second ;

if (first === alwaysNow && Newsum === all ){
    console.log("true");
}else if (second === alwaysNow && Newsum === all ){
    console.log("true");
}else {
    console.log("false");
};


// TASK 5 

let k = 4;
let l = 4;

let area = (k*l)/2;
console.log(area);




// TASK 6

const numArr = [37,500,15];

numArr.sort();

numArr.sort((a,b) => a-b);

const maximum = numArr[numArr.length-1];
console.log(maximum);




// TASK 7

// Part 1
    function changeToFahrenheit(celsius) 
    {
    let celsiusTemp = celsius;
    let ToFar = celsiusTemp * 9 / 5 + 32;
    let msg = celsiusTemp + '\xB0C is ' + ToFar + ' \xB0F.';
        console.log(msg);
    }

    // Part 2
    function changeToCensius(fahrenheit) 
    {
    var fahrenheitTemp = fahrenheit;
    var ToCels = (fahrenheitTemp - 32) * 5 / 9;
    var NewMsg = fahrenheitTemp + '\xB0F is ' + ToCels + '\xB0C.';
        console.log(NewMsg);
    } 
    changeToFahrenheit(30);
    changeToCensius(90);





// TASK 8 

function converter(n) {
    let num = 71;
    let hours = (num / 60);
    let remaininghours = Math.floor(hours);
    let minutes = (hours - remaininghours) * 60;
    let remainingminutes = Math.round(minutes);
    return num + " minutes = " + remaininghours + " hour(s) and " + remainingminutes + " minute(s).";
    } 
    
    console.log(converter());




// TASK 9 

let numbers = function (n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
};

numbers(10);

console.log(sum);



// TASK 10 

let words = "hellO theRe";

let results = "";
for (i = 0; i < words.length; i++){
    if(Alpha.indexOf(words[i]) >= 0) results += words[i];

}
console.log(results);




// TASK 11 

function commonAlphabets(string1, string2) {
let string1ToArray = Array.from(string1);
let string2ToArray = Array.from(string2);

let SomeLet = string2ToArray.filter(value => {
return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${SomeLet}`);
}

commonAlphabets('bootstrap', 'bootcampers');
