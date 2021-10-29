		var radius = document.querySelector("#radius");
		var start = document.querySelector("#start");
		
		start.addEventListener("click", function() {
			document.querySelector("#round").value = Number(radius.value) * Math.PI * 2;
			document.querySelector("#area").value = Math.PI * Number(radius.value) * Number(radius.value);
		});