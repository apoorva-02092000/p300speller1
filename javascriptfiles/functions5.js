$(document).ready(function() {							
	$("#start5").click( 
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
			
			var all_chars = [1,2,3,4,5,6,7,8,9,10,11,12];
			new_chars = shuffle(all_chars);
			number_of_trials--;
			
			for(a=0; a<number_of_trials; a++) {
				temp_chars = shuffle(all_chars);
				new_chars = new_chars.concat(temp_chars);
				if(a == number_of_trials-1){
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
			var startTime = h + ":" + m + ":" + s + " -- " + "you choosed the fifth protocol";;
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
					for(i=0;i<milis.length-1;i++){
						milis[i] = -milis[i] + milis[i+1] - (time) + 99900
					}
					var total = 0;
					for(j = 0; j < milis.length-1; j++) {
					    total += milis[j];
					}
					console.log(milis,total)
					var avg = total / (milis.length-1);
					flashes.push("Mean Error = " + avg)
				document.getElementById("data_time").innerHTML = flashes.join('\r\n');
				$(".dis").prop('disabled', false);
					}
				
				}
			
			}
			// recursive function to keep calling setTimeout until all characters have flashed	
			function light_unlit(char_index, state) {
				
				switch(char_index) {
				case 1: $(".a1").toggleClass( s_color ); break;
				case 2: $(".a2").toggleClass( s_color ); break;
				case 3: $(".a3").toggleClass( s_color ); break;
				case 4: $(".a4").toggleClass( s_color ); break;
				case 5: $(".a5").toggleClass( s_color ); break;
				case 6: $(".a6").toggleClass( s_color ); break;
				case 7: $(".a7").toggleClass( s_color ); break;
				case 8: $(".a8").toggleClass( s_color ); break;
				case 9: $(".a9").toggleClass( s_color ); break;
				case 10: $(".a10").toggleClass( s_color ); break;
				case 11: $(".a11").toggleClass( s_color ); break;
				case 12: $(".a12").toggleClass( s_color ); break;
				default: 
				}
				if(state == 1){
					document.getElementById("data").innerHTML += char_index + ',';
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