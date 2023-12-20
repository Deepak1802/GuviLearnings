//question 1
//How to compare two JSON have the same properties without order
//let obj1 = {name:"person1", age:5}
//ler obj2 = {age:5 , name:"person1"}

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var comparison=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            comparison=false;
            break;
        }
    }
}
else {
    comparison=false;
}
console.log(comparison);
//output:
//true

//question 2
//use the rest countries api url and display all the country flag in console
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   

}
}

//question 3
//use rest countries api url and print all countries names,regions,subregion and populations
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

}
}
