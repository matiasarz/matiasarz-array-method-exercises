const total = (arr) => arr.reduce((acc, item) => acc + item, 0);
// test
console.log(total([1, 2, 3])); // 6

const stringConcat = (arr) => arr.reduce((acc, item) => acc.concat(item), "");
// test
console.log(stringConcat([1, 2, 3])); // "123"

const totalVotes = (arr) =>
    arr.reduce((acc, item) => {
        item.voted ? acc++ : null;
        return acc;
    }, 0);

var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
];
// test
console.log(totalVotes(voters)); // 7

const shoppingSpree = (arr) => arr.reduce((acc, item) => acc + item.price, 0);

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 },
];
// test
console.log(shoppingSpree(wishlist)); // 227005

const flatten = (arr) =>
    arr.reduce((acc, item) => {
        acc.push(item);
        return acc.flat();
    }, []);

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];
// test
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
];

const voterResults = (arr) =>
    arr.reduce((acc, item) => {
        if (!acc.numYoungPeople) acc.numYoungPeople = 0;
        if (!acc.numMidsPeople) acc.numMidsPeople = 0;
        if (!acc.numOldsPeople) acc.numOldsPeople = 0;
        if (!acc.numYoungVotes) acc.numYoungVotes = 0;
        if (!acc.numMidVotesPeople) acc.numMidVotesPeople = 0;
        if (!acc.numOldVotesPeople) acc.numOldVotesPeople = 0;
        if (item.age >= 18 && item.age <= 25) {
            acc.numYoungPeople++;
            item.voted && acc.numYoungVotes++;
        }
        if (item.age >= 26 && item.age <= 35) {
            acc.numMidsPeople++;
            item.voted && acc.numMidVotesPeople++;
        }
        if (item.age >= 36 && item.age <= 55) {
            acc.numOldsPeople++;
            item.voted && acc.numOldVotesPeople++;
        }

        return acc;
    }, {});

console.log(voterResults(voters));
// Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
