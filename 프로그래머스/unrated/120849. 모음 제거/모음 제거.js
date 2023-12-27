function solution(my_string) {
    const str = 'aioeu'
    return my_string.split('').filter((el) => !str.includes(el)).join('') 
}