
$(document).ready(function() {								
	$("#start6").click( 
		function() {
			$(".dis").prop('disabled', true);
			console.log("its running");
			var flashes = [];
			var milis = [];
			const s_color = sessionStorage.getItem('s-color');
			const ISI = sessionStorage.getItem('duration_of_stimulus');
			const d_s = 100;
			const time = d_s + ISI;
			const n_t = sessionStorage.getItem('number_of_trials');
			
			number_of_trials = n_t;
			
			var all_chars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64];
			new_chars = shuffle(all_chars);
			number_of_trials--;
			
			for(a=0; a<number_of_trials; a++) {
				temp_chars = shuffle(all_chars);
				new_chars = new_chars.concat(temp_chars);
				if(a == number_of_trials-1){
					new_chars.unshift(64);
					//document.getElementById("data").innerHTML = new_chars;

				
				}
			}
						
			c=new_chars.length;
			i=0;
			
			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var n = d.getMilliseconds();
			var startTime = h + ":" + m + ":" + s + " -- " + "you choosed the sixth protocol";
			var fix_s = s+5;
			var firstStimulus = m + ":" + fix_s;
			document.getElementById("time").innerHTML = startTime;
			document.getElementById("f_s").innerHTML = firstStimulus;
			setTimeout(flash,5000);
			// 2 second pause before stimulus presentation starts
			var flash_time = d_s;			
			function flash() {
				
				if(sessionStorage.getItem("stop") === "false")
				{
					
				if(i<c) {				
					var flash_index = 10 + new_chars[i];
					requestAnimationFrame(() => {
					//light_unlit(flash_index,1); // highlight element
					$("." + flash_index).toggleClass( s_color );
					var d = new Date();
					var m = d.getMinutes();
					var s = d.getSeconds();
					var n = d.getMilliseconds();
					var mili_s = m*60*1000+1000*s+n;
					milis.push(mili_s);		
					new_time = (m + "," + s + "," + n);
					flashes.push(new_time)	
					})								
					setTimeout(
						function() {
							//light_unlit(flash_index,0); // revert element to default colour after flash							
							$("." + flash_index).toggleClass( s_color );
							setTimeout(flash,ISI);
						}
					,flash_time);
					}
					i++;
						if(i == c+1 && flashes){
							console.log(flashes);
							
							let milis1 = milis.slice(1, milis.length);
							console.log(milis1);
							
							for(i=0;i<milis1.length;i++){
							milis1[i] = -milis1[i] + milis1[i+1] - (time) + 99900
							}
							console.log(milis1);
							var total = 0;
							for(j = 0; j < milis1.length-1; j++) {
							    total += milis1[j];
							}
							var avg = total / (milis1.length-1);
							console.log(avg)
							flashes.push("Mean Error = " + avg)
						document.getElementById("data_time").innerHTML = (flashes.slice(1, flashes.length)).join('\r\n');
						$(".dis").prop('disabled', false);
					}	
					
				
				}
				
			
			}
			// recursive function to keep calling setTimeout until all characters have flashed	
			function light_unlit(char_index,state) {
				
				if(state==0) {
					stim_colour = "grey";
				} else {
					stim_colour = s_color;
				}
				// var char;
				
				// switch(char_index){
				// 	case 1: char = "A"; break;
				// 	case 2: char = "B"; break;
				// 	case 3: char = "C"; break;
				// 	case 4: char = "D"; break;
				// 	case 5: char = "E"; break;
				// 	case 6: char = "F"; break;
				// 	case 7: char = "G"; break;
				// 	case 8: char = "H"; break;
				// 	case 9: char = "I"; break;
				// 	case 10: char = "J"; break;
				// 	case 11: char = "K"; break;
				// 	case 12: char = "L"; break;
				// 	case 13: char = "M"; break;
				// 	case 14: char = "N"; break;
				// 	case 15: char = "O"; break;
				// 	case 16: char = "P"; break;
				// 	case 17: char = "Q"; break;
				// 	case 18: char = "R"; break;
				// 	case 19: char = "S"; break;
				// 	case 20: char = "T"; break;
				// 	case 21: char = "U"; break;
				// 	case 22: char = "V"; break;
				// 	case 23: char = "W"; break;
				// 	case 24: char = "X"; break;
				// 	case 25: char = "Y"; break;
				// 	case 26: char = "Z"; break;
				// 	case 27: char = "0"; break;
				// 	case 28: char = "1"; break;
				// 	case 29: char = "2"; break;
				// 	case 30: char = "3"; break;
				// 	case 31: char = "4"; break;
				// 	case 32: char = "5"; break;
				// 	case 33: char = "6"; break;
				// 	case 34: char = "7"; break;
				// 	case 35: char = "8"; break;
				// 	case 36: char = "9"; break;
				// 	case 37: char = "9"; break;
				// }
				// if(state == 1){
				// 	document.getElementById("data").innerHTML += char;
				// }
				
				// if(isNaN(char)){
				// 	$("#"+ char).css("background-color", stim_colour);
				// }else{
				// 	$("#"+ char).css("color", stim_colour);
				// }
				var char;
				
				switch(char_index){
					case 1: char = "??? "; break;
					case 2: char = "???"; break;
					case 3: char = "???"; break;
					case 4: char = "???"; break;
					case 5: char = "???"; break;
					case 6: char = "???"; break;
					case 7: char = "???"; break;
					case 8: char = "???"; break;
					case 9: char = "???"; break;
					case 10: char = "???"; break;
					case 11: char = "???"; break;
					case 12: char = "??????"; break;
					case 13: char = "??????"; break;
					case 14: char = "???"; break;
					case 15: char = "???"; break;
					case 16: char = "???"; break;
					case 17: char = "???"; break;
					case 18: char = "???"; break;
					case 19: char = "???"; break;
					case 20: char = "???"; break;
					case 21: char = "???"; break;
					case 22: char = "???"; break;
					case 23: char = "???"; break;
					case 24: char = "???"; break;
					case 25: char = "???"; break;
					case 26: char = "???"; break;
					case 27: char = "???"; break;
					case 28: char = "???"; break;
					case 29: char = "???"; break;
					case 30: char = "???"; break;
					case 31: char = "???"; break;
					case 32: char = "???"; break;
					case 33: char = "???"; break;
					case 34: char = "???"; break;
					case 35: char = "???"; break;
					case 36: char = "???"; break;
					case 37: char = "???"; break;
                    case 38: char = "???"; break;
					case 39: char = "???"; break;
					case 40: char = "???"; break;
					case 41: char = "???"; break;
					case 42: char = "???"; break;
					case 43: char = "???"; break;
					case 44: char = "???"; break;
					case 45: char = "???"; break;
					case 46: char = "???"; break;
					case 47: char = "???"; break;
					case 48: char = "?????????"; break;
					case 49: char = "?????????"; break;
					case 50: char = "?????????"; break;
					case 51: char = "???"; break;
					case 52: char = "???"; break;
					case 53: char = "???"; break;
					case 54: char = "???"; break;
					case 55: char = "???"; break;
					case 56: char = "???"; break;
					case 57: char = "???"; break;
					case 58: char = "???"; break;
					case 59: char = "???"; break;
					case 60: char = "???"; break;
					case 61: char = "hash"; break;
					case 62: char = "line"; break;
					case 63: char = "ques"; break;
					case 64: char = "colon"; break;
					case 64: char = "colon"; break;
				}
				$("#" + char).css("color", stim_colour);
				if(char === "hash"){
					char = "#"
				}
				if(char === "line"){
					char = "|"
				}
				if(char === "ques"){
					char = "?"
				}
				if(char == "colon"){
					char = ":"
				}			
				if(state == 1){
					document.getElementById("data").innerHTML += char;
				}
				

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
