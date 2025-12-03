console.log("chracter type counter programme");
console.log("For vowel finder, press(1) and for the consonant counter, press(2)");
let choice = Number(prompt("Please, enter the choice: "));

if (choice === 1) {
    console.log("The vowel counter-");
    let string_value = String(prompt("Please enter a string value: "));
    let counts = 0;
    string_value = string_value.toLowerCase();

    function vowel_counter(value) {
        for (let i = 0; i < value.length; i++) {
            if (value[i] === "a" || value[i] === "e" || value[i] === "i" || value[i] === "o" || value[i] === "u") {
                counts++;
            }
        }
        return counts;
    }
    console.log("You have enetered the string lateral: ", string_value);
    console.log("The number of vowel chracters inside given lateral is: ", vowel_counter(string_value));
}
else if (choice === 2) {
    console.log("The consonent counter-")
    let string_value = String(prompt("Please enter a string value: "));
    let counts = 0;
    string_value = string_value.toLowerCase();
    string_value = string_value.trim();

    function consonant_counter(value) {
        for (let i = 0; i < value.length; i++) {
            if (value[i] != "a" && value[i] != "e" && value[i] != "i" && value[i] != "o" && value[i] != "u") {
                counts++;
            }
        }
        return counts;
    }
    console.log("You have enetered the string lateral: ", string_value);
    console.log("The number of consonant chracters inside given lateral is: ", consonant_counter(string_value));
}