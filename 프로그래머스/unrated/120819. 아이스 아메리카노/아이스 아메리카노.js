function solution(money) {
    const buy = Math.floor(money / 5500)
    const balance = money % 5500
    return [buy , balance]
}