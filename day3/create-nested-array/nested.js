function angka(row, col) {
    var abjad = "abcdefghijklmnopqrstuvwxyz"

    var result = []
    for(var i = 1; i <= row; i++) {
        var output = []
        for(var j = 1; j <= col; j++) {
            output.push(abjad[Math.floor(Math.random()*10)])
        }
        result.push(output)
    }

    return result
}

console.log(angka(5, 3))
console.log(angka(4,2))