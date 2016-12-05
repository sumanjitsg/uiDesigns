// JavaScript Document

function inAnchor(obj){
	TweenLite.to(obj,0.2,{css:{color: "#ff9933", opacity: 1}});
}
function outAnchor(obj){
	TweenLite.to(obj,1.5,{css:{color: "#ffffff", opacity:0.7}});
}

function inHbutton(obj){
	TweenLite.to(obj,0.4,{css:{color: "#f54242", backgroundColor: "#ffffff"}});
}
function outHbutton(obj){
	TweenLite.to(obj,0.7,{css:{color: "#ffffff", backgroundColor: "#f54242"}});
}

function inPbutton(obj){
	TweenLite.to(obj,0.4,{css:{color: "#e5e5e5", backgroundColor: "#f54242", borderColor: "#f54242"}});
}
function outPbutton(obj){
	TweenLite.to(obj,0.7,{css:{color: "#f54242", borderColor: "#f54242", backgroundColor: "transparent"}});
}

function inSocial(obj){
	TweenLite.to(obj,0.4,{css:{borderColor: "#f54242", backgroundColor: "transparent"}});
}
function outSocial(obj){
	TweenLite.to(obj,0.4,{css:{borderColor: "#e5e5e5", backgroundColor: "#e5e5e5"}});
}