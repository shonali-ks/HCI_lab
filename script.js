$(document).ready(function(e) {   
    $('input[type=checkbox]').on('change', function (e) {
        if ($('input[type=checkbox]:checked').length > 9) {
            $(this).prop('checked', false);
            alert("allowed only 9");
        }
    });
 });
 var offset1=0,offset2=0;
 var First=0,middle=0,end=0;
function showListA()
{
    document.getElementById("list-A").style.display="inline";
    document.getElementById("problem-stat").style.display="none";
    setTimeout(disapper, 8000);
}
function disapper()
{
    document.getElementById("list-A").style.display="none";
    document.getElementById("bttn").style.display="none";
    showListB();
}
function showListB(){
    document.getElementById("list-B").style.display="inline";
    startTimer();
}
function startTimer()
{
    offset1   =new Date().getTime();;
}
function submit(){
    stopTimer();
    validate();
    document.getElementById("analyse").innerHTML=" Analysis of animals chosen based on position(%): <br> First = "+ First*100/9 +" <br> Middle = "+ middle*100/9+" <br> End = "+ end*100/9;
    document.getElementById("list-B").style.display="none";
    document.getElementById("excess").style.display="none";
    document.getElementById("head").style.display="none";
    document.getElementById("analysis").style.display="inline";
}
function stopTimer()
{
    offset2  = new Date().getTime();
    var diff= offset2-offset1;
    diff = Math.floor(diff / 1000 % 60);
    document.getElementById("time-taken").innerHTML="Time taken : "+ diff+"s";
}
function validate()
{
    
    var Dog=document.getElementById("Dog").checked;
    var Cat=document.getElementById("Cat").checked;
    var Cow=document.getElementById("Cow").checked;
    var Horse=document.getElementById("Horse").checked;
    var Monkey=document.getElementById("Monkey").checked;
    var Lion=document.getElementById("Lion").checked;
    var Tiger=document.getElementById("Tiger").checked;
    var Bear=document.getElementById("Bear").checked;
    var Gorilla=document.getElementById("Gorilla").checked;
    console.log(First)
    if(Dog)
    First+=1;
    if(Cat)
    First+=1;
    if(Cow)
    First+=1;
    if(Horse)
    middle+=1;
    if(Monkey)
    middle+=1;
    if(Lion)
    middle+=1;
    if(Tiger)
    end+=1;
    if(Bear)
    end+=1;
    if(Gorilla)
    end+=1;

}