function solution(n, t) {
   let answer = 0;
for(let i = n; i <= n; i++){
   let value = i;
    for(let time = 1; time<= t; time++){
        value = value * 2
    }
    answer += value
}
    return answer
}