 var numbers = [2, 5, 55, 0, 4, 5],
 	containsZero = false;

 for(var i=0; i<numbers.length; i++) {
 	console.log(numbers[i]);

 	if(numbers[i] === 0){
 		containsZero = true;
 		break;

 	}

 }
