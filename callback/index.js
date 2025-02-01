async function sum(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

async function suma(num1, num2, callback) {
    const result = await callback(num1, num2);
    console.log(result);
    return result;
}

async function respuesta() {
    const result = await suma(2, 3, sum);
    console.log(result);
}

respuesta();