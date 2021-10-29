function calcSum(n) {
  let sum = 0;  // 블록 변수
  
  for(let i = 1; i < n + 1; i++) {
    sum += i;
  }
  console.log(sum);  // 블록 변수 사용
}

calcSum(10);