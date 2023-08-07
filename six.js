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