
// var userName = prompt("enter your name:");
// console.log(userName)
// var number;
// number = 100;
// console.log(number)
// const c = 10;
// document.write(c)
// console.log(c)
// let a;
// a = 90;
// let b = a;
// console.log(b);
function convertCelciousToFernheit(celcious){
    var ferenheit;
    ferenheit  = 5/9 * (celcious-32);
    return ferenheit;
}
// cel = prompt("enter celcious:");
// alert(`Ferenheit: ${convertCelciousToFernheit(cel)} Degree` );
console.log("complete!")
var countries = ["Bangladesh", "USA", "UK"];
countries[countries.length] = "poland"
console.log(countries);
function getVaccine(age){
    if (age > 55){
        console.log("get  priority in vaccine");
    }
    else if (age > 40){
        console.log("get vaccine");
    }
    else{
        console.log("no vaccine");
    }}
getVaccine(50);

function findLasgestOfThree(n1, n2, n3){
    if (n1 > n2 && n1 > n3){
        console.log(`largest number ${n1}`);
    }
    else if (n2 > n1 && n2 > n3){
        console.log(`largest number ${n2}`)
    }
    else{
        console.log(`largest number ${n3}`)
    }
}

function findLargestofThree(n1, n2, n3){
    if (n1> n2){
        if (n1>n3){
            console.log(`largest number is ${n1}`);}
        else{
            console.log(`largest number is ${n3}`)
        }
        }
    else {
        if (n3 > n2){
            console.log(`largest number is ${n3}`);}
        else {
            console.log(`largest number is ${n2}`)
        }
        }
    
    
}

// n1 = prompt("enter n1:");
// n2 = prompt("enter n2:");
// n3 = prompt("enter n3:");
// findLargestofThree(n1, n2, n3);
// choice = prompt("enter a choice:")
// switch(choice){
//     case "a":

function showGrade(number){
    if (number > 100 || number < 0){
        console.log("invalid Number")
    }
    else if (number >= 80 ){
        console.log("your grade is A+");
    }
    else if (number >= 70){
        console.log("your grade is A");
    }
    else if (number >= 60){
        console.log("your grade is A-");
    }
    else if (number >= 50){
        console.log("your grade is B");
    }
    else if (number >= 40){
        console.log("your grade is C");
    }
    else{
        console.log("fail")
    }

}
//  var number = prompt("enter your number:");
// showGrade(number)

var name = "Bohubrihi";
for (var i = 0; i < name.length; i++){
    console.log(name[i]);
}

for (var index of name){
    console.log(`for ${index} item`);
}

// function = sum of a square numbers 
// input = number
// output = summation of the series
// step1:1 theke shuru kore input number porjonto sob number er square er summation korbo
// step2: summation return korbo
function sumOfSquares(lastNumber){
    var sum = 0;
    var series = "";
    for (var number = 1; number <= lastNumber; number++ ){
        sum += number ** 2;
        series += number ** 2;
        if (number == lastNumber){
            continue;
        }
        series += " + "
    }
    console.log( `${series} = ${sum}`)

}
sumOfSquares(5)

function getParameter(number){
    var parameter1 = "";
    if (number != "+" || number != "-" || number != "*" || number != "/" || number != "="){
        parameter1 += number;}
    else {
        document.getElementById("temp").innerHTML = parameter1;
    }
        
    }

container = getParameter(7);
console.log(container);
// 50+60+70
// "5+6+7"
// function = evaluateExpression
// input = string expression 
// output = value of the expression 

function evaluateExpression(expression){
    var result = 0;
    for (var element; element <expression.length; element++){
        if (isNaN(element) == false ){
            result += parseFloat(element);
        } else{
            result += element;
        }
    }
    console.log(result)
}

evaluateExpression("5+6+7")
