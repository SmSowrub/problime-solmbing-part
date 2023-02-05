// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
// return arr.filter((item,index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));

var arr = ["apple", "mango", 
"apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
// var unique = [];
// for(i=0; i < arr.length; i++){  
//     if(unique.indexOf(arr[i]) === -1) {  
//         unique.push(arr[i]);  
//     }  
// }
// return unique;
// }
// console.log(removeDuplicates(arr));


function removeDuplicates(arr){
    var unique=[];
    for(var i=0;i<arr.length;i++){
        if(unique.indexOf(arr[i])===-1){
            unique.push(arr[i]);
        }
    }
    return unique;

}
console.log(removeDuplicates(arr));