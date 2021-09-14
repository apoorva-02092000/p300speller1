$(document).ready(function() {								
	$("#start4").click( 
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
			
			all_chars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64];
			new_chars = shuffle(all_chars);
			number_of_trials--;
			
			for(a=0; a<number_of_trials; a++) {
				temp_chars = shuffle(all_chars);
				new_chars = new_chars.concat(temp_chars);
				if(a == number_of_trials-1){
					new_chars.unshift(65);
				//document.getElementById("data").innerHTML = new_chars.slice(1, new_chars.length);
				}
			}
						
			c=new_chars.length;
			i=0;
			
			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var n = d.getMilliseconds();
			var startTime = h + ":" + m + ":" + s + " -- " + "you choosed the fourth protocol";;
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
					var flash_index = new_chars[i];
					requestAnimationFrame(() => {
					light_unlit(flash_index,1); // highlight element
					var d = new Date();
					var m = d.getMinutes();
					var s = d.getSeconds();
					var n = d.getMilliseconds();
					var timer = m + ":" + s;
					document.getElementById("timer").innerHTML = timer;
					var mili_s = m*60*1000+1000*s+n;
					milis.push(mili_s);		
					new_time = (m + "," + s + "," + n);
					flashes.push(new_time)	
					})								
					setTimeout(
						function() {
							light_unlit(flash_index,0); // revert element to default colour after flash							
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

				var char;
				
				switch(char_index){
					case 1: char = "आ "; break;
					case 2: char = "आ"; break;
					case 3: char = "इ"; break;
					case 4: char = "ई"; break;
					case 5: char = "उ"; break;
					case 6: char = "ऊ"; break;
					case 7: char = "ऋ"; break;
					case 8: char = "ए"; break;
					case 9: char = "ऐ"; break;
					case 10: char = "ओ"; break;
					case 11: char = "औ"; break;
					case 12: char = "अं"; break;
					case 13: char = "अः"; break;
					case 14: char = "क"; break;
					case 15: char = "ख"; break;
					case 16: char = "ग"; break;
					case 17: char = "घ"; break;
					case 18: char = "ङ"; break;
					case 19: char = "च"; break;
					case 20: char = "छ"; break;
					case 21: char = "ज"; break;
					case 22: char = "झ"; break;
					case 23: char = "ञ"; break;
					case 24: char = "ट"; break;
					case 25: char = "ठ"; break;
					case 26: char = "ड"; break;
					case 27: char = "ढ"; break;
					case 28: char = "ण"; break;
					case 29: char = "त"; break;
					case 30: char = "थ"; break;
					case 31: char = "द"; break;
					case 32: char = "ध"; break;
					case 33: char = "न"; break;
					case 34: char = "प"; break;
					case 35: char = "फ"; break;
					case 36: char = "ब"; break;
					case 37: char = "भ"; break;
                    case 38: char = "म"; break;
					case 39: char = "य"; break;
					case 40: char = "र"; break;
					case 41: char = "ल"; break;
					case 42: char = "ळ"; break;
					case 43: char = "व"; break;
					case 44: char = "श"; break;
					case 45: char = "ष"; break;
					case 46: char = "स"; break;
					case 47: char = "ह"; break;
					case 48: char = "क्ष"; break;
					case 49: char = "त्र"; break;
					case 50: char = "ज्ञ"; break;
					case 51: char = "०"; break;
					case 52: char = "१"; break;
					case 53: char = "२"; break;
					case 54: char = "३"; break;
					case 55: char = "४"; break;
					case 56: char = "५"; break;
					case 57: char = "६"; break;
					case 58: char = "७"; break;
					case 59: char = "८"; break;
					case 60: char = "९"; break;
					case 61: char = "#"; break;
					case 62: char = "|"; break;
					case 63: char = "?"; break;
					case 64: char = ":"; break;
					case 64: char = ":"; break;

				}
				$("#" + char).css("color", stim_colour); 
				
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