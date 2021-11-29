
var lastShape = ""
		
$(document).ready(function() {
	var canvas = document.getElementById("draw")

	var ctxX = 0
	var ctxY = 0
			
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
var ctx = canvas.getContext("2d")
	$("#start2").click(
		async function() {

			
			$(".dis").prop('disabled', true);
			var flashes = [];
			var milis = [];
			const s_color = sessionStorage.getItem('s-color');
			const ISI = sessionStorage.getItem('duration_of_stimulus');
			const d_s = 100;
			const time = d_s + ISI;
			const n_t =  sessionStorage.getItem('number_of_trials');

			number_of_trials = n_t;

			var all_chars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
			//new_chars = [10,12,1,6,12,2,5,13];
			//new_chars= [10,4, 5,2, 11, 9, 5, 3, 6, , 12, 8,2,6, 9,4, 7,1,7, 5, , 10,8,2,5];
			new_chars=[10,12,1,6,12,2,5,13];
			number_of_trials--;

			for(a=0; a<number_of_trials; a++) {
				//temp_chars=[10,12,1,6,12,2,5,13];
				//temp_chars =[1,4, 5, 10, 2, 5, 3, 12, 6, 8,2,6,4, 7,1, 9, 11,7, 5, 8,2,12,,5];
				temp_chars= [10,12,1,6,12,2,5,13];
				new_chars = new_chars.concat(temp_chars);
				if(a == number_of_trials-1){
					new_chars.unshift(15);
					document.getElementById("data").innerHTML = new_chars.slice(1, new_chars.length);
				}
			}

			c=new_chars.length;
			i=0;
			console.log(c)
			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var n = d.getMilliseconds();
			var startTime = h + ":" + m + ":" + s + " -- " + "you chose the second protocol";;
			var fix_s = s+5;
			var firstStimulus = m + ":" + fix_s;
			// document.getElementById("time").innerHTML = startTime;
			// document.getElementById("f_s").innerHTML = firstStimulus;
			setTimeout(flash,5000);
			// 2 second pause before stimulus presentation starts
			var flash_time = d_s;
			function flash() {
				if(sessionStorage.getItem("stop") === "false"){
					if(i<c) {
						var flash_index = new_chars[i];
						requestAnimationFrame(() => {
							console.log(flash_index)
						light_unlit(flash_index,1); // highlight element
						var d = new Date();
						var m = d.getMinutes();
						var s = d.getSeconds();
						var n = d.getMilliseconds();
						var timer = m + ":" + s;
						//document.getElementById("timer").innerHTML = timer;
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
							//ocument.getElementById("data_time").innerHTML = (flashes.slice(1, flashes.length)).join('\r\n');
							$(".dis").prop('disabled', false);
						}
	
	
	
	
				}

		

			}
			var selected_numbers;

			// recursive function to keep calling setTimeout until all characters have flashed
			function light_unlit(char_index,state) {

				if(state==0) {
					stim_colour = "grey";
				} else {
					stim_colour = s_color;
				}
				
				var char;
				//console.log(char_index)
				switch(char_index){
					case 1: char = "A";
					//draw("circle", "black")
					lastShape = "circle"
					//console.log(lastShape)
					break;					
					case 2: char = "B";
					//draw("rectangle", "black")
					lastShape = "rectangle"
					//console.log(lastShape)
					 break;
					case 3:char="C";
					//draw("triangle", "black")
					lastShape = "triangle"
					//console.log(lastShape)
					break;					
					case 4:
						char="D";
						//draw("square", "black")
						lastShape = "square"
						//console.log(lastShape)
						break;
					case 5: 
						char = "E"
						color="red"
						draw(lastShape, "red")
						//console.log(lastShape)
					break;
					case 6: char = "F";
					color="blue"
					draw(lastShape, "blue")
					//console.log(lastShape)
					break;
					 case 7: char = "G";
					 color="green"
					draw(lastShape, "green")
					//console.log(lastShape)
					break;
					case 8: char = "H";
					color="yellow"
					draw(lastShape, "yellow")
					//console.log(lastShape)
					break;
					case 9:
						char = "I"
						ctxY -= 100
						break;
					case 10:
						char = "J"
						ctxY += 100
						break;
					case 11:
						char = "K"
						ctxX -= 100
						break;
					case 12:
						char = "L"
						ctxX += 100
						break;
					case 13:
						char="M"
						zoom(lastShape,color);
						break;
					case 14:
						char="N"
						unzoom(lastShape,color);
						break;
					case 15:
						char="O"
						break;
					case 16:
						char="P"
						break;

				}
				//selected_numbers += char;
				$("#" + char).css("color", stim_colour);

				if(state == 1){
					document.getElementById("data").innerHTML += char;
				}
				

			}

			function draw(shape, color){

				ctx.getTransform = function(){ return xform; };
				ctx.moveTo(ctxX, ctxY)

				if(shape == "circle"){
					ctx.beginPath();
					ctx.arc(ctxX, ctxY, 40, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fillStyle = color
					ctx.fill()

				}else if(shape == "triangle"){
					ctx.beginPath();
					ctx.moveTo(ctxX, ctxY);
					ctx.lineTo(ctxX + 25,ctxY + 25);
					ctx.lineTo(ctxX + 25,ctxY - 25);
					ctx.fillStyle = color
					ctx.fill()

				}else if(shape == "rectangle"){
					ctx.beginPath();
					ctx.rect(ctxX, ctxY, 150, 100);
					console.log("ctxX in drw",ctxX)
					console.log("ctxY in draw",ctxY)
					ctx.stroke();
					ctx.fillStyle = color
					ctx.fill()
					ctx.closePath()
				}else if(shape == "square"){
					ctx.rect(ctxX,ctxY,100,100);
					ctx.fillStyle = color
					ctx.fill()
				}
			}
			

			 function zoom(lastshape,color)
			{
				ctx.getTransform = function(){ return xform; };
				//ctx.moveTo(ctxX, ctxY)

				if(lastShape=="rectangle")
				{
					
					ctx.moveTo(ctxX, ctxY)
					ctx.beginPath();
					ctx.rect(ctxX, ctxY, 150, 100);
					console.log("ctxX in zoom",ctxX)
					console.log("ctxY in zoom",ctxY)
					ctx.stroke();
					ctx.fillStyle = color
					ctx.fill()
					ctx.scale(2, 2);

				}
				else if(lastShape=="circle")
				{
					ctx.beginPath();
					ctx.arc(ctxX/2, ctxY/2, 40, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fillStyle = color
					ctx.fill()
					ctx.scale(2,2);
				}
				else if(lastShape=="square")
				{
					ctx.rect(ctxX,ctxY,100,100);
					ctx.fillStyle = color
					ctx.fill()
					ctx.scale(2,2)
				}
				else if(lastShape=="triangle")
				{
					ctx.beginPath();
					ctx.moveTo(ctxX, ctxY);
					ctx.lineTo(ctxX + 25,ctxY + 25);
					ctx.lineTo(ctxX + 25,ctxY - 25);
					ctx.fillStyle = color
					ctx.fill()
					ctx.scale(2,2)
				}
				
			}
			function unzoom(lastshape,color)
			{
				ctx.getTransform = function(){ return xform; };
				ctx.moveTo(ctxX, ctxY)

				if(lastShape=="rectangle")
				{
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					ctx.beginPath();
					ctx.rect(ctxX, ctxY, 150, 100);
					ctx.stroke();
					ctx.fillStyle = color
					ctx.fill()
				    ctx.scale(0.5,0.5);
				}
				else if(lastShape=="circle")
				{
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					ctx.beginPath();
					ctx.arc(ctxX, ctxY, 40, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fillStyle = color
					ctx.fill()
					ctx.scale(0.5,0.5);
				}
				else if(lastShape=="square")
				{
					ctx.rect(ctxX,ctxY,100,100);
					ctx.fillStyle = color
					ctx.fill()
					ctx.scale(0.5,0.5)
				}
				else if(lastShape=="triangle")
				{
					ctx.beginPath();
					ctx.moveTo(ctxX, ctxY);
					ctx.lineTo(ctxX + 25,ctxY + 25);
					ctx.lineTo(ctxX + 25,ctxY - 25);
					ctx.fillStyle = color
					ctx.fill()
					ctx.scale(0.5,0.5)
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
