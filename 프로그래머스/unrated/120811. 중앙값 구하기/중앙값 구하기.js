function solution(array) {
    return array.sort((a , b) => b - a).at(array.length / 2);
}