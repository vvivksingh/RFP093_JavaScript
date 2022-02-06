var arrayInteger = new Array();
    for ( let i = 0 ; i < 10 ; i++ ){
	    arrayInteger[i] = Math.floor(Math.random() * 20) -10;
    }
        console.log("Array :"+arrayInteger);
        var isSumZero = 0;
        for( let j = 0 ; j < 8 ; j++ ){
	        for(let k = j + 1 ; k < 9 ; k++ ){
		        for(let l = k + 1 ; l < 10 ; l++ ){
			        if( arrayInteger[j] + arrayInteger[k] + arrayInteger[l] == 0){
				    console.log( arrayInteger[j] + " +" + arrayInteger[k] + " +" + arrayInteger[l] + " = 0");
				    isSumZero = 1;
			    }
		    }   
	    }
    }
    if( isSumZero == 0)
	console.log("No three integer sum is zero");