var count=0
var offset1=0,offset2=0;
function show_task(){
    offset1  =new Date().getTime();
    
    document.getElementById("problem-stat").style.display="none"
    document.getElementById("btns").style.display="inline"
    document.getElementById("but").style.display="inline"
    alert("Follow the list and click on the following items\n1)Dish wash\n2)Jacket\n3)Soaps\n4)Pants\n5)Sofa\n6)Television\n7)Curtains\n8)Buckets\n9)Speaker\n10)Bed");

}
function showtask(){
    offset1  =new Date().getTime();
    
    document.getElementById("problem-stat").style.display="none"
    document.getElementById("btns").style.display="inline"
    document.getElementById("tool").style.display="inline"
    document.getElementById("but").style.display="inline"
    alert("Follow the list and click on the following items\n1)Dish wash\n2)Jacket\n3)Soaps\n4)Pants\n5)Sofa\n6)Television\n7)Curtains\n8)Buckets\n9)Speaker\n10)Bed");

}
function valid(element){
    count=count+1;
    document.getElementById(element).style.display="none"
    console.log(element)
    if(count==10)
    {
    document.getElementById("head").style.display="none"
    document.getElementById("btns").style.display="none"
    offset2  =new Date().getTime();
    var diff= offset2-offset1;
    diff = Math.floor(diff / 1000 % 60);
    document.getElementById("analysis").style.display="inline"
    document.getElementById("time-taken").innerHTML="Time taken : "+ diff+"s";
    }

}
function tasks(){
    alert("Follow the list and click on the following items\n1)Dish wash\n2)Jacket\n3)Soaps\n4)Pants\n5)Sofa\n6)Television\n7)Curtains\n8)Buckets\n9)Speaker\n10)Bed");
}
function others(){
    document.getElementById("others").style.display="inline"
    document.getElementById("tool").style.display="none"
    document.getElementById("furniture").style.display="none"
    document.getElementById("kitchen").style.display="none"
    document.getElementById("electronics").style.display="none"
    document.getElementById("cleaning").style.display="none"    

}
function furniture(){
    document.getElementById("others").style.display="none"
    document.getElementById("tool").style.display="none"
    document.getElementById("furniture").style.display="inline"
    document.getElementById("kitchen").style.display="none"
    document.getElementById("electronics").style.display="none"
    document.getElementById("cleaning").style.display="none"    

}
function kitchen(){
    document.getElementById("others").style.display="none"
    document.getElementById("tool").style.display="none"
    document.getElementById("furniture").style.display="none"
    document.getElementById("kitchen").style.display="inline"
    document.getElementById("electronics").style.display="none"
    document.getElementById("cleaning").style.display="none"    

}
function elect(){
    document.getElementById("others").style.display="none"
    document.getElementById("tool").style.display="none"
    document.getElementById("furniture").style.display="none"
    document.getElementById("kitchen").style.display="none"
    document.getElementById("electronics").style.display="inline"
    document.getElementById("cleaning").style.display="none"    

}
function clean(){
    document.getElementById("others").style.display="none"
    document.getElementById("tool").style.display="none"
    document.getElementById("furniture").style.display="none"
    document.getElementById("kitchen").style.display="none"
    document.getElementById("electronics").style.display="none"
    document.getElementById("cleaning").style.display="inline"    

}
function tool(){
    document.getElementById("others").style.display="none"
    document.getElementById("tool").style.display="inline"
    document.getElementById("furniture").style.display="none"
    document.getElementById("kitchen").style.display="none"
    document.getElementById("electronics").style.display="none"
    document.getElementById("cleaning").style.display="none"    

}