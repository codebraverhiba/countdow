
var secs=10;
var outputsec=document.getElementById("secs");
var stopbtn=document.getElementById("stop");
var startbtn=document.getElementById("start");
var resetbtn=document.getElementById("reset");
startbtn.addEventListener("click",function(){
    myInterval=setInterval(starttimer,1000);
})
function starttimer(){
    secs--;
   if(secs>9){
    outputsec.innerHTML=secs;
   }if(secs<9){
    outputsec.innerHTML="0"+secs;
   }
}
stopbtn.addEventListener("click",function(){
    clearInterval(myInterval);
})
resetbtn.addEventListener("click",function(){
    secs=0;
    outputsec.innerHTML="0"+secs;
})