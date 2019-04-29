function numberToWords(number) {
  // Your code here
 
  var kata = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  var tambahan = ['belas','puluh', 'ratus', 'ribu', 'juta']

  if(number < 12) {
    return kata[number]
  }

  else {
    var str = String(number)
    var index = Number(str[0])
    var slice = str.slice(1) 

    if(str.length === 2 || str.length === 5) {
      if(number < 20) {
        return kata[Number(str[1])] + tambahan[0]
      }
      if(str.length === 5) {
        if(Number(str[1]) === 0)
          if(index === 1) {
            return 'sepuluh ribu ' + numberToWords(Number(slice))
          }
          else{
            return kata[index] + ' ' + tambahan[1] + ' ribu ' + numberToWords(Number(slice))
          }
        else{
          if(index === 1){
            if(Number(str[1]) === 1) {
              return 'sebelas ribu ' + numberToWords(Number(slice.slice(1)))
            }
            return kata[Number(str[1])] + ' ' + tambahan[0] + ' ribu ' + numberToWords(Number(slice.slice(1)))
          }
        }
      }
      if(index === 1 && Number(str[1]) === 0){
        return 'sepuluh' +  ' ' + numberToWords(Number(slice))
      }
      return kata[index] + ' ' + tambahan[1] + ' ' + numberToWords(Number(slice))
    }
    if(str.length === 3) {
      if(index === 1) {
        return 'seratus' + ' ' + numberToWords(Number(slice))
      }
      return kata[index] + ' ' + tambahan[2] + ' ' + numberToWords(Number(slice))
    } 
    if(str.length === 4) {
      return kata[index] + ' ' + tambahan[3] + ' ' + numberToWords(Number(slice))
    }

    if(str.length === 6) {
      if(index === 1) {
        if(Number(str[1]) === 0 && Number(str[2]) === 0) {
          return 'seratus ribu '  + numberToWords(Number(slice))
        }
        return 'seratus ' + numberToWords(Number(slice))
      }
      else {
        if(Number(str[1]) === 0 && Number(str[2]) === 0) {
          return kata[index] + ' ' + tambahan[2] + ' ribu ' + numberToWords(Number(slice))
        }
        return kata[index] + ' ' + tambahan[2] + ' ' + numberToWords(Number(slice))
      }
    }
    
    if(str.length === 7) {
      return kata[index] + ' ' + tambahan[4] + ' ' + numberToWords(Number(slice))
    }

    if(str.length === 8) {
      if(Number(str[1]) === 0) {
        if(index === 1) {
          return 'sepuluh juta ' + numberToWords(Number(slice))
        }
          return kata[index] + ' ' + tambahan[1] + ' ' + tambahan[4] + ' ' + numberToWords(Number(slice))
      }
      else if(Number(str[0]) === 1) {
        if(Number(str[1]) === 1) {
          return 'sebelas juta ' + numberToWords(Number(slice.slice(1)))
        }
        else{
          return kata[Number(str[1])] + ' belas juta ' + numberToWords(Number(slice.slice(1)))
        }
      }
      else{
        return kata[index] + ' ' + tambahan[1] + ' ' + numberToWords(Number(slice))
      }
    }

    if(str.length === 9) {
      if(index === 1) {
        return 'seratus juta ' + numberToWords(Number(slice))
      }
      return kata[index] + ' ratus juta ' + numberToWords(Number(slice))
    }
  } 
}

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

