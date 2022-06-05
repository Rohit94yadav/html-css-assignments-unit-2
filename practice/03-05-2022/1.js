function binaryString3(N,str){
    let maxLen=0;
    
    for(let i=0;i<N;i++){
        
        for(let j=i;j<N;j++){
            let substring="";
            for(let k=i;k<=j;k++){
                substring=substring+str[k]; 
            }

            if(substring[0]== 1 && substring[substring.length-1] == 1){
                if(maxLen < substring.length){
                    maxLen = substring.length
                }
            }
        }    
    } 
        
     console.log(maxLen)   
        
}


binaryString3(6, '001001')