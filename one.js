// 1
let x = window.prompt();
if(x % 2 ==0){
    console.log("even");
}
else{
    console.log("odd");
}
// 
// 
// 3
function reverse(str){
    let reversed=""
    for (let i=str.length;i>=0;i--){
        console.log(str[i])
    }
}
reverse("Welcome");
// 
// 
// 4
let pi =3.14;
let n=window.prompt();

let circumference;
circumference=2*pi*n;

let area;
area=pi*(n*n);

console.log("circumference= "+circumference);
console.log("Area= "+area);
// 
// 
// 6
let num=window.prompt();
let num1=window.prompt();

if(num>0&&num1>0){
    console.log("positive numbers")
}
else if (num<0&&num1<0){
    console.log("negative numbers")

}
else if(num>0&&num1<0)
{
    console.log("first is positive-second is negative")
}
else{
    console.log("first negative - second positive")
}
