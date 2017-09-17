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
	}

	for (var i=0; i<res.length; i++) {
		res.map( function(el) {
			return el.unshift(0);
		});
		let x = 0;
		let j = 0;
		s[j] = 0;
		while (x!=res[i].length) {
			s[j] += res[i][x];
			x++;
			console.log(s);
		}
		j++;
	}

	return res;
}
