function showMe(id) {
				this.nextElementSibling.className = "open";
			}

			var h2s = document.getElementsByTagName('h2');
			for (var index = 0;index < h2s.length; index++) {
				h2s[index].onclick = showMe;
			}

 if (this.nextElementSibling.className != "open") {
                this.nextElementSibling.className = "open";
            }
            else {
                this.nextElementSibling.className = "closed";
            }

function showMe(){
            if (this.nextElementSibling.className != "open") {
                this.nextElementSibling.className = "open";
            }
            else {
                this.nextElementSibling.className = "closed";
                alert('dont click me again, dick...');
            }