/* PSEUDO CODE 

SET tono = 2
SET anton = 4
SET budi = 5

LOOP from i = 7 to i = 31
    IF i % 5 equals to 0
        DISPLAY "Tanggal" + i + ": Tempat Fitness Tutup"

    ELSE
        SET tonoDatang = false
        SET antonDatang = false
        SET output = "Tanggal " + i + ":"

        IF i-7 % tono equals to 0
            ADD to output " Tono"
            tonoDatang = true
        
        IF i-7 % anton equals to 0
            ADD to output ", Anton"
            antonDatang = true

        IF i-7 % budi equals to 0
            IF tonoDatang equals to true OR antonDatang equals to true
                ADD to output ", Budi"
            ELSE
                ADD to output " Budi"

        DISPLAY OUTPUT
    SET i = i + 1
END LOOP

*/

var tono = 2
var anton = 4
var budi = 5

for(var i = 7; i <= 31; i++) {
    if(i % 5 === 0) {
        console.log("Tanggal " + i + ": Tempat Fitness Tutup")
    }
    else{
        tonoDatang = false
        antonDatang = false
        output = "Tanggal " + i + ":"
        if((i-7) % tono === 0) {
            output += " Tono"
            tonoDatang = true
        }

        if((i-7) % anton === 0) {
            output += ", Anton"
            antonDatang = true
        }

        if((i-7) % budi === 0) {
            if(tonoDatang === true || antonDatang === true) {
                output += ", Budi"
            }
            else{
                output += " Budi"
            }
        }
        console.log(output)
    }
}


