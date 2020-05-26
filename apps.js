let singBtn = document.querySelector("button");

singBtn = addEventListener("click", function() {

    let friends = ["Kala", "Sophie", "Becca", "Fernanda", "Cameron"];

    for (let i = 0; i < friends.length; i++) {
        for (let j = 99; j > 0; j--) {
            if (j === 1) {
                console.log(j + " line of code in a file, " + j + " line of code; " + friends[i] + " strikes one out; clears it all out, no more lines of code in the file! ");
            } else {
                console.log(j + " lines of code in a file, " + j + " lines of code; " + friends[i] + " strikes one out; clears it all out, " + j + " lines of code in the file!");
            }
        }
    }
})
