let mainpage = document.getElementById("maincon")
let wpage = document.getElementById("welcomepage")
let s = document.getElementById("song1")
let s2 = document.getElementById("song2")

let img = document.getElementById("image")
img.addEventListener('click',function(){
    mainpage.style.display="none"
    wpage.style.visibility="visible"
    document.getElementById("surprise").style.display="none";
    s.play()
})

let spr = document.getElementById("surprise")
spr.addEventListener('click',function(){
    mainpage.style.display="none"
    document.getElementById("wrapper").style.visibility="visible"
    document.getElementById("surprise").style.display="none";
    s2.play()
})

let day = document.getElementById("day")
let HH = document.getElementById("HH")
let MM = document.getElementById("MM")
let SS = document.getElementById("SS")
let bn = document.getElementById("btn1")
fixedDate = "12/20/2022";

let a1 = new Date();
let music = new Audio("https://res.cloudinary.com/dlj5s1kn2/video/upload/v1670329028/audo1_qq6pzm.mp3")
var d1 = 20;
var h1 = 12;
var m1 = 00;
var s1 = 0;
let currentdate = a1.getDate();
let currenthr = a1.getHours();
console.log(currentdate + " : " + currenthr)
console.log(currentdate < d1 && currenthr <= 23)
console.log(currentdate < d1)
console.log(currenthr <= 23)
if (a1.toLocaleDateString()!=fixedDate && currentdate<=d1) {
    clr = setInterval(function () {
        let a = new Date();
        let d = a.getDate();
        let h = a.getHours();
        let m = a.getMinutes();
        let s = a.getSeconds();
        let dt = a.toLocaleDateString();
        console.log(dt)

        days = Math.abs(d1 - d);
        days = (days).toString().padStart(2, 0);
        hh = Math.abs(23 - h);
        hh = (hh).toString().padStart(2, 0);
        if (m1 == 0) {
            mm = (60 - Math.abs(m1 - m)) % 60 - 1;
        } else {
            mm = Math.abs(m1 - m) % 60 - 1;
        }
        mm = (mm).toString().padStart(2, 0);
        ss = (60 - Math.abs(s1 - s)) % 60;
        ss = (ss).toString().padStart(2, 0);

        day.innerHTML = days;
        HH.innerHTML = hh;
        if (mm == "-1") {
            mm = "00"
        }
        MM.innerHTML = mm;
        SS.innerHTML = ss;

        if (dt == fixedDate) {
            bn.style.background = "green"
            bn.addEventListener("click", function () {
                music.play()
                window.open("/nextpage.html")
            })
            clearInterval(clr)
        }

    }, 1000)
}
else {
    console.log("executing this...")
    bn.innerHTML="Click Me"
    bn.addEventListener("click", function () {
        music.play()
        window.open("/nextpage.html")
        
    })
}

let btn4 = document.getElementById("link");
btn4.addEventListener("click", function () {
    music.pause()
    s.pause()
    s2.pause()
})
