const doubleNumbers = (arr) => arr.map((number) => number * 2);
// test
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

const stringItUp = (arr) => arr.map((number) => number.toString());
// test
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

const capitalizeNames = (arr) =>
    arr.map((word) =>
        word
            .slice(0, 1)
            .toUpperCase()
            .concat(word.slice(1, word.length).toLowerCase())
    );
// test
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

const namesOnly = (arr) => arr.map((person) => person.name);
// test
console.log(
    namesOnly([
        {
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

const makeStrings = (arr) => {
    return arr.map((person) => {
        if (person.age > 18) return `${person.name} you can go to the Matrix`;
        else return `${person.name} is under age!!`;
    });
};
// test
console.log(
    makeStrings([
        {
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

const readyToPutInTheDOM = (arr) =>
    arr.map((person) => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
// test
console.log(
    readyToPutInTheDOM([
        {
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
