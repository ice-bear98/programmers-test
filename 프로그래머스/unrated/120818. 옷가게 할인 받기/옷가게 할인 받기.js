function solution(price) {
    // 10만원 5% 30만원 10% 50만원 20%
    return price >= 500000 ? Math.floor(price * 0.8) : price >= 300000 ?  Math.floor(price * 0.9) : price >= 100000 ? Math.floor(price * 0.95) : price 
}