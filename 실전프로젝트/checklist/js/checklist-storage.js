		var itemList = [];
		var addBtn = document.querySelector('#add');
		addBtn.addEventListener("click", addList);
		
		getItems();

		function getItems() {
			var storedData = localStorage.getItem("storageList");
			if(storedData != null) itemList = JSON.parse(storedData);
			showList();
		}		
				
		function addList() {
			var item = document.querySelector('#item').value;
			if(item != null) {
				itemList.push(item);
				document.querySelector('#item').value = "";
				document.querySelector('#item').focus();
			}			
			localStorage.setItem("storageList", JSON.stringify(itemList));
			showList();
		}	

		function showList() {						
			var list = "<ul>";
			for (var i=0; i<itemList.length; i++) {
				list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
			}
			list += "</ul>";

			document.querySelector('#itemList').innerHTML = list;

			var remove = document.getElementsByClassName('close');
			for (var i=0; i<remove.length; i++) {
				remove[i].addEventListener("click", removeList);
			}
		}

		function removeList() {			
			var id = this.getAttribute("id");	
			itemList.splice(id, 1);
			localStorage.setItem("storageList", JSON.stringify(itemList));
			showList();
		}