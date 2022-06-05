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

function firstletter(name){
let capitalword="";
  for(let i=0;i<name.length;i++){

    if(i=0){
      capitalword+=caseChange[word[i]];
    }else{
      capitalword+=word[i];
    }
  }
  return capitalword;
}
let change="rohit";
console.log(firstletter(change))
