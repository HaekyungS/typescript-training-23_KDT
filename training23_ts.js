var pokemonList = ["피카츄", "라이츄", "파이리", "꼬부기"];
function exampleOne(array, change1, change2) {
    var result = array.splice(0, 2, change1, change2);
    return array.join("");
}
var result = exampleOne(pokemonList, "야도란", "또가스");
console.log(result);
