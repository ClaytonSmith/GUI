$(document).ready(function() {
	console.log("this is a test");
	$("#frm").submit(function() {
		
		if(this.t1.value !== "this is a great value") {
			//$(this).append("<p style=\"background: red\">"+this.t1.value + " is the wrong value </p>");
                        $("#errorarea").html("Wrong value");
		}
		
		else {
			$(this).append("<p style=\"background: green\">"+this.t1.value + " is the right value </p>");	
                        
		}
                
	});
        $("#t1").change(function(){
           console.log("got focus");
           $("#errorarea").html("");
        });
        
});


var xvalues = [];
var yvalues = [];
var x =0;
var y =0;





$(document).ready(function() {
	console.log("this is a test");
        
	$("#InX").submit(function() {
            xvalues[x]=(this.t2.value);
            $(this).append("<p style=\"background: blue\">"+xvalues[x]+"</p>");
            x++;               
	});
        
	$("#InY").submit(function() {
            yvalues[y]=(this.t2.value);
            $(this).append("<p style=\"background: yellow\">"+yvalues[y]+"</p>");
            y++;                
	});

        $("#t2").change(function(){
           console.log("got focus");
           $("#errorarea2").html("");
        });
        
        $("#GenTable").submit(function() {
            tableCreate();
        });
;    
});




//I based my code off this snippet from Cerbus on stackoverflow
//http://stackoverflow.com/questions/14643617/create-table-using-javascript
function tableCreate(){
    var body = document.body,
    tbl  = document.createElement('table');
    tbl.style.width='100px';
    tbl.style.border = "1px solid black";

    for(var i = 0; i <= yvalues.length; i++){
        
        var tr = tbl.insertRow();
  
        for(var j = 0; j <= xvalues.length; j++){
            if(i==0&&j==0){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(''))
                td.style.border = "1px solid black";
            }
            else if(i==0){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(xvalues[j-1]))
                td.style.border = "1px solid black";
            }
            else if(j==0){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(yvalues[i-1]))
                td.style.border = "1px solid black";
            }
            else{
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(xvalues[j-1]*yvalues[i-1]))
                td.style.border = "1px solid black";
            }
            
        }
    }
    body.appendChild(tbl);
}
