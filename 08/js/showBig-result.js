		var bigPic = document.querySelector("#cup");  // 큰 이미지 가져옴
		var smallPics = document.querySelectorAll(".small");  // 작은 이미지들을 노드 리스트로 가져옴

		for(var i = 0; i < smallPics.length; i++) {
			smallPics[i].addEventListener("click", chagePic);   // 노드를 클릭하면 changePic 함수 실행
		}

		function chagePic() {
				var newPic = this.src;   // click 이벤트가 발생한 대상의 src 속성 값 가져옴
				bigPic.setAttribute("src", newPic);  // newPic 값을 큰 이미지의 src 속성에 할당.
				// 윗 줄을 cup.src = newPic; 로 사용해도 됨.
			}	