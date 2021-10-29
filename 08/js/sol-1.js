	var myText = document.querySelector("#myText");
	myText.addEventListener("click", function() {
		myText.style.fontSize = "20px";
		myText.style.color = "blue";
		myText.style.backgroundColor = "#ccc";
	});

	/* 또는 
	var myText = document.querySelector("#myText");
	myText.onclick = function() {
		myText.style.fontSize = "20px";
		myText.style.color = "blue";
		myText.style.backgroundColor = "#ccc";
	};
	*/