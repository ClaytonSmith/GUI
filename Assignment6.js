
var xvalues = [];
var yvalues = [];
var x =0;
var y =0;





$(document).ready(function() {
	console.log("this is a test");
        
	$("#InX").submit(function() {
            xvalues[x]=(this.t2.value);
            $("#XValuesArea").html(""+xvalues);
            //$(this).append("<p style=\"background: blue\">"+xvalues[x]+"</p>");
            x++;               
	});
        
	$("#InY").submit(function() {
            yvalues[y]=(this.t3.value);
            $("#YValuesArea").html(""+yvalues);
            y++;                
	});
        $("#Reset").submit(function(){
            xvalues.length = 0;
            yvalues.length = 0;
            x=0;
            y=0;
           $("#XValuesArea").html("");
           $("#YValuesArea").html("");
           $("#tablearea").innerHTML("");
        });
        
        
        
        $("#GenTable").submit(function() {
           $("#tablearea").innerHTML(tableCreate());
        });
;    
});




//I based my code off this snippet from Cerbus on stackoverflow
//http://stackoverflow.com/questions/14643617/create-table-using-javascript
function tableCreate(){
    var body = document.body,
    tbl  = document.createElement('table');
    tbl.style.width='100px';

    for(var i = 0; i <= yvalues.length; i++){
        
        var tr = tbl.insertRow();
  
        for(var j = 0; j <= xvalues.length; j++){
            if(i==0&&j==0){
                var td = tr.insertCell();               
                td.appendChild(document.createTextNode(''))
 

            }
            else if(i==0){                
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(xvalues[j-1]))
  
            }
            else if(j==0){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(yvalues[i-1]))

            }
            else{
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(xvalues[j-1]*yvalues[i-1]))

            }
            
        }
    }
    body.appendChild(tbl);
}
