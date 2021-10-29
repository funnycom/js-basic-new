		var min, sec;
		var timer; // setInterval() 결과를 저장할 변수
		
		function startTimer() {
			min = document.querySelector('#startMin').value;  // '분' 값 가져오기
			if (min == "") min = 0;  // '분' 값이 없다면 0분으로 지정
			sec = document.querySelector('#startSec').value;  // '초' 값 가져오기  
			if (sec == "") sec = 0;  // '초' 값이 없다면 0초로 지정
			timer = setInterval(countTimer, 1000);  // 1초마다 countTimer 함수 실행
		}
		
		function countTimer() {
			if (sec != 0) {  // '초' 값이 있다면
				sec--;  // 1초 줄임   
				document.querySelector('#display').innerText = min + "분 " + sec + "초 남았습니다.";
			}
			else {
				if (min != 0) {  // '분' 값이 있다면
					min--;   // 1분 줄임
					sec = 59;  // 59초부터 시작
				}
				else {
					clearTimer(timer);
					document.querySelector('#display').innerText = "타이머 종료";										
				}
			}
		}
		
		function resetTimer() {
			clearTimer(timer);  			
		}

		function clearTimer(t){
			clearInterval(t);  // 타이머 종료
			document.querySelector("#display").innerText = "";  // 표시 내용 지우기
			document.querySelector("#startMin").value = "";  // 사용자 입력 내용(분) 지우기
			document.querySelector("#startSec").value = "";  // 사용자 입력 내용(분) 지우기  			
		}