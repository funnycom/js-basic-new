		function showDetail() {  // '상세 설명 보기'를 클릭했을 때 상세 설명을 보여주는 함수
			document.querySelector('#desc').style.display = "block";	// 상세 설명 부분을 화면에 표시
			document.querySelector('#open').style.display = "none";   // '상세 설명 보기' 단추를 화면에서 감춤
		}
		
		function hideDetail() {  // '상세 설명 닫기'를 클릭했을 때 상세 설명을 감추는 함수
			document.querySelector('#desc').style.display = "none";	   // 상세 설명 부분을 화면에서 감춤
			document.querySelector('#open').style.display = "block";	 // '상세 설명 보기' 단추를 화면에 표시
		}