		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}