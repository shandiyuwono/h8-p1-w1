function toRoman(input) {
  // start your code here
  if(input === 0) {
    return ""
  }
  var kamus = [
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['M', 1000]
  ]

  for(var i = kamus.length-1; i >= 0; i--) {
    if(input - kamus[i][1] >= 0) {
      input -= kamus[i][1] 
      return kamus[i][0] + toRoman(input)
    }
  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
