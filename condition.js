//  var result = 47;

//  let greeting;

// if (result >= 80 && result <= 100) {
//   greeting = "your greet is A+";
// } 
// else if(result >= 70) {
//     greeting = "your greet is A";
// }
// else if(result >= 60) {
//     greeting = "your greet is A-";
// }
// else if(result >= 50) {
//     greeting = "your greet is B";
// }
// else if(result >= 40) {
//     greeting = "your greet is C";
// }
// else if(result >= 33) {
//     greeting = "your greet is D";
// }
// else  {
//     greeting = "your greet is F";
// }

// console.log(greeting);


function numberToGreetConvert(result){
    let greeting;
   
   if (result >= 80 && result <= 100) {
     greeting = "your greet is A+";
   } 
   else if(result >= 70) {
       greeting = "your greet is A";
   }
   else if(result >= 60) {
       greeting = "your greet is A-";
   }
   else if(result >= 50) {
       greeting = "your greet is B";
   }
   else if(result >= 40) {
       greeting = "your greet is C";
   }
   else if(result >= 33) {
       greeting = "your greet is D";
   }
   else  {
       greeting = "your greet is F";
   }
   
   return greeting;
}

// console.log(numberToGreetConvert(75));

// interest convert
function monafa(principal,rat,years){
    let convert =principal*rat *years/ 100;
    return convert;
}
let principal=100000;
let rat=15;
let years=1;
let interest=monafa(principal,rat,years);
// console.log(interest);



// km to mile convert
function kmToMile(Kilometers){
    Miles = Kilometers * 0.6213711922;
    return Miles;
}
// console.log(kmToMile(1000));

function workOut(workName){
    let chestWorkOut=["sowrub","chest","pest","dest"];
    let bicepWorkOut=["nazmul", "hasun", "bicep","taicep"];
    let tricepWorkOut=["mojumder", "tnajial","naznin","tricep"];
     if(workName =="chest"){
        return chestWorkOut;
     }
     else if(workName == "bicep"){
        return bicepWorkOut;
     }
     else{
        return tricepWorkOut;
     }
}

// console.log(workOut("tricep"));


// 1-10 days =10*500
//11-20 days =10*300;
//21 teky par day =100taka kory akta hotel ar barar conditions bar kora holo

let day=15;
if(day ==10){
    let oneToTin=day*500;
    console.log(oneToTin);
}
else if(day <= 20 && day > 10){
    let fst10Daycost=10*500;
    let tinTo20= day -10;
    let tinTo20Cost=tinTo20*300;
    let to20DayCost=fst10Daycost+tinTo20Cost;
    console.log(to20DayCost);
}
else{
    let fst10Day=10*500;
    let tinTo20= 10*300;
    let remainingDays=day-20;
    let lastInfinityDaysCost= remainingDays*100;
    let totalCost = fst10Day+tinTo20+lastInfinityDaysCost;
    console.log(totalCost);

}