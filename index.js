
function clock(){
const fulldate=new Date();
let hour=fulldate.getHours();
let minutes=fulldate.getMinutes();
let seconds=fulldate.getSeconds();
const h1=document.getElementById("h");
const m1=document.getElementById("m");
const s1=document.getElementById("s");
if(hour<10)
{
hour="0"+hour;
}
if(minutes<10)
{
minutes="0"+minutes;
}
if(seconds<10)
{
seconds="0"+seconds;
}


h1.innerHTML=hour;
m1.innerHTML=":"+minutes;
s1.innerHTML=":"+seconds;
}
setInterval(clock,100);
clock();