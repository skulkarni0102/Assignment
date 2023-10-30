var string = prompt("Please enter your string to reverse\n");
var reversedString = "";
var word = "";

for (var i = 0; i < string.length; i++) {
    if (string[i] === " " || i === string.length - 1) {
        if (i === string.length - 1) {
            word = word + string[i];
        }

        var reversedWord = "";
        for (var j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        reversedString += reversedWord + (i === string.length - 1 ? "" : " ");
        word = "";
    } else {
        word += string[i];
    }
}

console.log(reversedString);
