var date
var time
var name
var type
var loc
var mea

function submit(){
    date=document.getElementById("date").value
    time=document.getElementById("time").value
    name=document.getElementById("name").value
    type=document.getElementById("type").value
    loc=document.getElementById("loc").value
    mea=document.getElementById("mea").value
    if(date && time && name && location && type && mea)
    {
        document.getElementById("fname").innerHTML=name
        document.getElementById("ftype").innerHTML=type
        document.getElementById("loca").innerHTML=loc
        dtime= date + " " + time
        document.getElementById("dtime").innerHTML=dtime
        document.getElementById("meas").innerHTML=mea
        document.getElementById("toast").style.display= "block"
        document.getElementById("details").style.display= "block"
        document.getElementById("toast1").style.display= "none"
        console.log(date)
    }
    else 
{    document.getElementById("toast1").style.display= "block"
document.getElementById("toast").style.display= "none"
document.getElementById("details").style.display= "none"
}}