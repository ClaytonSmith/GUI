//CREATED BY MARK MCGROTTY
//
//Assignment_Reader.js
//
//Last Edited 5:30pm 11/13/14
//
//THIS IS THE JAVASCRIPT FOR ASSIGNMENT 5
//IT READS A FORMATTED JSON FILE THAT HAS ASSIGNMENT INFORMATION
//IT THEN PRINTS IT TO A DIV
//
////MOST CODE PROVIDED BY Prof. Jesse Heines
//https://teaching.cs.uml.edu/~heines/91.461/91.461-2014-15f/461-assn/FormattingText-v04.jsp


$(document).ready(function () {
var story;

    //OPEN BUTTON IS PRESSED
    $("#Open").submit(function() {

        var radios = document.getElementsByName('Assignment');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
            // do whatever you want with the checked radio
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    //LOAD JSON FILE
    jQuery.ajax({
        async: false,
        dataType: "json",
        url: radios[i].value ,
        success: function( data ) {
          story = data ;
        }
    });
      
    jQuery(document).ready( function() {
        placeContent() ;
    });

    //DETERMINE USERS BROWSER
    var strFirstParaClass = "" ;
    var strNavString = navigator.userAgent ;
    // console.log( navigator.userAgent ) ;
    // console.log( strNavString ) ;
    if ( strNavString.indexOf( "Firefox" ) !== -1 ) {
        strFirstParaClass = "Firefox" ;
    } else if ( strNavString.indexOf( "Chrome" ) !== -1 ) {
        strFirstParaClass = "Chrome" ;
    } else if ( strNavString.indexOf( "Safari" ) !== -1 ) {
        strFirstParaClass = "Safari" ;
    }
    
    // N.B.  This version *does* apply the CSS.
    function placeContent() {
        var strContent = "";
  
        // create dynamic content from JSON
        strContent += "<h1 class='AssignmentNumber'>" + story.AssignmentNumber + "</h1>" ;
        strContent += "<h2 class='AssignemtName'>" + story.AssignemtName + "</h2>" ;
        strContent += "<h2 class='DateDue'>" + story.DateDue + "</h2>" ;
        strContent += "<h3 class='Professor'>Assigned by: " + story.Professor + "</h3>" ;

  
        // loop through all the paragraphs and sentences
        for ( var para = 0 ; para < story.text.paragraphs.length ; para++ ) {
            strContent += "<p class=\"" + strFirstParaClass + "\">" ;
            for ( var sent = 0 ; sent < story.text.paragraphs[para].length ; sent++ ) {
                strContent += story.text.paragraphs[para][sent] + "&nbsp; " ;
            }
          strContent += "</p>" ;
        }
  
        // place dynamic content on page
        // document.getElementById( "content" ).innerHTML = strContent ;
        jQuery("#Assignment_Content").html( strContent ) ;
    }
  
    // N.B.  This version does *NOT* apply the CSS!
    function placeContent2() {
        document.writeln( "<h1 class='AssignmentNumber'>" + story.AssignmentNumber + "</h1>" ) ;
        document.writeln( "<h2 class='AssignemtName'>" + story.AssignemtName + "</h2>" ) ;
        document.writeln( "<h2 class='DateDue'>" + story.DateDue + "</h2>" ) ;
        document.writeln( "<h3 class='Professor'Assigned by: " + story.Professor + "</h3>" ) ;
  
        for ( var para = 0 ; para < story.text.paragraphs.length ; para++ ) {
            document.writeln( "<p>" ) ;
            for ( var sent = 0 ; sent < story.text.paragraphs[para].length ; sent++ ) {
                document.writeln( story.text.paragraphs[para][sent] + "&nbsp; " ) ;
            }
            document.writeln( "</p>" ) ;
        }
      }
    });
    
    
    //CLOSE BUTTON
    $("#Close").submit(function(){
        $("#Assignment_Content").html("");
    });

}());