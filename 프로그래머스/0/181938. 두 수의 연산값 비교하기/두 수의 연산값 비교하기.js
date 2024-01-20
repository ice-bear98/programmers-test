function solution(a, b) {
    const sum = +(a + "" + b);
    const mult = 2 * a * b;
    return sum > mult ? sum : mult;
}