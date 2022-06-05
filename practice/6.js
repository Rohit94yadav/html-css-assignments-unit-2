let input="amsterdam";

let diary={};


for(let i=0;i<input.length;i++){

  if(diary[input[i]]){
    diary[input[i]]++
  }else{
    diary[input[i]]=1;
  }
}
let str="";
for(let key in diary){
  if(diary[key]==1){
    str=str+key;
    
  }
}
  console.log(str);


