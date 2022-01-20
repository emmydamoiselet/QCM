//Création des variables

var speechstr='"';
var Q0= new String
var Q1= new String
var Q2= new String
var Q3= new String
var Q4= new String
var Q5= new String
var Q6= new String
var Q7= new String

function Mark(){
	var i=0;
	t=8;
	Answers=window.open("", "", "width=350, height=250");
if (Q0.toLowerCase()=="c")
{
	i=i+1;
}
if (Q1.toLowerCase()=="b")
{
	i=i+1;
}
if (Q2.toLowerCase()=="c")
{
	i=i+1;
}
if (Q3.toLowerCase()=="a"){
	i=i+1;
}
if (Q4.toLowerCase()=="d"){
	i=i+1;
}
if (Q5.toLowerCase()=="c"){
	i=i+1;
}
if (Q6.toLowerCase()=="b"){
	i=i+1;
}
if (Q7.toLowerCase()=="c"){
	i=i+1;
}
Answers.document.write("Vous avez" +i.toString() +"bonne réponse sur" + t.toString());
if (Q0.toLowerCase()=="c")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 1</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 1</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (Q1.toLowerCase()=="b")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 2</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 2</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (Q2.toLowerCase()=="c")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 3</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 3</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (Q3.toLowerCase()=="a")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 4</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 4</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (Q4.toLowerCase()=="d")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 5</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 5</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (Q5.toLowerCase()=="c")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 6</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 6</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (Q6.toLowerCase()=="b")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 7</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 7</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
if (Q7.toLowerCase()=="c")
{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana "+speechstr+" COLOR=#62E63C>Question 8</B></FONT></B></FONT SIZE=2 FACE="+speechstr+"Verdana"+speechstr+" COLOR=#000000> -Réponse correcte");
} 
else{
	Answers.document.write("<p align=Left><B><FONT SIZE=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#D33316>Question 8</B></FONT></B><FONT SIZZ=2 FACE="+speechstr+" Verdana"+speechstr+" COLOR=#000000> -Réponse incorrecte");
}
}
function close(){
	window.close();
}