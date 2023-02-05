
// function factorial(number) {
//     total = 1
//     while (number = 0) {
//       total *= number
//       number = number - 1
//       console.log(number,total)
//     }
//     return total;
//   }

//   console.log(factorial(7));
 



//5*4*3*2*1

// var number = 5;
// for(var i = number; i > 1;){
//     i = i-1;
//     var fact = number * i;
//      number=fact;
     
// }
// console.log(fact);

// revers way

// var num=5;
// for(var fact = 1; num > 1; num--){
//      fact = fact * num ;
// }
// console.log(fact);

function factorial(fact){
    var num= fact;
 for(var factorial = 1; num > 1; num--){
     factorial = factorial * num ;
 }
    return factorial;
}

console.log(factorial(5));