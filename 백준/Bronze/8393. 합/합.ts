const fs = require('fs');
// 백준 제출할 때는: "/dev/stdin"
// 로컬에서 테스트할 때는: "src/input.txt"
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const input = fs.readFileSync("src/input.txt").toString().trim();

const n: number = parseInt(input);
const answer: number = (n * (n + 1)) / 2;

console.log(answer);