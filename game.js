var counter = 0;
var paper_counter= 0;
var rock_counter = 0;
var scissor_counter = 0;
var win = 0;
function play()
{
		counter ++;
		document.getElementById('history').innerHTML = counter;
		var computer_value =  Math.floor(Math.random()*3);
		if (computer_value == 0) 
			{
			computer_value = "Rock";
			}

		else if (computer_value == 1) 
			{
			computer_value = "Paper";
			}
		else
			{
			computer_value = "Scissors"
			}
			document.getElementById('ranSelection1').innerHTML = computer_value;
			document.getElementById('ranSelection2').innerHTML = computer_value;
		
			var user_value = document.getElementById('game_form').useroption.value;
			document.getElementById('yourSelection').innerHTML = user_value;


		var outcome;
		if(computer_value == "Rock" && user_value == "Rock")
			{
			outcome = "Tie";	
			}
		else if(computer_value == "Paper" && user_value == "Rock") 
			{
			outcome = "Computer Wins!"	
			}
		else if(computer_value == "Scissors" && user_value == "Rock" )  
			{
			outcome = "You Win!"
			win++;
			document.getElementById('win').innerHTML = win;
			}
		else if (computer_value == "Rock" && user_value == "Paper") 
			{
			outcome = "You Win!"
			win++;
			document.getElementById('win').innerHTML = win;
			}
		else if (computer_value == "Paper" && user_value == "Paper") 	
			{
			outcome = "tie"	
			}
		else if (computer_value == "Scissors" && user_value == "Paper") 
			{
			outcome = "Computer Wins!"	
			}
		else if (computer_value == "Rock" && user_value == "Scissors")
			{	
			outcome = "Computer Wins!"	
			}

		else if (computer_value == "Paper" && user_value == "Scissors")
			{
			outcome = "You win!"
			win++;
			document.getElementById('win').innerHTML = win;	
			}
		else if (computer_value == "Scissors" && user_value == "Scissors")
			{
			outcome = "tie";
			}
	document.getElementById('scoreboard').innerHTML = outcome;


	var user_value = document.getElementById('game_form').useroption.value;
		document.getElementById('yourSelection').innerHTML = user_value;
		if (user_value == "Rock")
			{
			rock_counter++;
			document.getElementById('rock#').innerHTML = rock_counter;	
			}
		else if (user_value == "Paper")
			{
			paper_counter++;
			document.getElementById('paper#').innerHTML = paper_counter;	
			}
		else if (user_value == "Scissors")
			{
			scissor_counter++;
			document.getElementById('scissors#').innerHTML = scissor_counter;	
			}

}


