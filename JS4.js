 $(document).ready(function() {
	 
	 var animal_array = ["koala", "panda", "dolphin", "quokka"];
	 	 
	 for (var i=0; i<animal_array.length; i++){
	 //console.log("i=" + i);
		$("#results").append(animal_array[i]+"<br>")
		
	 }
 });
 