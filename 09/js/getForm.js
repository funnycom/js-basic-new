		var selectMenu = document.testForm.major;  // 셀렉트 메뉴를 가져와 selectMenu로 저장
		function displaySelect() {
			var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;		
			alert("[" + selectedText + "]를 선택했습니다.");
		}		