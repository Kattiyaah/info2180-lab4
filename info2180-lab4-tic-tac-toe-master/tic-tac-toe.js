
window.onload = firstFunction;
var arr = ["","","","","","","","",""];
var last = "O"


function firstFunction(){
	var element= document.getElementById("board").children;
	var bot = document.getElementsByClassName("btn")[0];
	var stats = document.getElementById("status"); 
	for (var i=0;i<=9;i++){
		var box= element[i]; 
  		box.classList.add("square");   }   
  	addEvents(element); 

  	bot.onclick = function(){
    var arr = ["","","","","","","","",""];
    var last = "O";
    stats.innerHTML = "Move your mouse over a square and click to play an X or an O.";  
    stats.classList.remove("won");
    for (i=0;i<9;i++){
    	var box = element[i];
    	if (box.textContent = "O")
    	 		{box.classList.remove("O");}
		else{
			box.classList.remove("X");}

  			box.innerHTML = "";  
  			 } 

            firstFunction();
       } 

   }

   function event_handling(element){
	clickFunction(element[0],element[1],element[2], element[3],element[4],element[5],element[6],element[7],element[8])
	hoverFunction(element[0],element[1],element[2], element[3],element[4],element[5],element[6],element[7],element[8]);
	hoverOFunction(element[0],element[1],element[2], element[3],element[4],element[5],element[6],element[7],element[8]);}

	function clickFunction(x,box){
		
		if(last == "O"){
			x.innerHTML = "X";
    		x.classList.add("X");
    		last = "X";
    		arr[box]=last;}
    	else{
    		x.innerHTML = "O";
    		x.classList.add("O");
    		last = "O";
    		arr[box]=last;}

        checkForWinner(arr);
         x.onclick = null;
     }

function checkWinner(arr){
    	var list =["X","O"];
    	var l;
    	var p = 0;
    	while (p<2){
    		l = list[p];
    		if(((arr[0]==l) && (arr[1]==l) && (arr[2]==l))|| ((arr[3]==l) && (arr[4]==l) && (arr[5]==l))|| ((arr[6]==l) && (arr[7]==l) && (arr[8]==l))|| ((arr[0]==l) && (arr[3]==l) && (arr[6]==l))|| ((arr[1]==l) && (arr[4]==l) && (arr[7]==l))|| ((arr[2]==l) && (arr[5]==l) && (arr[8]==l))
|| ((arr[0]==l) && (arr[4]==l) && (arr[8]==l))|| ((arr[2]==l) && (arr[4]==l) && (arr[6]==l)))
    			{displayCongrats(l);}
    		p = p +1;
    	}}

function displayCongrats(l){
    var stat = document.getElementById("status");
    stat.innerHTML = "Congratulations! " + l + " is the Winner!";
    stat.classList.add("won");}

function hoverHandler(element){
    element.classList.add("hover");}

function hoverOHandler(element){
    	element.classList.remove("hover")}
    				
function clickFunction(a,b,c,d,e,f,g,h,i){
    a.onclick = function(){clickHandler(a,0);}
   	b.onclick = function(){clickHandler(b,1);}
    c.onclick = function(){clickHandler(c,2);}
    d.onclick = function(){clickHandler(d,3);}
    e.onclick = function(){clickHandler(e,4);}
    f.onclick = function(){clickHandler(f,5);}
    g.onclick = function(){clickHandler(g,6);}
    h.onclick = function(){clickHandler(h,7);}
    i.onclick = function(){clickHandler(i,8);}}

function hoverFunction(a,b,c,d,e,f,g,h,i){
    a.onmouseover = function(){hoverHandler(a);}
    b.onmouseover = function(){hoverHandler(b)}
    c.onmouseover = function(){hoverHandler(c)}
    d.onmouseover = function(){hoverHandler(d)}
    e.onmouseover = function(){hoverHandler(e)}
	f.onmouseover = function(){hoverHandler(f)}
	g.onmouseover = function(){hoverHandler(g)}
	h.onmouseover = function(){hoverHandler(h)}
	i.onmouseover = function(){hoverHandler(i)}}

function hoverOFunction(a,b,c,d,e,f,g,h,i){
	a.onmouseout = function(){hoverOHandler(a);}
	b.onmouseout = function(){hoverOHandler(b)} 
	c.onmouseout = function(){hoverOHandler(c)} 
    d.onmouseout = function(){hoverOHandler(d)}
	e.onmouseout = function(){hoverOHandler(e)}
	f.onmouseout = function(){hoverOHandler(f)}
	g.onmouseout = function(){hoverOHandler(g)}
	h.onmouseout = function(){hoverOHandler(h)}
	i.onmouseout = function(){hoverOHandler(i)}}



	





    