var myRect = document.querySelector("#rect");
myRect.addEventListener("mouseover", function() {  // mouseover 이벤트 처리
	myRect.style.backgroundColor = "green";  // myRect 요소의 배경색 
	myRect.style.borderRadius = "50%";  // myRect 요소의 테두리 둥글게 처리
});
myRect.addEventListener("mouseout", function() {  // mouseout 이벤트 처리
	myRect.style.backgroundColor = "";  // myRect 요소의 배경색 지우기 
	myRect.style.borderRadius = "";  // myRect 요소의 테두리 둥글게 처리 안 함
});