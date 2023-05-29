// Practice with async-await
const promiseFn = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!!'), 10000)
            : reject(new Error('Error!'));
    });
}

const asyncFn = async () => {
    const data = await promiseFn();
    console.log(data);
    console.log('Hello!');
}

console.log('Before');
asyncFn();
console.log('After');