function bigNum(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        console.log(element)
        if (element > num) {
            num = element;
        }
    }
    return num;
}

const numbers = [2, 96, 4, 85, 10]
const result = bigNum(numbers);

console.log("Result: ", result);