function ticTacToe() {

    var xo = 'XO'
    var countX = 0
    var result = [[],[],[]]
    
    for(let i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            var random = xo[Math.floor(Math.random()*2)] 
            if(random === 'X') {
                countX++ 
            }
            if(countX < 5) {
                result[i].push(random) 
            }
            else{
                result[i].push('O')
            }     
        } 
    }
    return result
}

console.log(ticTacToe())