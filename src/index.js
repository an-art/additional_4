module.exports = function multiply(first, second) { 
	var fir = first.split('').reverse().map( function(n) { 
	return +n; 
	}); 
	var sec = second.split('').reverse().map( function(n) { 
	return +n; 
	}); 
	var res = []; 
	
	for (var i=0; i<sec.length; i++) { 
		var prev_result = 0; 
		var fl = fir.length; 
		res[i] = fir.map( function(el) { 
			var mult = sec[i] * el; 
			var rest = mult % 10; 
			var result = Math.floor(mult / 10); 
			var sum = prev_result + rest; 
			fl--; 
			prev_result = result; 
			if (sum>=10 && fl>0) { 
				sum -= 10; 
				prev_result++; 
			} 
			return sum; 
		}); 
if (prev_result!=0) res[i][fir.length] = prev_result;
		var new_i = i; 
		while (new_i!=0) { 
			res[i].unshift(0); 
			new_i--; 
		} 
		var rl = res[i].length;
	} 
	
	
	var prod = []; 
	var prev_res = 0;
	var rl2 = rl;
	for (var j=0; j<rl; j++) { 
		prod[j] = 0;
		for (var l=0; l<res.length; l++) { 
			if(res[l][j]===undefined) res[l][j]=0; 
			prod[j] += res[l][j];  
		}
		var rest = prod[j] % 10; 
		var result = Math.floor(prod[j] / 10); 
		prod[j] = prev_res + rest; 
		rl2--; 
		prev_res = result; 

		while (prod[j]>=10 && !prod[rl-1]) { 
			prod[j] -= 10; 
			prev_res++; 
		} 
	} 

	return prod.reverse().join(''); 

	}

