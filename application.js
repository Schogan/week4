function processForm() {
	
		var firstlast;
		var address;
		var phonenumber;
		var comment;
		var content;
	
		
		
		firstlast = document.getElementById("firstlast");
		address = document.getElementById("address");
		phonenumber = document.getElementById("phonenumber");
		comment = document.getElementById("comment");
		content = document.getElementById("output")
		
		content.innerText = "Your Contact information is: " + 
			 " First/Last name - " + firstlast.value +
			 " Address - " + address.value +
			 " Phone Number - " + phonenumber.value + 
			 " Comments - " + comment.value 




}