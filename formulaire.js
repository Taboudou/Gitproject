
document.getElementById("inscription").addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this.getElementsByTagName("input");
 
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
 
 
	var pseudo = document.getElementById("pseudo");
	var email = document.getElementById("email");
	var mdp = document.getElementById("mdp");
 
	if (!mdp.value) {
		erreur = "Veuillez renseigner un mot de passe";
	}
	if (!email.value) {
		erreur = "Veuillez renseigner un email";
	}
	if (!pseudo.value) {
		erreur = "Veuillez renseigner un pseudo";
	}
	
 
	
});

document.getElementById("mdp-conf").addEventListener("input", function(e) {
	var paragrapheErreur = document.getElementById("erreur");
 
	if (this.value != document.getElementById("mdp").value) {
		paragrapheErreur.innerHTML = "Les deux adresses email ne correspondent pas";
	} else {
		paragrapheErreur.innerHTML = "";
	}
});​


         
		  
        
