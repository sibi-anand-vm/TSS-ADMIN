function reviewvalid(){
var rname=document.getElementById('rname').value;
var rnum=document.getElementById('rnum').value;
var remail=document.getElementById('remail').value;
var rrev=document.getElementById('rrev').value;
var nafl=0,nufl=0,emfl=0,flr=0;
if(rname==''){
	alert("Enter name properly");
	nafl=1
	return false;
}
if(rnum==''){
	alert("Enter number properly");
	nufl=1;
	return false;
}
if(remail==''){
	alert("Enter email properly");
	emfl=1;
	return false;
}
if(rrev==''){
	alert("Enter review properly"); 
	flr=1;
	return false;
}
if(nufl==0 && nafl==0 && flr==0 && emfl==0)
alert("Review Submitted Successfully");
}