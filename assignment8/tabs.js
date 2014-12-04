//File:  Assignment 8 javascript "tabs.js"
//91.461: Using the jQuery Validation Plugin and jQueryUI Tabbed Widget
//Mark S McGrotty, UMass Lowell Computer Science, mmcgrott@cs.uml.edu
//Copyright (c) 2014 by Mark McGrotty.  All rights reserved.  May be freely 
//copied or excerpted for educational purposes with credit to the author.
//updated by  MSM on Decmeber, 2014 at 2:50 PM



$(document).ready( function() {
        
        var nextTabNo;
        
        //Changes the settings for the table
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
            if(Ymax <= Ymin){
                temp = Ymax;
                Ymax = Ymin;
                this.Ymax.value = Ymin;
                this.Ymin.value = temp;
                Ymin = temp;
            }
            $("#YValuesArea").html("Y Minimum = " +Ymin+ " : Y Maximum = "+Ymax);
	});
        
        $("#myTabs").tabs();
        // console.log( "parent id = " + $("#a").parent().attr( "id" ) ) ;
    
        // the div containing the complete tabs structure
        // var tabsdiv = $(this).parent().parent() ; 
        var tabsdiv = $("#myTabs") ;
      
        // the list of tabs
        var tabslist = tabsdiv.find("ul") ;
      
        // set the number of the next tab to add
        nextTabNo = tabslist.find("li").length ;
   
        // this function is executed when an add-tab button is clicked
        var AddTabButtonClickHandler = function() {
            // console.log( "parent().parent() id = " + $(this).parent().parent().attr("id") ) ;
            // console.log( $(this).parent().parent().find("ul li").length ) ;

            // the number of tabs - made obsolete by nextTabNo
            // var ntabs = tabslist.find("li").length ;
            // console.log( "ntabs = " + ntabs ) ;

            // create a new tab
            tabslist.append( '<li><a href="#' + String.fromCharCode( 97+nextTabNo) + '">' +
                'Tab ' + (nextTabNo+1) + '</a></li>' ) ;
        
            // add content to the new tab
            //$(nextTabNo).html("");   

        
        
            tabsdiv.append( '<div id="' + String.fromCharCode( 97+nextTabNo ) + '">'  + (nextTabNo+1) + '.</p></div>' ) ;
            //tabsdiv.append.html(tableCreate()); 

            // add Add Tab and Remove Tab buttons to the new tab
            // $("#" + String.fromCharCode( 97+ntabs ) ).append( 
            $("#a").html(tableCreate());        

            $("#" + String.fromCharCode( 97+nextTabNo) ).append( 
                '<button class="remove-tab">Remove Tab</button>' ) ;
    
            //$("#tablearea").html("");
            //tableareadiv = tabslist.find( "li a[href='#" + id + "']").parent();
            $("#" + String.fromCharCode( 97+nextTabNo) ).append(tbl);

            // refresh the tab structure to make the newly added components appear
            $("#myTabs").tabs( "refresh" ) ;

            // add click handler to all buttons with class add-tab
            // note that this statement must be executed AFTER the tabs structure is refreshed
            // $("#" + String.fromCharCode( 97+ntabs ) + " .add-tab").click( AddTabButtonClickHandler ) ;
            // $("#" + String.fromCharCode( 97+ntabs ) + " .remove-tab").click( RemoveTabButtonClickHandler ) ;
                // $("#" + String.fromCharCode( 97+nextTabNo ) + " .add-tab").click( AddTabButtonClickHandler ) ;
            $("#" + String.fromCharCode( 97+nextTabNo ) + " .remove-tab").click( RemoveTabButtonClickHandler ) ;
      
            // increment number of next tab to add
            nextTabNo++ ;
        } ;
    
        // this function is executed when an add-tab button is clicked
        var RemoveTabButtonClickHandler = function() {
             // console.log( $(this).parent().attr("id") ) ;
    
            // remove tab content
            $(this).parent().remove() ;
    
            // remove tab itself        
            var id = $(this).parent().attr("id") ;
            // console.log( "need to remove tab with href = #" + id ) ;
            var tabToRemove = tabslist.find( "li a[href='#" + id + "']").parent() ;
            // console.log( "tabToRemove = " + tabToRemove.html() ) ;
            tabToRemove.remove() ;
    
             // refresh the tab structure to make the newly added components appear
            $("#myTabs").tabs( "refresh" ) ;
        } ;
    
        // add the Add Tab button click handler to all All Tab buttons
        $(".add-tab").click( AddTabButtonClickHandler ) ;
    
        // add the Add Tab button click handler to all All Tab buttons
        $(".remove-tab").click( RemoveTabButtonClickHandler ) ;

        
        
    //I based my code off this snippet from Cerbus on stackoverflow
    //http://stackoverflow.com/questions/14643617/create-table-using-javascript
    function tableCreate(){
        //var tableareadiv = tabslist.find( "li a[href='#" + id + "']").parent() ;
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
        //tabsdiv.appendChild(tbl);
    }

} ) ;
    
