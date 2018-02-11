
document.addEventListener('DOMContentLoaded', () => {
 
 var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			
			var val = xhr.responseText;
			document.getElementById("joke").innerHTML = JSON.parse(val).value;
		}
	}
	xhr.withCredentials = false;
	xhr.open('GET',"https://api.chucknorris.io/jokes/random", true);
	xhr.send(null);
	
	
});
