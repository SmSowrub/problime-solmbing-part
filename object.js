// let students ={
//     id :1,
//     Name: "Nazmul hasan",
//     Phone : 01,
//     college : "Comilla victorya college"
// }

// var data =students;
// // no-1
// var data2= students.Name;
// // no-2
// var data3 =students["college"];
// // no-3
// var data4= "id";
// var data5 =students[data4];
// console.log(data5);

// let othersMe={
//     Name:"Sowrub Mojumder",
//     friends:[{
//         name:"Nazmul",
//         gender:"male",
        
//     },
//     {
//         name:"Tanzila",
//         gender:"female",
//     },{
//         name:"Naznin",
//         gender:"female",
//     },
//     {
//         name:"sowrub",
//         gender:"male",
//     },
//     {
//         name:"sabbir",
//         gender:"male",
//     },
// ]
// }

// let boyCount =0;
// let grilCount= 0;
// for(let i=0; i< othersMe.friends.length; i++){
//     if(othersMe.friends[i].gender=="male"){
//         boyCount++;
//     }
//     else{
//         grilCount++;
//     }
// }                     
// console.log(boyCount);

// let allFriends=othersMe.friends.length;
// console.log(allFriends);



let allOtherFriends={
    Name:"sowrub",
    friends:[
        {
            name:"habib",
            gender:"male",
        },
        {
            name:"habib",
            gender:"male",
        },
        {
            name:"habiba",
            gender:"female",
        },
        {
            name:"nazmul",
            gender:"male",
        },
        {
            name:"naznin",
            gender:"female",
        },
        {
            name:"tanzila",
            gender:"female",
        },
         {
            name:"sowrubi",
            gender:"female",
        },
        {
            name:"sojun",
            gender:"male",
        },
    ]
};

let boyCount=0;
let girlCount=0;
for(let i=0; i < allOtherFriends.friends.length;i++ ){
    if(allOtherFriends.friends[i].gender == "male"){
         boyCount++;
    }
    else{
         girlCount++;
    }
}
console.log(boyCount);
console.log(girlCount);