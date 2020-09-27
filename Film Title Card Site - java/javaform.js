function hello() {
  Check(); 
  customPic();
}





function Check(){
		var email1 = document.getElementById('email_addr');
		var email2 = document.getElementById('email_repeat');
		if (email1.value != email2.value)	{
			alert("Don't be daft now, match the emails!!");
			return false;
		}
}


function customPic(){
	var name1 = document.getElementById('username');
	if (name1.value === "Kristen") {
	document.getElementById("kkristen")
	kkristen.style.display = "inline-block";
	
} 
}

