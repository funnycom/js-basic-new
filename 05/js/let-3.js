function calcSum(n) {
  let sum = 0;
  
  for(let i = 1; i < n + 1; i++) {
    sum += i;
  }  
  let sum;  // 변수 재선언
  console.log(sum);
}

calcSum(10);