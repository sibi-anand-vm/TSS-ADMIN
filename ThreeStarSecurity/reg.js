function registervalid()
{
	var name=document.getElementById('regname').value;
	var email=document.getElementById('regmail').value;
	var pass=document.getElementById('regpass').value;
	var cpass=document.getElementById('regcpass').value;
	var nfl=0,nul=0,efl=0,fr=0;
if(name==''){
	alert("Enter Username");
	nfl=1;
	return false;
}  
if(email==''){
	alert("Enter Email");
	nul=1;
	return false;
}
if(pass==''){
	alert("Enter password");
	efl=2;
	return false;
}
if(cpass==''){
	alert("Enter Confirm password"); 
	fr=2;
	return false;
}
if(pass!=cpass){
alert("Password must match confirm password");
return false;
}
else
{
	efl=1;
	fr=0;
}
if(pass.length<9){
	alert("Password must contain above 8 characters");
	return false;
}
else
efl=0;
if(nfl==0 && nul==0 && fr==0 && efl==0)
alert("Registered Successfully");
} 