let caseChange = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z',
  }

  function lettercapital(word){

      capitalisedword="";
    for(let i=0;i<word.length;i++){
        //if(i==0){
capitalisedword+=caseChange[word[i]];
        // }else{
        //     capitalisedword+=word[i];
        // }
    }
   return capitalisedword;
  }

  function firstLetterCapital(arr){

    for(let i=0;i<arr.length;i++){
        arr[i]=lettercapital(arr[i])
    }
    console.log(arr);
  }
  firstLetterCapital(["masai"])