function solution(num_list) {
    let sum = num_list.reduce((acc,cur) => acc + cur , 0);
    let multiply =  num_list.reduce((acc,cur) => acc * cur , 1);
 
    return multiply > Math.pow(sum , 2) ? 0 : 1
}