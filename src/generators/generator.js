// Uso de generadores

function generatorExample1 () {
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    const g = gen();
    console.log(g.next().value);
    console.log(g.next().value);
    console.log(g.next().value);
    console.log(g.next().value);
}

// generatorExample();

function generatorExample2 () {
    function* iterate(array) {
        for (let value of array) {
            yield value;
        }
    }
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
    const it = iterate(planets);
    console.log(it.next());
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
}
generatorExample2();

