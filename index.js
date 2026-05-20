const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

/* MENU TOGGLE */

menuBtn.onclick = (e) => {

e.stopPropagation();

sidebar.classList.toggle("active");

/* PHONE HISTORY */

if(sidebar.classList.contains("active")){

history.pushState({menu:true},"");

}

};

/* CLOSE WHEN CLICKING OUTSIDE */

document.addEventListener("click",(e)=>{

if(
sidebar.classList.contains("active") &&
!sidebar.contains(e.target) &&
!menuBtn.contains(e.target)
){

sidebar.classList.remove("active");

}

});

/* PREVENT CLOSE INSIDE */

sidebar.addEventListener("click",(e)=>{

e.stopPropagation();

});

/* PHONE BACK BUTTON */

window.addEventListener("popstate",()=>{

if(sidebar.classList.contains("active")){

sidebar.classList.remove("active");

}

});

/* CLOSE AFTER MENU CLICK */

document.querySelectorAll(".menu a").forEach(link=>{

link.addEventListener("click",()=>{

sidebar.classList.remove("active");

});

});

/* COUNTER ANIMATION */

function counter(id,start,end,speed){

let obj=document.getElementById(id);

let current=start;

let timer=setInterval(()=>{

current+=Math.ceil(end/speed);

if(current>=end){

current=end;

clearInterval(timer);

}

obj.innerText=current.toLocaleString();

},20);

}

counter("production",0,850000,100);
counter("wells",0,240,80);
counter("employees",0,5200,100);
counter("revenue",0,12000000,120);
