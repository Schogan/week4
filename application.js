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
		
		content.innerText = "Your Contact information is: " + "\n" + "\n" +
			 " First/Last name - " + firstlast.value + "\n" +
			 " Address - " + address.value + "\n" +
			 " Phone Number - " + phonenumber.value + "\n" +
			 " Comments - " + comment.value 




}