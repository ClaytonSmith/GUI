//File:  Assignment 6 javascript "Assignment6.js"
//91.461: Creating an Interactive Dynamic Table
//Mark S McGrotty, UMass Lowell Computer Science, mmcgrott@cs.uml.edu
//Copyright (c) 2014 by Mark McGrotty.  All rights reserved.  May be freely 
//copied or excerpted for educational purposes with credit to the author.
//updated by  MSM on October 24, 2014 at 12:50 AM


//global variables for multiplication table

var xvalues = []; //x values array
var yvalues = []; //y values array
var x =0; //x values index
var y =0; //y values index

//functions for buttons
$(document).ready(function() {
	console.log("this is a test");
        
        //when an x value is inputed push value to x array
	$("#InX").submit(function() {
            xvalues.push(this.t2.value);
            $("#XValuesArea").html(""+xvalues);
            //$(this).append("<p style=\"background: blue\">"+xvalues[x]+"</p>");             
	});

        //when a y value is inputed push value to y array
	$("#InY").submit(function() {
            yvalues.push(this.t3.value);
            $("#YValuesArea").html(""+yvalues);             
	});
        
        //when the reset button is pressed clear the arrays and reset the indexes and the tab
        $("#Reset").submit(function(){
            xvalues.length = 0;
            yvalues.length = 0;
            x=0;
            y=0;
           $("#XValuesArea").html("");
           $("#YValuesArea").html("");
           $("#tablearea").html("");
        });
        
        
        //when generate is pressed clear old table and create new table
        $("#GenTable").submit(function() {
           $("#tablearea").html("");   
           $("#tablearea").innerHTML(tableCreate());        
        });
;    
});

//I based my code off this snippet from Cerbus on stackoverflow
//http://stackoverflow.com/questions/14643617/create-table-using-javascript
function tableCreate(){
    var tableareadiv = document.tablearea,
    tbl  = document.createElement('table');
 

    for(var i = 0; i <= yvalues.length; i++){//loop through rows
        
        var tr = tbl.insertRow();
  
        for(var j = 0; j <= xvalues.length; j++){//loop through coloumns
            
            if(i==0&&j==0){//first cell
                var td = tr.insertCell();               
                td.appendChild(document.createTextNode(''))
 

            }
            else if(i==0){//top row   
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(xvalues[j-1]))
  
            }
            else if(j==0){//first coloumn
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(yvalues[i-1]))

            }
            else{//rest of the cells
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(xvalues[j-1]*yvalues[i-1]))

            }
            
        }
    }
    tablearea.appendChild(tbl);
}
