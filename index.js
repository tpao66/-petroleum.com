// =========================
// COUNTER ANIMATION
// =========================

function animateValue(id, start, end, duration){

    let obj = document.getElementById(id);

    let range = end - start;

    let current = start;

    let increment = end > start ? 1 : -1;

    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function(){

        current += increment;

        obj.textContent = current.toLocaleString();

        if(current == end){

            clearInterval(timer);

        }

    }, stepTime);

}

// START COUNTERS

animateValue("production", 0, 1200000, 2000);

animateValue("wells", 0, 248, 2000);

animateValue("employees", 0, 4820, 2000);

animateValue("revenue", 0, 29500000000, 2000);

// =========================
// SIDEBAR TOGGLE
// =========================

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", ()=>{

    sidebar.classList.toggle("active");

});

// =========================
// SEARCH
// =========================

const search = document.querySelector(".search");

search.addEventListener("keyup", ()=>{

    console.log("Searching:", search.value);

});
