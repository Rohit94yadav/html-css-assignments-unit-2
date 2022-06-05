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

function capitalize (word) {
    // word = word.split('');
    // word[0] = caseChange[word[0]];
    // return word.join('');
    let capitalisedWord = '';

    for(let i = 0; i < word.length; i++){
        if(i == 0){
            capitalisedWord += caseChange[word[i]]
        }else {
            capitalisedWord += word[i]
        }
    }

    return capitalisedWord;
}

function firstLetterCapital (arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = capitalize(arr[i]);
    }

    console.log(arr)
}

firstLetterCapital(['masai', 'school'])