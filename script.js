function populate(s1,s2){
  //selection1 and selection2
  //objects repesent the select elements on the page
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
  //clear out what is already in the list
	s2.innerHTML = "";
	if(s1.value == "Chevy"){
    //the first option is just a blanc
    //value|label
		var optionArray = ["|","camaro|Camaro","corvette|Corvette","impala|Impala"];
	} else if(s1.value == "Dodge"){
		var optionArray = ["|","avenger|Avenger","challenger|Challenger","charger|Charger"];
	} else if(s1.value == "Ford"){
		var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
	}
  //for all of the options within the options array this loop will run once for each one of these options. This means this loop will run 4 times.
	for(var option in optionArray){
    //split is going two give us two small arrays. These are arrays are splitted by the delimeter |
		var pair = optionArray[option].split("|");
    //create new option for the html (it could be div, p, or anything else)
		var newOption = document.createElement("option");
    //for e.g
    //pair[0] is avenger
    //pair[1] is Avanger
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}