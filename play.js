
var y=0;var z=0;
var x = document.createElement("AUDIO");
var b=document.createElement("br");
var d=document.createElement ("div");
divCss();
var res;
var identifier;
function myFunction(id,cn) { 

	res=cn.split(" ");
	//document.getElementById("divi").innerHTML=res[1];
	//cn=res[0];
	if(y==0){
    y++;identifier=id;
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src",res[0]);
    } else {
        x.setAttribute("src",res[0]);
    }
	while(var time=x.currentTime)
{
	x.autoplay=true;
	x.load();
	if(time>0)break;
}
	audio();
	document.getElementById("divi").innerHTML="Now Playing Album:"+"<b><i>"+res[1]+"</i></b>"+"<br> Track :"+"<b><i>"+id+"</i></b>"
	document.getElementById("divi").style.backgroundColor="#e6f9ac";
	d.appendChild(x);
	d.style.marginBottom="1em";
	var p=document.getElementById(id);
	d.classList.toggle('fade');
	p.appendChild(d);
	p.style.borderBottomWidth="0";
	p.style.marginBottom="40px";
	p.style.backgroundColor="#e8eced";
	}
	else 
	{	delete x;y--;
		document.getElementById(identifier).style.borderBottomWidth="2px";
		document.getElementById(identifier).style.marginBottom="initial";
	 	document.getElementById(identifier).style.backgroundColor="inherit";
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
d.style.clear="both";
d.style.zIndex="1000";
}
function audio(){
	 x.setAttribute("controls", "controls");
	x.autoplay=true;
	x.play();
	x.load();
	x.style.width="60%";
	x.style.backgroundColor="gray";
	x.style.transform="scale(1.05)";
	x.style.transition="all 1s linear";
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
	 for(var i=0;i<xx.length;i++){	 
     var sp=xx[i].className.split(" ");
	//if(pre!=xx[i]){delete x;}
	if(sp[1]==t){
		pre=xx[i];
		var p=xx[i];
		xx[i].classList.add('active');
		rmchild.appendChild(p);
	//xx[i].style.visibility="visible";
			}
		}
	
}
