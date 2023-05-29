const promise = new Promise( function (resolve, reject) {
    resolve ('hey');
});

const cows = 100;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows in the farm, they are enough!`);
    } else {
        reject('Sorry, we dont have the neccesary cows');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("End of the promise!"));