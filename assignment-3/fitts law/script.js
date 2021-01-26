var array = new Array(21); 
var number_of_circle=0;
var offset1=0,offset2=0;
for (var i = 0; i < array.length; i++) { 
    array[i] = []; 
} 

function hide(element)
{
    document.getElementById("problem-stat").style.display="none";
    offset1   =new Date().getTime();
    start(element);
    
}
function start(element){
    document.getElementById("circles").style.display="inline";
    document.getElementById("circles").style.scale='2';
    var x=1
    var y=1
    array[number_of_circle][0]=x
    array[number_of_circle][1]=y
    array[number_of_circle][2]=Math.sqrt(x*x + y*y).toFixed(2)
    array[number_of_circle][3]=2
    array[number_of_circle][5]=Math.log2(2*array[number_of_circle][2]/2).toFixed(2)

}
function next(element){
    if(number_of_circle<21){
    offset2  =new Date().getTime();
    array[number_of_circle][4]=(offset2-offset1)/1000;
    number_of_circle++;
    document.getElementById("circles").style.display="none";
    var top=Math.abs(Math.floor(Math.random() * 1000) + 1  )
    var bottom=Math.abs(Math.floor(Math.random() * 1000) + 1  )
    var right=Math.abs(Math.floor(Math.random() * 1000) + 1  )
    var left=Math.abs(Math.floor(Math.random() * 1000) + 1  )
    var scale= Math.floor((Math.random() * 100) + 1); 
    document.getElementById("circles").style.display="block";
    document.getElementById("btnn").style.padding=`${scale}px`;
    document.getElementById("circles").style.margin=`${top}px ${right}px ${bottom}px ${left}px `;
    var rect = element.getBoundingClientRect();
    var x=rect.x
    var y=rect.y
    console.log(x,y)
    array[number_of_circle][0]=x.toFixed(2)
    array[number_of_circle][1]=y.toFixed(2)
    array[number_of_circle][2]=Math.sqrt(((x-array[number_of_circle-1][0])*(x-array[number_of_circle-1][0])) + ((y-array[number_of_circle-1][1])*(y-array[number_of_circle-1][1]))).toFixed(2)
    array[number_of_circle][3]=scale
    array[number_of_circle][5]=Math.log2(2*array[number_of_circle][2]/scale).toFixed(2)
    offset1   =new Date().getTime();
    }
    else{
        show_table();
    }
}


function show_table(){
    document.getElementById("circles").style.display="none";
    document.getElementById("head").style.display="none";
    
    var analysis = document.getElementById("display")
        tbl  = document.createElement('table');
    tbl.style.width  = '100%';
    tbl.style.border = '1px solid black';
    var tr = tbl.insertRow();
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('X-cordinate'));
    td.style.border = '1px solid black';
    td.style.width  = '20%';
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('Y-cordinate'));
    td.style.border = '1px solid black';
    td.style.width  = '20%';
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('Distance'));
    td.style.border = '1px solid black';
    td.style.width  = '20%';
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('Scale'));
    td.style.border = '1px solid black';
    td.style.width  = '20%';
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('MT(s)'));
    td.style.border = '1px solid black';
    td.style.width  = '20%';
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('ID'));
    td.style.border = '1px solid black';
    td.style.width  = '20%';
    for(var i = 0; i < 21; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 6; j++)
            {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(array[i][j]));
                td.style.border = '1px solid black';
                
            }
        
    }
    analysis.appendChild(tbl);
    document.getElementById("analysis").style.display="inline";
}