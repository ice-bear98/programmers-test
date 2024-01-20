function solution(num_list) {
    const lastIdx = num_list[num_list.length - 1];
    const target = num_list[num_list.length - 2];
 
    lastIdx > target 
    ? num_list.push(lastIdx - target)
    : num_list.push(lastIdx * 2)
    
    return num_list;
}