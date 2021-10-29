		var isOpen = false;
		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector("#view");  // #view 요소를 가져옴
		view.addEventListener("click", function() {
			if (isOpen == false) {  // 상세 정보가 감춰져 있다면 
				document.querySelector("#detail").style.display = "block";  // 상세 정보를 화면에 표시
				view.innerHTML = "상세 설명 닫기";  // 링크 내용 수정
				isOpen = true;  // 표시 상태로 지정
			}
			else {  // 상세 정보가 표시되어 있다면 
				document.querySelector("#detail").style.display = "none";  // 상세 정보를 화면에서 감춤
				view.innerHTML = "상세 설명 보기";  // 링크 내용 수정
				isOpen = false;  // 감춰진 상태로 지정
			}
		});