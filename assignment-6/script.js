function showmatrix(){
    document.getElementById("matrix").style.display='inline';
    setTimeout(disapper, 10000);
}
function disapper(){
    document.getElementById("matrix").style.display='none';
    document.getElementById("bttn").style.display='none';
    document.getElementById("matrix-ans").style.display='inline';
}
function submit(){
    var tot=0;
    var loc=0;
    var array= ['X','B','S','T','D','H','M','G','R','L','W','C'];
    for(var i=0;i<array.length;i++)
    if(document.getElementById('1').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('2').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('3').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('4').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('5').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('6').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('7').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('8').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('9').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('10').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('11').value == array[i])
    {tot++;array[i]='1';break;}

    for(var i=0;i<array.length;i++)
    if(document.getElementById('12').value == array[i])
    {tot++;array[i]='1';break;}

    array= ['X','B','S','T','D','H','M','G','R','L','W','C'];
    if(document.getElementById('1').value == array[0])
    loc++;
    if(document.getElementById('2').value == array[1])
    loc++;
    if(document.getElementById('3').value == array[2])
    loc++;
    if(document.getElementById('4').value == array[3])
    loc++;
    if(document.getElementById('5').value == array[4])
    loc++;
    if(document.getElementById('6').value == array[5])
    loc++;
    if(document.getElementById('7').value == array[6])
    loc++;
    if(document.getElementById('8').value == array[7])
    loc++;
    if(document.getElementById('9').value == array[8])
    loc++;
    if(document.getElementById('10').value == array[9])
    loc++;
    if(document.getElementById('11').value == array[10])
    loc++;
    if(document.getElementById('12').value == array[11])
    loc++;

    document.getElementById("matrix-ans").style.display='none';
    document.getElementById("submit").style.display='none';
    document.getElementById("head").style.display='none';
    document.getElementById("analysis").style.display='inline';
    tot=tot/16*100
    loc=loc/16*100
    document.getElementById("char").innerHTML=" Number of right charecters :- "+ tot + "%";
    document.getElementById("loc").innerHTML=" Number of locations gotten right :- "+ loc + "%";
   console.log(tot)
   console.log(loc)

}