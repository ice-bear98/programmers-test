function solution(sides) {
    let order = sides.sort((a,b) => b - a)
    return (order[1] + order[2]) > order[0] ? 1 : 2
}