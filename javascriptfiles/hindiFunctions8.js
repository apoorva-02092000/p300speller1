$(document).ready(function() {
	$("#start8").click(
			function() {
				$(".dis").prop('disabled', true);
				console.log("its running");
				var flashes = [];
				var milis = [];
				const s_color = sessionStorage.getItem('s-color');
				const ISI = sessionStorage.getItem('duration_of_stimulus');
				const d_s = 100;
				const time = d_s +  parseInt(ISI);
				const n_t = sessionStorage.getItem('number_of_trials');


			number_of_trials = n_t;

			var all_chars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64];
			new_chars = shuffle(all_chars);
			number_of_trials--;

			for(a=0; a<number_of_trials; a++) {
				temp_chars = shuffle(all_chars);
				new_chars = new_chars.concat(temp_chars);
				if(a == number_of_trials-1){
					new_chars.unshift(65);
				document.getElementById("data").innerHTML = new_chars.slice(1, new_chars.length);
				}
			}

			c=new_chars.length;
			i=0;

			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var n = d.getMilliseconds();
			var startTime = h + ":" + m + ":" + s + " -- " + "you choosed the eighth protocol";;
			var fix_s = s+5;
			var firstStimulus = m + ":" + fix_s;
			document.getElementById("time").innerHTML = startTime;
			document.getElementById("f_s").innerHTML = firstStimulus;
			setTimeout(flash,5000);
			// 2 second pause before stimulus presentation starts
			function flash() {
				count=0;
				var x=setInterval(function(){
  				var flash_index = 10 + new_chars[count];
  				requestAnimationFrame(() => {
  				$("." + flash_index).toggleClass( s_color );
  				  	var d = new Date();
					var m = d.getMinutes();
					var s = d.getSeconds();
					var n = d.getMilliseconds();
				var mili_s = m*60*1000+1000*s+n;
					milis.push(mili_s);
					new_time = (m + "," + s + "," + n);
					flashes.push(new_time);
					});
  				setTimeout(
						function() {
						$("." + flash_index).toggleClass( s_color );
						}
					,d_s);
  				if(count > c-1) {
  					clearInterval(x);
						let milis1 = milis.slice(1, milis.length);

						for(i=0;i<milis1.length;i++){
						milis1[i] = -milis1[i] + milis1[i+1] - (time)
						}
						var total = 0;
						for(j = 0; j < milis1.length-1; j++) {
						    total += milis1[j];
						}
						var avg = total / (milis1.length-1);
						flashes.push("Mean Error = " + avg)
						document.getElementById("data_time").innerHTML = (flashes.slice(1, flashes.length)).join('\r\n');
						$(".dis").prop('disabled', false);

  				}
  				count++;
				}, time);
			}

			function shuffle(array) {
				var currentIndex = array.length, temporaryValue, randomIndex;

				// While there remain elements to shuffle...
				while (0 !== currentIndex) {

					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					// And swap it with the current element.
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}

				return array;
			}
		}
	);

});
