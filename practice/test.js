// Write a custom function that has the same behavior of inbuilt Array Join

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let obj={};
for(let i=0;i<lower.length;i++){
    obj[lower[i]]=upper[i];
    obj[upper[i]]=upper[i]
    console.log(obj)
}