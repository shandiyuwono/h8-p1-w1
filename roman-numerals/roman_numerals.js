
function to_roman (num) {
  // your implementation code here
  var roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCCC", "DCCC", "CM", "M"]
  var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

    var str = String(num)
    var output = ""
    var result = []
    var length = str.length-1

    for(var i = 0; i <= str.length-1; i++) {
      output += str[i]
      while(length > 0) {
        output += "0"
        length--
      }
      result.push(Number(output))
      output = ""
      length = str.length-2-i
      console.log(result)
    }

    var resultStr = ""
    for(var i = 0; i <= result.length-1; i++) {
      for(var j = 0; j <= roman.length-1; j++) {
        if(angka[j] === result[i]) {
          resultStr += roman[j]
        }
      }
    }

    return resultStr

}

// Drive code
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// // console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
