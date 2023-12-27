function solution(message) {
    return message.split('').map(x => Number(2 * x.length)).reduce((acc,cur) => {return acc + cur},0)
}