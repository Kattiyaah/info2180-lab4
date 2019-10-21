function myFuntion(){
	var iD = document.getElementById("board").innerHTML;
	for (var i=0; i<=9; i++){
		iD[i].classList.add("square");
	}
}