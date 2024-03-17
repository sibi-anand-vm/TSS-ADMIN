function logvalid(){
	var nam=document.getElementById('usname').value;
	var mail=document.getElementById('usmail').value;
	var upass=document.getElementById('uspass').value;
	var nfl=0,nul=0,efl=0;
if(nam==''){
	alert("Enter Username");
	nfl=1;
	return false;
} 
if(mail==''){
	alert("Enter Email");
	nul=1;
	return false;
}
if(upass==''){
	alert("Enter password");
	efl=1;
	return false;
}
else
{
	efl=0;
}
if(nfl==0 && nul==0 && efl==0)
alert("Log In success");
}