let day = document.getElementById("day")
let HH = document.getElementById("HH")
let MM = document.getElementById("MM")
let SS = document.getElementById("SS")
let bn = document.getElementById("btn1")
var d1 = 21;
var h1 = 12;
var m1 = 0;
var s1 = 0;
clr = setInterval(function () {
    let a = new Date();
    let music = new Audio("audio/audo1.mp3")
    let d = a.getDate();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let dt = a.toLocaleString();
    console.log(dt)
    fixedDate = "12/21/2022, 12:00:00 AM"


    days = Math.abs(d1 - d);
    days=(days).toString().padStart(2,0);
    hh = Math.abs(h1 - h % 12);
    hh=(hh).toString().padStart(2,0);
    if (m1 == 0) {
        mm = (60 - Math.abs(m1 - m))%60-1;
    } else {
        mm = Math.abs(m1 - m)%60-1;
    }
    mm=(mm).toString().padStart(2,0);
    ss = (60 - Math.abs(s1 - s))%60;
    ss=(ss).toString().padStart(2,0);

    day.innerHTML = days;
    HH.innerHTML = hh;
    if(mm=="-1"){
        mm="00"
    }
    MM.innerHTML = mm;
    SS.innerHTML = ss;

    if(dt==fixedDate)
    {
        bn.style.background="green"
        bn.addEventListener("click",function(){
            music.play()
            window.open("https://youtu.be/XcpNJHZAiuM")
        })
        clearInterval(clr)
    }
    
}, 1000)
