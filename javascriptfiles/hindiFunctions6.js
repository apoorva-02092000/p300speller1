
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
					new_chars.unshift(26);
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
			var startTime = h + ":" + m + ":" + s + " -- " + "you choosed the sixth protocol";
			var fix_s = s+5;
			var firstStimulus = m + ":" + fix_s;
			document.getElementById("time").innerHTML = startTime;
			document.getElementById("f_s").innerHTML = firstStimulus;
			setTimeout(flash,5000);
			// 2 second pause before stimulus presentation starts
			var flash_time = d_s;			
			function flash() {
				
					
				if(i<c) {				
					var flash_index = 10 + new_chars[i];
					requestAnimationFrame(() => {
					light_unlit(flash_index,1); // highlight element
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
							light_unlit(flash_index,0); // revert element to default colour after flash							
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
			// recursive function to keep calling setTimeout until all characters have flashed	
			function light_unlit(char_index,state) {
				
				if(state==0) {
					stim_colour = "grey";
				} else {
					stim_colour = s_color;
				}
				
				switch(char_index) {
				case 1: $("#A").css("background-color",stim_colour); break;
				case 2: $("#B").css("background-color",stim_colour); break;
				case 3: $("#C").css("background-color",stim_colour); break;
				case 4: $("#D").css("background-color",stim_colour); break;
				case 5: $("#E").css("background-color",stim_colour); break;
				case 6: $("#F").css("background-color",stim_colour); break;
				case 7: $("#G").css("background-color",stim_colour); break;
				case 8: $("#H").css("background-color",stim_colour); break;
				case 9: $("#I").css("background-color",stim_colour); break;
				case 10: $("#J").css("background-color",stim_colour); break;
				case 11: $("#K").css("background-color",stim_colour); break;
				case 12: $("#L").css("background-color",stim_colour); break;
				case 13: $("#M").css("background-color",stim_colour); break;
				case 14: $("#N").css("background-color",stim_colour); break;
				case 15: $("#O").css("background-color",stim_colour); break;
				case 16: $("#P").css("background-color",stim_colour); break;
				case 17: $("#Q").css("background-color",stim_colour); break;
				case 18: $("#R").css("background-color",stim_colour); break;
				case 19: $("#S").css("background-color",stim_colour); break;
				case 20: $("#T").css("background-color",stim_colour); break;
				case 21: $("#U").css("background-color",stim_colour); break;
				case 22: $("#V").css("background-color",stim_colour); break;
				case 23: $("#W").css("background-color",stim_colour); break;
				case 24: $("#X").css("background-color",stim_colour); break;
				case 25: $("#Y").css("background-color",stim_colour); break;
				case 26: $("#Z").css("color",stim_colour); break;
				case 27: $("#0").css("color",stim_colour); break;
				case 28: $("#1").css("color",stim_colour); break;
				case 29: $("#2").css("color",stim_colour); break;
				case 30: $("#3").css("color",stim_colour); break;
				case 31: $("#4").css("color",stim_colour); break;
				case 32: $("#5").css("color",stim_colour); break;
				case 33: $("#6").css("color",stim_colour); break;
				case 34: $("#7").css("color",stim_colour); break;
				case 35: $("#8").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 37: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				default: 
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
