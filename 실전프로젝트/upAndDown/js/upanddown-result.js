var counter = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;   // 컴퓨터 무작위 수 생성

document.getElementById("try").onkeypress = function(e) {  //키보드 클릭해서 함수 실행
  if (e.keyCode == 13 || e.which == 13) {  // enter 키인지 체크
    finding();  // 함수 실행
    return false;  // keypress일 때 브라우저가 할 기본 동작 취소
   }
}       

function finding() {                                    
  var userNumber = document.getElementById("try").value;     // 사용자가 입력한 숫자 가져오기

  if ( userNumber >=1 && userNumber <= 100)  {          
    if (randomNumber > userNumber) {                           
      document.getElementById("display").innerText = " UP!"; // #display 영역에 UP! 표시
    }
    else if (randomNumber < userNumber) {
      document.getElementById("display").innerText = "DOWN!";   // #display 영역에 DOWN! 표시
    }
    else {
      document.getElementById("display").innerHTML = "<span style='color:red'>맞혔습니다!</span>";  // #display 영역에 맞혔다고 표시. 글자색 지정하는 태그 사용
    }     
       
    document.getElementById("try").value="";
    counter++;
    document.querySelector("#counter").innerHTML = "시도 횟수 : " +  counter + "회";   
  }
  else 
    alert("1과 100 사이의 숫자를 입력하세요.");
}   