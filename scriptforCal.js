

// 7 input dile output dibe na , then 8 dile no return then + dile 78 return
// 5 dile no output, 6 dile no output then = dile 56 return

// assignment- ekta simple mathmatical "5+6+7" deya thakbe, eta evaluate kore result return korbo

// function = takeInput
// input = digit or operator
// output = a String 
// step1: initialize a global variable , inputString = ""
// step2: if input is not "=" then add it to inputString and show it to screen
// step3:if input "=" hole return inputString

var inputString = "";
function takeInput(symbol){
    if (symbol != "="){
        inputString += symbol;
        document.getElementById("screen").innerHTML = inputString;
    }
    else{
        try{
            document.getElementById("showResult").innerHTML = evaluateExpression(getListOfToken(inputString));}
        catch(err){
            document.getElementById("showResult").innerHTML = err;
        }
        // inputString = "";
    }
}

// function = takeMultiCharacter()
// input = multi character string
// output = string expression 
// step1:take each character and add the character to input string 
// step2: show the inputString in screen 
function takeMultiCharacter(multiChar){
    for(var index = 0; index < multiChar.length; index++ ){
        inputString += multiChar[index];
        document.getElementById("screen").innerHTML = inputString;
    }
    
}
// 1.takeInput(7):
//     1.symbol = 7
//     2.if (symbol != "=")
//     3.if (7 != "=")
//     4.if true{
//         1.inputString += symbol
//         2.inputString = "" + 7
//         3.inputString = "7"
//         4.document.getElementById("screen").innerHTML = inputString;
//         5.document.getElementById("screen").innerHTML = "7";
//     }
// 2.takeInput("+"):
//     1.symbol = "+"
//     2.if (symbol != "=")
//     3.if ("+" != "=")
//     4.if true{
//         1.inputString += symbol
//         2.inputString = "7" + "+"
//         3.inputString = "7+"
//         4.document.getElementById("screen").innerHTML = "7+";
//         5.document.getElementById("screen").innerHTML = "7+";
//     }
// 2.takeInput(2):
//     1.symbol = 2
//     2.if (symbol != "=")
//     3.if (2 != "=")
//     4.if true{
//         1.inputString += symbol
//         2.inputString = "7+" + "2"
//         3.inputString = "7+2"
//         4.document.getElementById("screen").innerHTML = "7+2";
//         5.document.getElementById("screen").innerHTML = "7+2";
//     }


// function = processInput
// input = String expression
// output = show result after operation 
// step1:take a token from the list of token 
// step2: if the token is a number :
//     step2.1: if number1 == null then save token in number1 and go to step 1
//     step 2.2: else number2 te token assign 
//         step 2.2.1: current operation korbo and result number1 e save korbo and go to step 1
// step3: else token is operator then save it to current operator and go to step 1 

// test case1 :if operator is /, * then do that first 
// test case2 :if the first character of the expression is minus then save the minus and the later character as number1
        // 1.if the first token of the listOfToken is "-":
        //     1.number1 += add "-" and the next token


// function evaluateExpression(expression){
//     console.log(expression)
//     var number1 = null;
//     var number2 = null;
//     var currentOperation = null;
//     listOfToken = getListOfToken(expression);
//     console.log(listOfToken);
//     for(var index = 0 ; index < listOfToken.length; index++){
//         if (listOfToken[index] == "-"){
//             number1 += parseFloat(listOfToken[index] + listOfToken[index+1]);
//             index++;

//         }
//         else if(isNaN(listOfToken[index]) == false){
//             if(number1 == null){
//                 number1 = listOfToken[index];
//             }
//             else{
//                 number2 = listOfToken[index];
//                 number1 = doOperation(currentOperation, number1, number2)
//             }
//         }
//         else{ 
//             currentOperation = listOfToken[index]
//         }

//     }
//     console.log(`resultant = ${number1}`) 
//     console.log(`number2 = ${number2}`) 
//     return number1
// }

// expression = "-500"
// 1.evaluateExpression(expression):
//     1.expression  = "-500"
//     2.var number1 = null;
//     var number2 = null;
//     var currentOperation = null;
//     3.listOfToken = getListOfToken(expression)
//     4.listOfToken = ["-", 500]
//     5.for(var index = 0 ; index < listOfToken.length; index++)
//     6.for(var index = 0 ; 0 < 2 ; 0++){
//         1.if (listOfToken[0] == "-"
//         2.if ("-" == "-")
//         3.if true{
//             1.number1 = parseFloat(listOfToken[0] + listOfToken[1]);
//             2.number1 = parseFloat("-" + listOfToken[1]);
//             3.number1 = parseFloat("-" + 500);
//             4.number1 = parseFloat("-500");
//             5.number1 = -500.00
//             6.index++;
//              7.index = 1
//         }
//     }

// step1:puro expression ta itterate korte hobe j (BODMAS) ase kina 
// step2:priority wise bodmas er kono operator er ager number and er porer number niye oi operation kore resultant ta number1 er place e rakhbo



    // 1.expression = "12+6"
    // 2.listOfToken = getListOfToken(expression)
    // 3.listOfToken = getListOfToken("12+6")
    // 4.listOfToken = [12, "+", "6"]
    // 5.for(var index = 0 ; index < listOfToken.length; index++)
    // 6.for(var index = 0 ; index < 3; 0++)
    // 7.for(var index = 0 ; 0 < 3; 0++){
    //     1.if(isNaN(listOfToken[index]) == false)
    //     2.if(isNaN(listOfToken[0]) == false)
    //     3.if(isNaN(12) == false)
    //     4.if(false == false)
    //     5.if true{
    //         1.if(number1 == null)
    //         2.if (null == null)
    //         3.if true{
    //             1.number1 = listOfToken[index]
    //             2.number1 = listOfToken[0]
    //             3.number1 =12
    //             index = 0+1 = 1
    //         }
    // 8.for(var index = 1 ; 1 < 3; 1++)
    //     1.if(isNaN(listOfToken[index]) == false)
    //     2.if(isNaN(listOfToken[1]) == false)
    //     3.if(isNaN("+") == false)
    //     4.if (true == false)
    //     5.if false
    //     6.else{
    //         1.currentOperation = listOfToken[index]
    //         2.currentOperation = listOfToken[1]
    //         3.currentOperation = "+"
    //         index = 1+1 = 2
    // 9.for(var index = 2 ; 2 < 3; 3++)
    //         1.if(isNaN(listOfToken[index]) == false)
    //         2.if(isNaN(listOfToken[2]) == false)
    //         3.if(isNaN(6) == false)
    //         4.if(false == false)
    //         5.if true{
    //             1.if(number1 == null)
    //             2.if(12 == null)
    //             3.if false 
    //             4.else{
    //                 1.number2 = listOfToken[index]
    //                 2.number2 = listOfToken[2]
    //                 3.number2 = 6
    //                 4.doOperation(currentOperation)
    //                 5.doOperation("+"){
    //                     1.operator = "+"
    //                     2.if (operator == "+")
    //                     3.if ("+" == "+")
    //                     4.if true{
    //                         1.number1 = addition(number1, number2)
    //                         2.number1 = addition(12, 6){
    //                             number 1 = 12, number2 = 6
    //                             return number1 + number2 
    //                             return 12 + 6
    //                             return 18
    //                         }
    //                         3.number1 = 18
    //                     }
    //                 }
    //             }
    //         }
    // }
    
// function = processListOfToken
// input = listOfToken 
// output = listOfToken 
// step1: srarch for "/" , if it's found then take number1 = previous token , number2 = next token and do the operation and replace number1,
//  token and number2 with the resultant and return listOfToken
// step2:srarch for "*" , if it's found then do the operation and save the resultant at token's place and return listOfToken
// step3:srarch for "+" , if it's found then do the operation and save the resultant at token's place and return listOfToken
// step4:srarch for "-" , if it's found then do the operation and save the resultant at token's place and return listOfToken
// function processListOfToken(listOfToken){
//     if (listOfToken.indexOf('/') !=-1){
//         var number1 = listOfToken[listOfToken.indexOf('/')-1];
//         var number2 = listOfToken[listOfToken.indexOf('/')+1];
//         newToken = division(number1, number2);
//         listOfToken = getUpdatedListOfToken(listOfToken, listOfToken.indexOf('/'), newToken);
       

//     }
    
//     else if(listOfToken.indexOf('*') !=-1){
//         var number1 = listOfToken[listOfToken.indexOf('*')-1];
//         console.log(number1)
//         var number2 = listOfToken[listOfToken.indexOf('*')+1];
//         console.log(number2)
//         newToken = multiplication(number1, number2);
//         console.log(newToken)
//         listOfToken = getUpdatedListOfToken(listOfToken, listOfToken.indexOf('*'), newToken);
//         console.log(listOfToken)

//     }

//     else if(listOfToken.indexOf('+') !=-1){
//         var number1 = listOfToken[listOfToken.indexOf('+')-1];
//         var number2 = listOfToken[listOfToken.indexOf('+')+1];
//         newToken = addition(number1, number2);
//         listOfToken = getUpdatedListOfToken(listOfToken, listOfToken.indexOf('+'), newToken);
        

//     }
    
//     else if(listOfToken.indexOf('-') !=-1){
//         var number1 = listOfToken[listOfToken.indexOf('-')-1];
//         var number2 = listOfToken[listOfToken.indexOf('-')+1];
//         newToken = subtraction(number1, number2);
//         listOfToken = getUpdatedListOfToken(listOfToken, listOfToken.indexOf('-'), newToken);
//         console.log(listOfToken)
        
//     };
//     return listOfToken;

// }

// function = processListOfToken 
// input = listOfToken 
// outPut = listOfToken 
// step1:initialize index = -1 
// step2:find index of "/"
// step3:if index not equal -1 then save operator  = "/"
// step4:else if find index of "*"
// step5:if index not equal to -1 then save operator = "*"
// step6:do the same thing for "+" and "-" operator 
// step7:do the operation 
// step8:return the new list 
function processListOfToken(listOfToken){
    var index = -1;
    index = listOfToken.indexOf('/');
    if (index != -1){
        operator = "/";
    }
    else if(listOfToken.indexOf('*') != -1){
        index = listOfToken.indexOf('*');
        operator = "*";
    }
    else if(listOfToken.indexOf('+') != -1){
        index = listOfToken.indexOf('+');
        operator = "+";
    }
    else if(listOfToken.indexOf('-') != -1){
        index = listOfToken.indexOf('-');
        operator = "-";
    }
    if (operator != null){
        var number1 = listOfToken[index-1];
        var number2 = listOfToken[index+1];
        var newToken = doOperation(operator, number1, number2)
        listOfToken = getUpdatedListOfToken(listOfToken, index, newToken);
        return listOfToken
    }

}
list = [50, '+',240];
console.log(processListOfToken(list))
// problem in code = 
// or , new ekta listOfToken banabo jetar ager sob token thakbe sudhu number1, token and number2 er jaygay resultant thakbe
// solution: input = list, index, newNumber
//         1.new list banabo, ager list er index-1 er ag porjonto copy HTMLObjectElement, index-1 er jaygay newNumber boshbe, index and index+1 baad jabe and er last porjonto copy hobe

// function = getUpdatedListOfToken 
// input = listOfToken, indexOfOperator, newToken 
// outPut = updated listOfToken 
// step1: index 0 to (indexOfOperator-2) er element same thakbe 
// step2:(indexOfOperator-1) index e newToken boshbe 
// step3:(indexOfOperator+2) theke kono element thakle segulo boshbe 
// step4: updated listOfToken return korbe 
function getUpdatedListOfToken(listOfToken, indexOfOperator, newToken){
    UpdatedListOfToken = [];
    for(var index = 0; index < (indexOfOperator-1); index++){
        UpdatedListOfToken.push(listOfToken[index])
    };
    UpdatedListOfToken.push(newToken);
    for(var index = indexOfOperator+2; index < listOfToken.length; index++ ){
        UpdatedListOfToken.push(listOfToken[index]);

    }
    return UpdatedListOfToken
}
list = [50, '*', 20];;
console.log(getUpdatedListOfToken(list, 1, 1000))
// listOfToken = [2,"*",3]
// step1:srarch for "/", false 
// step2:srarch for "*", true:
//     1.number1 = "*" er ager token
//     2.number2 = "*" er porer token 
//     3.do the operation 
//     4.save the 

// function = evaluate expression 
// input = listOfToken 
// outPut = listOfToken
// step1:listOfToken er length 1 howa na porjonto ekta kore operation korbo 
// step2: length 1 hole return korbo

// testCase1:if two consecutive tokens are (**, //, */, /*) then show error
// testCase2:at index 0 token can't be / or *
// testCase3: last e operator
function evaluateExpression(listOfToken){
    if(listOfToken[0] == "*" || listOfToken[0] == "/") throw "wrong input";
    for(var index = 0; index<listOfToken.length-1; index++){
        if(listOfToken[index] == "*" && listOfToken[index+1] =="/") throw "wrong input";
        else if(listOfToken[index] == "*" && listOfToken[index+1] =="*") throw "wrong input";
        else if(listOfToken[index] == "/" && listOfToken[index+1] =="*") throw "wrong input";
        else if(listOfToken[index] == "/" && listOfToken[index+1] =="/") throw "wrong input";

    }
    if(isNaN(listOfToken[listOfToken.length-1])) throw "wrong input";
    
    while(listOfToken.length > 2){
        listOfToken = processListOfToken(listOfToken);
        console.log(listOfToken); 
    }
    return listOfToken    
}
list = [50, '+', 21,'/',3,'*',4];
console.log(evaluateExpression(list))

// 1.evaluateExpression(["/", 3]):
//     1.lisofToken = ["/", 3]
//     2.try{if(listOfToken[0] == "*" || listOfToken[0] == "/") throw "wrong input";
//     3.try{if("/" == "*" || "/" == "/") throw "wrong input";
//     4.try{if(false || true) throw "wrong input";
//     5.try{if true}
//     6.try{ throw "wrong input"}
//     7.catch(error)
//     8.catch("wrong input"){
//         1.document.getElementById("showResult").innerHTML = `not valid $(error)`
//         2.document.getElementById("showResult").innerHTML = `not valid wrong input`
//     }
// 2.undefind

// function = doOperation
// input = operator
// output = nothing
// step1:if the operator is "+" then call the addition function and save the result in number1 
// step2:if the operator is "-" then call the subtraction function and save the result in number1 
// step3:if the operator is "/" then call the division function and save the result in number1 
// step4:if the operator is "*" then call the add function and save the result in number1 
function doOperation(operator, number1, number2){
    console.log(`operator = ${operator}`);
    console.log(`number1 = ${number1}`);
    console.log(`number2 = ${number2}`);
    if (operator == "+"){
         return addition(number1, number2)
    }
    else if (operator == "-"){
        return subtraction(number1, number2)
    }
    else if(operator == "/"){
        return division(number1, number2)
    }
    else if(operator == "*"){
        return multiplication(number1, number2)
    }
    else{
        return modulus(number1, number2)
    }
    

}

function addition(number1, number2){
    return number1 + number2
}
function subtraction(number1, number2){
    return number1 - number2
}
function division(number1, number2){
    return number1 / number2
}
function multiplication(number1, number2){
    return number1 * number2
}
function modulus(number1, number2){
    return number1 % number2
}

// function = getListOfToken
// input = expression 
// output = list of token 
// step1:expression theke ekta kore character nibo
// step2:character jodi digit hoy tahole puro number ta token hishebe save korbo and next index e jabo
// step3:chaaracter jodi operator hoy tahole token e save korbo and next index e jabo
// step3:list of token return korbo 
function getListOfToken(expression){
    listOfToken = [];
    nextIndex = 0;
    while(nextIndex < expression.length){
        [token, nextIndex] = getNextToken(expression, nextIndex);
        listOfToken.push(token)
    }
    return listOfToken
}
expression = "500+20-1";
console.log(getListOfToken(expression))
// 1.console.log(getListOfToken(expression)):
//     1.expression = "500+20-1"
//     2.listOfToken = [];
//     3.nextIndex = 0;
//     4. while(nextIndex < expression.length)
//     5. while(0 < 8)
//     6.while true{
//         1.[token, nextIndex] = getNextToken(expression, nextIndex);
//         2.[token, nextIndex] = getNextToken("500+20-1", 0);
//         3.[token, nextIndex] = [500, 3]
//         4.listOfToken.push(token)
//         5.listOfToken.push(500)
//         6.listOfToken = [500]
//     }
//     7.while(nextIndex < expression.length)
//     8.while(3 < expression.length)
//     9.while(3 < 8)



// function = getNextToken
// input = expression , index
// output = a new token starting at index , next index 
// step1:if expression[index] is a digit :
//     return getNextNumber(index, expression)
// step2:else return expression[index], index++
function getNextToken(expression, index){
    if (isNaN(expression[index]) == false){
        return getNumber(expression, index)
    }else {
        return [expression[index], ++index]}

}
// 1.getNextToken(expression, 3):
//     1.expression = "500+20-1", index = 3
//     2.if (isNaN(expression[index]) == false)
//     3.if (isNaN(expression[3]) == false)
//     4.if ((isNaN("+") == false))
//     5.if (true == false)
//     6.if (false)
//     7.else{
//         1.return [expression[index], ++index]
//         2.return [expression[3], ++3]
//         3.return [+, 4]
//     }

// test case 1: "5+6+7", index = 0 
// test case 2:"50+6+7" , index = 0
// test case 3:"5+6+70" , index = 4
// test case 4:"", index = 0
// test case 5:"50", index = 2


// function = getNumber
// input = expression, index 
// output = number, nextIndex
// step1: initialize number = 0 
// step2:while expression[index] is a digit then number = number*10+ float(expression[index])
// step3:return number , index++ 

function getNumber(expression, index){
    var number = 0;
    while(isNaN(expression[index]) == false){
        number =number*10 + parseFloat(expression[index]);
        index++;
    }
    return [number, index];
}


// 1.getNumber(expression, index):
//     expression = "500+20-1", index = 0;
//     2.var number = 0;
//    3.while (isNaN(expression[index]) == false)
    // 4.while((isNaN(expression[0]) == false)
    // 5.while(isNaN("5") == false)
    // 6.while (false== false)
    // 7.while(true)
    //     1.number =number*10 + parseFloat(expression[index])
    //     2.number =0*10 + parseFloat(expression[0])
    //     3.number =0 + parseFloat("5")
    //     4.number =5.00
    //     5.index = 0+1
    //     6.index = 1
    
// function  = allClear
// input = nothing
// output = nothing 
// step1: input string e ja ache ta clear korbo and screen e show korbo 

function allClear(){
    inputString = "";
    document.getElementById("screen").innerHTML = inputString;
    document.getElementById("showResult").innerHTML = "";
}
 
// function = clearLastCharacter
// input = nothing
// output = nothing 
// step1: input string er last character tar ag porjonto slice kore inputString er moddhe rakhbo

function clearLastCharacter(){
    inputString = inputString.slice(0, (inputString.length-1) );
    document.getElementById("screen").innerHTML = inputString;
    

}
