//This would work properly only on browser.
console.log("Hello viewer, the programme here is a simple array arithmatic operation performer.")
let n_array = [];
let idx_value = NaN;
let array_length = Number(prompt("Enter the length of the array: "));

//input taker
if (typeof (array_length) === typeof (1)) {
    for (let i = 0; i < array_length; i++) {
        idx_value = Number(prompt("Enter the index_", i, " of the array: "))
        n_array.push(idx_value);
        idx_value = NaN;
    }
    console.log("Your given array of nums is: ", n_array);
    console.log("The lenght of the given array is: ", array_length);
    //sum finder
    let sum_value = n_array.reduce((before, after) => {
        return before + after;
    });
    console.log("The sum of all the values in the array is: ", sum_value);
    //product finder
    let product_value = n_array.reduce((before, after) => {
        return before * after;
    });
    console.log("The product of all the values of the given array is: ", product_value);
    //division finder
    let div_value = n_array.reduce((before, after) => {
        return before * after;
    });
    console.log("The division value of all the values of the given array is: ", div_value);
    //subtraction finder
    let subtract_value = n_array.reduce((before, after) => {
        return before * after;
    });
    console.log("The subtracted value of all the values of the given array is: ", subtract_value);
}
else {
    alert("You have entered the wrong type of value, rload the page again.");
}