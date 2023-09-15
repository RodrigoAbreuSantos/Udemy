let varA =  'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
backup = [varA, varB, varC];
for (let i = 0; i < backup.length; i++){
    if (backup[i] == 'A'){
        backup[0] = 'B';
    }
    if (backup[i+1] == 'B'){
        backup[i+1] = 'C';
    }
    if (backup[i+2] == 'C'){
        backup[i+2] = 'A'
    }
}

console.log(backup);