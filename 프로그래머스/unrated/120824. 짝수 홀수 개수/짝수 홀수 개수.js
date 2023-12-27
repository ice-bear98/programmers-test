function solution(num_list) {
    // num_list 안에 [짝수 개수,홀수 개수]가 담긴 배열로 반환 
    let even = num_list.filter(a => a % 2 === 0).length
    let odd = num_list.filter(a => a % 2 === 1).length
    return [even,odd]
}