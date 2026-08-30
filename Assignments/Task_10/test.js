var input = prompt("Enter your degree");

if (input === null || input.trim() === "") {
    console.log("No degree entered");
} else {
    var degree = Number(input);

    if (isNaN(degree)) {
        console.log("Please enter a valid number");
    } else if (degree < 0 || degree > 100) {
        console.log("Degree must be between 0 and 100");
    } else if (degree < 50) {
        console.log("fail");
    } else if (degree < 65) {
        console.log("pass");
    } else if (degree < 75) {
        console.log("good");
    } else if (degree < 85) {
        console.log("very good");
    } else {
        console.log("excellent");
    }
}