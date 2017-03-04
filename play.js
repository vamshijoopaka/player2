//var vid = document.getElementById("myAudio");
var y=0;var z=0;
var x = document.createElement("AUDIO");
var b=document.createElement("br");
var d=document.createElement ("div");
divCss();

	 
var identifier;
function myFunction(id,cn) { 

	 res=cn.split(" ");
	//document.getElementById("just").innerHTML="res[0]";
	cn=res[0];
	if(y==0){
    y++;identifier=id;
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src",cn);
    } else {
        x.setAttribute("src",cn);
    }
	
    x.setAttribute("controls", "controls");
	x.autoplay=true;
	x.load();
	x.style.width="60%";
	x.style.backgroundColor="gray";
	x.style.transform="scale(1.05)";
	x.style.transition="all 1s linear";
	//document.getElementById(id).appendChild(b);
	d.appendChild(x);
	var p=document.getElementById(id);
	d.classList.toggle('fade');
	p.appendChild(d);
	
	p.style.borderBottomWidth="0";
	p.style.marginBottom="32px";}
	else 
	{	delete x;y--;
		document.getElementById(identifier).style.borderBottomWidth="2px";
		document.getElementById(identifier).style.marginBottom="initial";
		//delete b;	
		
		myFunction(id,cn);
	}
	
	 
	
}

function divCss()
{
d.className="audioContainer";
d.style.height="30px";
d.style.width="inherit";
d.style.transition="width 2s,height 2s";
d.style.position="relative";
//d.style.border="2px solid black";
//d.style.backgroundColor="gray";
d.style.clear="both";
d.style.zIndex="1000";
}
pre="";
function select(t){
	var yy = document.getElementById("list");
	xx=yy.querySelectorAll("li");
			var rmchild=document.getElementById("rlist");
			var i=0;
			while(rlist.hasChildNodes())
			yy.appendChild(rmchild.childNodes[0]);		
			while(rlist.hasChildNodes())
			rmchild.removeChild(rmchild.childNodes[0]);
			xx=yy.querySelectorAll("li");
	//document.getElementById("divi").innerHTML=pre.id;
	 for(var i=0;i<xx.length;i++){	 
     var sp=xx[i].className.split(" ");
	//if(pre!=xx[i]){
	if(sp[1]==t){
		pre=xx[i];
		var p=xx[i];
		rmchild.appendChild(p);
	//xx[i].style.visibility="visible";
			}
		}
	// }
}
