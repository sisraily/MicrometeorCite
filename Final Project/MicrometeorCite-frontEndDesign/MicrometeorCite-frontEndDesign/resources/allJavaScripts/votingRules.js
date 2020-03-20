
var currStatus = 1

function checkVotingStatus(){
	return currStatus
}

function castVote() {

	if(checkVotingStatus()==1){
		//update vote totals for this meteorite and set user status to 0
		alert("Your vote has been cast!")
	}
	else(){
		alert("You have already cast a vote for this meteorite!")
	}
}


