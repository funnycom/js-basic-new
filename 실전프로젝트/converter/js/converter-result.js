		var sUnit = document.querySelector("#s-unit");  // 왼쪽 텍스트 필드 옆에 표시하는 단위
		var tUnit = document.querySelector("#t-unit");  // 오른쪽 텍스트 필드 옆에 표시하는 단위
		var cToF = true;  // 섭씨에서 화씨로 변환
		
		var source = document.querySelector("#s-value");  // 왼쪽 필드
		var target = document.querySelector("#t-value");   // 오른쪽 필드
		
		function exUnit() {
			source.value = "";  // 왼쪽 텍스트 필드 값 지움
			target.value = "";   // 오른쪽 텍스트 필드 값 지움
			
			if (cToF) {
				cToF = false;  // 화씨 -> 섭씨 변환
				sUnit.innerHTML = "&#8457";   // 화씨 기호
				tUnit.innerHTML = "&#8451";   // 섭씨 기호
			}
			else {
				cToF = true;  // 섭씨 -> 화씨 변환
				sUnit.innerHTML = "&#8451";   // 섭씨 기호
				tUnit.innerHTML = "&#8457";		// 화씨 기호
			}
		}
		
		function converter() {	
			if(cToF) {
				target.value = (source.value * 1.8 + 32).toFixed(2);  // 섭씨 -> 화씨 계산
			}
			else {
				target.value = ((source.value - 32) / 1.8).toFixed(2); // 화씨 -> 섭씨 계산
			}
		}	