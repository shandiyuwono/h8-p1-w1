function moneyCoins (money) {
  // your implementation code here
  var pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]

  var result = []
  for(var i = pecahan.length-1; i >= 0; i--) {
    while(money - pecahan[i] >= 0) {
      result.push(pecahan[i])
      money -= pecahan[i]
    }
  }
  
  return result
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// //output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
