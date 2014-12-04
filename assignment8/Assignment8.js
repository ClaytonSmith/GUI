//File:  Assignment 8 javascript "Assignment8.js"
//91.461: Creating an Interactive Dynamic Table
//Mark S McGrotty, UMass Lowell Computer Science, mmcgrott@cs.uml.edu
//Copyright (c) 2014 by Mark McGrotty.  All rights reserved.  May be freely 
//copied or excerpted for educational purposes with credit to the author.
//updated by  MSM on December, 1 2014 at 2:50 AM


//global variables for multiplication table

var xvalues = []; //x values array
var yvalues = []; //y values array
var temp;
var Xmin = 0;
var Xmax = 10;
var Ymin = 0;
var Ymax = 10;
var x =0; //x values index
var y =0; //y values index

//functions for buttons
$(document).ready(function() {
	console.log("this is a test");
        
        
        
        //when an x value is inputed push value to x array
	$("#InValues").submit(function() {

            Xmax = this.Xmax.value;
            Xmin = this.Xmin.value;
            
            //If the Min is greater than the Max switch the values
            if(Xmax <= Xmin){
                temp = Xmax;
                Xmax = Xmin;
                this.Xmax.value = Xmin;
                this.Xmin.value = temp;
                Xmin = temp;
            }
            $("#XValuesArea").html("X Minimum = " +Xmin+ " : X Maximum = "+Xmax);

            Ymin = this.Ymin.value;                    
            Ymax = this.Ymax.value;
            
            //If the Min is greater than the Max switch the values            
            if(Xmax <= Xmin){
                temp = Xmax;
                Xmax = Xmin;
                this.Xmax.value = Xmin;
                this.Xmin.value = temp;
                Xmin = temp;
            }
            $("#YValuesArea").html("Y Minimum = " +Ymin+ " : Y Maximum = "+Ymax);
	});
        


        //when a y value is inputed push value to y array
	$("#InYMin").submit(function() {
	});
        
        $("#InYMax").submit(function() {
                         
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
           $("#tablearea").html(tableCreate());        
        });
;    
});

//I based my code off this snippet from Cerbus on stackoverflow
//http://stackoverflow.com/questions/14643617/create-table-using-javascript
function tableCreate(){
    var tableareadiv = document.getElementById("tablearea");    
    tbl  = document.createElement('table');
 

    for(var i = Ymin-1; i <= Ymax; i++){//loop through rows
        
        var tr = tbl.insertRow();
  
        for(var j = Xmin-1; j <= Xmax; j++){//loop through coloumns
            
            if(i==Ymin-1&&j==Xmin-1){//first cell
                var td = tr.insertCell();               
                td.appendChild(document.createTextNode(''))
 

            }
            else if(i==Ymin-1){//top row   
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(j))
  
            }
            else if(j==Xmin-1){//first coloumn
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(i))

            }
            else{//rest of the cells
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(i*j))

            }
            
        }
    }
    tableareadiv.appendChild(tbl);
}
