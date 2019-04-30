function board(row, col) {
    const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    var acak = []
    for(let i = 1; i <= row; i++) {
        var output = []
        for(let j = 1; j <= col; j++) { 
            output.push(abjad[Math.floor(Math.random()*5)])
        }
        acak.push(output)
    }
    
    var vokal = 'AIUEO'
    console.log(acak)
    var count = 0
    for(let i = 0; i <= acak.length-2; i++) {
        for(let j = 0; j <= acak[i].length-2;j++){
            var vowelCount = 0
            for(let k = i; k <= i+1; k++){
                for(let l = j; l <= j+1; l++) {
                     for(let m = 0; m <= vokal.length-1; m++) {
                        if(acak[k][l] === vokal[m]) {
                            vowelCount++
                        }
                    }         
                }
            }
            if(vowelCount === 4) {
                count++
            }
        }
    }

    return count

}

console.log(board(5, 4))
