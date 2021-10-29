var slides = document.querySelectorAll("#container > img"); // 이미지들을 저장한 배열
var prev = document.querySelector("#prev");  // 이전 버튼 
var next = document.querySelector("#next");		// 다음 버튼
var current = 0; // 표시할 이미지 위치

showSlide(current);  // showSlide( ) 함수를 실행해 current 위치의 이미지 표시
prev.onclick = prevSlide;  // prev를 클릭하면 prevSlide 함수 실행
next.onclick = nextSlide;  // next를 클릭하면 nextSlide 함수 실행

function showSlide(n) {
  for(var i=0; i<slides.length; i++) {  // slide 배열의 처음부터 끝까지 반복
    slides[i].style.display = "none";  // 모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = "block";  // n번째 이미지를 화면에 표시 
}

function prevSlide() {
  if (current > 0) current -= 1;  // 현재 이미지가 첫번째가 아닐 경우, -1 위치로
  else current = slides.length - 1; // 현재 이미지가 첫번째라면 마지막으로
  showSlide(current); // 이동한 위치의 이미지 표시
} 

function nextSlide() {
  if (current < slides.length -1) current += 1; // 현재 이미지가 마지막이 아니라면 +1 위치로
  else current = 0; // 현재 이미지가 마지막이라면 첫번째 위치로
  showSlide(current);  // 이동한 위치의 이미지 표시
} 