//           JAVASCRIPT EXECUTION  CONTEXT
//    1. Global Execution context
//    2. Function Execution Context
//    3. Eval Execution context


//   { Code } => Run Two Type Phase
//    1. Memory Creation Phase
//    2. Execution Phase


let val1 = 20
let val2 = 15
function addNum(num1,num2){
    let total = (num1 + num2)
    return total
} 
let result1 = addNum(val1,val2);
let result2 = addNum(5,12);
console.log(result1)         //   value => 35
console.log(result2)         //   value => 17


//  OPen source in inspect window 
//  then Snippets open and create a name 
//  and define a code with function , call for function and variables
//  Save code then run code or open call stack option  ***  code run and show call stack system