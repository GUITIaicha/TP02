function validateForm() {
	
	
	if(document.getElementById("Nom").value.length < 4)
	{
		document.getElementById("Resultat").setAttribute('style','display:none');
		document.getElementById("error").setAttribute('style','display:block');
		document.getElementById("error").innerHTML ="le nom doit contenir au moins 4 caractes";
		
	}
	
	
	
	else if(document.getElementById("Prenom").value.length < 4)
	{
		document.getElementById("Resultat").setAttribute('style','display:none')
		document.getElementById("error").setAttribute('style','display:block')
		document.getElementById("error").innerHTML ="le Prenom doit contenir au moins 4 caractes";
		
	}
	
	else if(document.getElementById("Date de naissance").value.length < 4)
	{
		document.getElementById("Resultat").setAttribute('style','display:none')
		document.getElementById("error").setAttribute('style','display:block')
		document.getElementById("error").innerHTML ="la La saisie Date de naissanceest obligatoire";
		
	}
	
	
	else if(document.getElementById("Adresse").value.length < 4)
	{
		document.getElementById("Resultat").setAttribute('style','display:none')
		document.getElementById("error").setAttribute('style','display:block')
		document.getElementById("error").innerHTML ="l'adresse doit contenir au moins 4 caractes";
		
	}
	
	else if(document.getElementById("Mail").value.length < 4)
	{
		document.getElementById("Resultat").setAttribute('style','display:none')
		document.getElementById("error").setAttribute('style','display:block')
		document.getElementById("error").innerHTML ="le Mail doit contenir au moins 4 caractes";
		
	}
	
	
	else{
		
		document.getElementById("Resultat").setAttribute('style','display:block');
		document.getElementById("error").setAttribute('style','display:none');
		document.getElementById("Resultat").innerHTML ="Binvenue  " +document.querySelector("#Nom").value+ " " +document.querySelector("#Prenom") .value;
		
		
	}
}