// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// var date =2222;
// console.log(leapYear(date));
     

function leapYear(year){
  return ((year % 4 ==0)&& (year % 100 !=0)|| (year%400==0));
}
console.log(leapYear(2100));