function solution(arr, k) {
    return k % 2 === 0 ? arr.map(arr => arr + k) : arr.map(arr => arr * k) 
}