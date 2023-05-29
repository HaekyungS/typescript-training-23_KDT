const pokemonList: Array<string> = ["피카츄", "라이츄", "파이리", "꼬부기"]

function exampleOne(array: Array<string>, change1: string, change2: string): string {
  const result = array.splice(0, 2, change1, change2)
  // 제거된 요소를 담은 배열이 반환됨.

  // 그래서 result = ["피카츄", "라이츄"]
  return array.join("")
}

const result = exampleOne(pokemonList, "야도란", "또가스")
console.log(result)