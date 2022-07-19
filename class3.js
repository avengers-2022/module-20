var num1 = 9000;
var num2 = 7000;
const num3 = 5000;

if (num1 > num2 && (num1 > num3)) {
    console.log("Number 1 is bigger!");
} else if (num2 > num1 && (num2 > num3)) {
    console.log("Number 2 is bigger!");
} else {
    console.log("Number 3 is bigger!");
}


function maxNum(num1, num2, num3) {
    if (num1 > num2 && (num1 > num3)) {
        return ("Number 1 is bigger!");
    } else if (num2 > num1 && (num2 > num3)) {
        return ("Number 2 is bigger!");
    } else {
        return ("Number 3 is bigger!");
    }
}

const result = maxNum(15, 4, 10);
console.log(result)