		var userId = document.querySelector("#user-id");  // ‘아이디’ 필드를 가져와 변수에 저장
		var pw1 = document.querySelector("#user-pw1");  // ‘비밀번호’ 필드를 가져와 변수에 저장
		var pw2 = document.querySelector("#user-pw2");  // ‘비밀번호 확인’ 필드를 가져와 변수에 저장

		userId.onchange = checkId;
		pw1.onchange = checkPw;
		pw2.onchange = comparePw;

		function checkId() {			
			if (userId.value.length < 4 || userId.value.length > 15) {  // userId 필드 내용의 길이가 4 이하이거나 15 이상일 경우 실행
				alert("4~15자리의 영문과 숫자를 사용하세요.");  // 오류 메시지 출력
				userId.select();    // 다시 입력할 수 있도록 userId 필드 선택
			}
		}

		function checkPw() {			
			if (pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");  // 오류 메시지 표시
        pw1.value = "";  // ‘비밀번호’ 필드 지움
				pw1.focus();  // 비밀번호를 다시 입력할 수 있게 포커싱
			}
		}

		function comparePw() {						
			if(pw1.value != pw2.value) {
				alert("암호가 다릅니다. 다시 입력하세요.");
				pw2.value = "";  // ‘비밀번호 확인’ 필드 지움
				pw2.focus();   // 비밀번호를 다시 입력할 수 있게 포커싱
			}
		}