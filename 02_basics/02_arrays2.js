const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

// merging two arrays using "spread" method
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,66],7,[8,9,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Nancy"))
console.log(Array.from("Nancy"));
console.log(Array.from({name: "Nancy"})) //returns empty array because it doesnn't know either it has to make array of key or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
