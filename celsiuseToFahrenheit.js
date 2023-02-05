function celsiuseToFahrenheit(Cf){
    var celToFar = (Cf * 9/5) + 32;
    return celToFar;
}
var convert =celsiuseToFahrenheit(1);
console.log(convert);

function fahrenheitToCelsiuse(Fc){
    var farToCel= (Fc-32)* 5/9;
    return farToCel;
}

var convertFToC=fahrenheitToCelsiuse(100);
// console.log(convertFToC);