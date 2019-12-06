/*
GAURANG VERENKAR
2019-12-07
timepass
*/

var output = document.getElementById('display_val');

function drawShap() {
	var n = document.getElementById('entred_value').value;
	output.innerHTML = '';
	var i = (j = k = 1);
	var mean = 0;
	var even = n % 2;
	mean = n / 2;
	var temp = (temp2 = temp4 = temp3 = '');
	for (i = 1; i <= mean; i++) {
		temp3 = '';
		for (j = 1; j <= i; j++) {
			temp3 += '*';
		}
		temp2 = '';
		for (k = 1; k <= n - i * 2; k++) {
			temp2 += ' ';
		}
		temp4 = temp3 + temp2 + temp3;
		temp += temp4;
		temp += '\n';
		console.log(i + '-' + temp4);
	}
	// output.innerHTML = temp;
	console.log(even);
	if (even) {
		temp += temp3 + '*' + temp3 + '\n';
		console.log('even');
	} else {
		console.log('back');
	}

	console.log('back');
	temp4 = temp3 = '';
	// temp = '';
	for (--i; i >= 1; i--) {
		temp3 = '';

		for (j = i; j >= 1; j--) {
			temp3 += '*';
		}

		temp2 = '';
		for (k = n - i * 2; k >= 1; k--) {
			temp2 += ' ';
		}
		temp4 = temp3 + temp2 + temp3;
		temp += temp4;
		temp += '\n';
		console.log(i + '-' + temp4);
	}
	console.log(temp);
	output.innerHTML += '<h2><b>' + temp + '</h2></b>';
}
