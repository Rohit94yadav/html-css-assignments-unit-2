let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let obj={};

for(let i=0;i<lower.length;i++){

    obj[lower[i]]= upper[i];
    obj[upper[i]]= lower[i];

}
let bothcase=
{
    a: 'A',
    A: 'a',
    b: 'B',
    B: 'b',
    c: 'C',
    C: 'c',
    d: 'D',
    D: 'd',
    e: 'E',
    E: 'e',
    f: 'F',
    F: 'f',
    g: 'G',
    G: 'g',
    h: 'H',
    H: 'h',
    i: 'I',
    I: 'i',
    j: 'J',
    J: 'j',
    k: 'K',
    K: 'k',
    l: 'L',
    L: 'l',
    m: 'M',
    M: 'm',
    n: 'N',
    N: 'n',
    o: 'O',
    O: 'o',
    p: 'P',
    P: 'p',
    q: 'Q',
    Q: 'q',
    r: 'R',
    R: 'r',
    s: 'S',
    S: 's',
    t: 'T',
    T: 't',
    u: 'U',
    U: 'u',
    v: 'V',
    V: 'v',
    w: 'W',
    W: 'w',
    x: 'X',
    X: 'x',
    y: 'Y',
    Y: 'y',
    z: 'Z',
    Z: 'z'
  }
  
  function changecase(word){
let capitalised =""
    for(let i=0;i<word.length;i++){
        capitalised+=bothcase[word[i]];

        }
        console.log(capitalised);
    }
    changecase("rohit")
  