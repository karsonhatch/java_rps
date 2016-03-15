var arr = ["Rock", "Paper", "Scissors"]

function sample(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}



function rock(){
	var comp = sample(arr)
	var result = document.getElementById('result')
	if (comp === "Rock") {
		result.innerHTML = "COMPUTER: ROCK <hr />TIED! <br />Well tickle my nips, you tied."
	} else if (comp === "Paper") {
		result.innerHTML = "COMPUTER: PAPER <hr />LOOSE! <br />You got pwned, faggot."
	} else if (comp === "Scissors") {
		result.innerHTML = "COMPUTER: SCISSORS <hr />WINNER! <br />You SMASHED that shite!"
	} else {
		console.log("This shouldn't be here")
		result.innerHTML = " "
	}
}

function paper(){
	var comp = sample(arr)
	var result = document.getElementById('result')
	if (comp === "Rock") {
		result.innerHTML = "COMPUTER: ROCK <hr />WINNER! <br />Smother! I 'ARDLY KNOW ER!"
	} else if (comp === "Paper") {
		result.innerHTML = "COMPUTER: PAPER <hr />TIED! <br />Sweet sassy molassy! You TIED!"
	} else if (comp === "Scissors") {
		result.innerHTML = "COMPUTER: SCISSORS <hr />LOSE! <br />You were sliced to ficken peices!"
	} else {
		console.log("This shouldn't be here")
		result.innerHTML = " "
	}
}

function scissors(){
	var comp = sample(arr)
	var result = document.getElementById('result')
	if (comp === "Rock") {
		result.innerHTML = "COMPUTER: ROCK<hr /> LOSE!<br /> REKT."
	} else if (comp === "Paper") {
		result.innerHTML = "COMPUTER: PAPER <hr />WINNER! <br />You limey bastard! You sliced that paper UP!"
	} else if (comp === "Scissors") {
		result.innerHTML = "COMPUTER: SCISSORS <hr />TIED! <br />Can't cut scissors bro."
	} else {
		console.log("This shouldn't be here")
		result.innerHTML = " "
	}
}


