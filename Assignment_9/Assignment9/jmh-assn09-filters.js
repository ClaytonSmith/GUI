/*  File:  Assignment9\jmh-assn09-filters.js
 *  Mark McGrotty, UMass Lowell Computer Science, mark_mcgrotty@student.uml.edu
 *  Copyright (c) 2014 by Mark S. McGrotty  All rights reserved.  May be freely 
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by MSM on November 28, 2014 at 9:18 AM
 */


/*  
 *  CODE BASED OFF HEINES SAMPLE CODE FOUND HERE: https://teaching.cs.uml.edu/~heines/91.461/91.461-2014-15f/461-assn/code/Assn09-Starter/jmh-assn09-v4.html
 *  
 *  File:  D:\H-Drive\public_html\TUES\jmh-assn09-filters.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2014 by Jesse M. Heines.  All rights reserved.  May be freely 
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 28, 2014 at 9:18 AM
 */
 

"use strict" ;  // to ensure that all variables are declared before use


// return a substring of the string named in the AngularJS template given
//    the string itself and the staring and ending character numbers
// adapted from http://jsfiddle.net/tUyyx/
myApp.filter( "substring", function() {
  /**
   *  @param str   the string selected by the AngularJS template
   *  @param start the index of the character at which to start the substring
   *  @param end   the index of the character at which to end the substring,
   *      but note that this character is *NOT* included in the substring
   */
  return function( str, start, end ) {
    // if the first parameter is invalid, return a blank string
    if ( typeof( str ) === "undefined" || typeof( str ) !== "string" ) {
      return "" ;
    } else {
      // if the second parameter is missing or invalid, set it to 0
      if ( typeof( start ) === "undefined" || isNaN( start ) || start < 0 ) {
        start = 0 ;
      }
      // if the third parameter is missing or invalid, set it to the string length
      if ( typeof( end ) === "undefined" || isNaN( end ) || end > str.length ) {
        end = str.length ;
      }
      // extract and return the desired substring
      return str.substring( start, end ) ;
    }
  }
} ) ;

// given an email address, return the part before the @ sign
myApp.filter( "upToAtSign", function() {
  /**
   *  @param str the string selected by the AngularJS template
   */
  return function( str ) {
    // if the first parameter is invalid, return a blank string
    if ( typeof( str ) === "undefined" || typeof( str ) !== "string" ) {
      return "" ;
    }
    // find the position of the @ sign
    var posAt = str.indexOf( "@" ) ;
    // if the @ sign is not found, return the original string
    if ( posAt === -1 ) {
      return str ;
    } else {
      // otherwise, return the substring up to but not including the @ sign
      return str.substring( 0, posAt ) ;
    }
  }
} ) ;

// given a string containing HTML tags, return a version of it that displays
//    as true HTML when displayed by the AngularJS template
// see http://creative-punch.net/2014/04/preserve-html-text-output-angularjs/
myApp.filter( "unsafe", function( $sce ) {
  /**
   *  @param str the string selected by the AngularJS template
   *      note that in the database, a blank comment is represented a null
   *      in the Boolean expression below, since null is false, ! str is true
   */
  return function( str ) {
    // if the comment string is not a string (it's null or of type object or an empty 
    //    string), return a note that no comment was entered
    if ( typeof( str ) !== "string" || str === "" ) {
      return $sce.trustAsHtml( "(<em>no entry</em>)" ) ;
    } 
    // otherwise, return the comment string in HTML format
    else {
      return $sce.trustAsHtml( str ) ;
    }
  }
} ) ;

// add one to the numeric string selected by the AngularJS template
myApp.filter( "increment", function() {
  /**
   *  @param num the string selected by the AngularJS template, which should be a number
   *                note that JavaScript reports the type as "number", not "string"
   *  @param inc the increment to add to str
   */
  return function( num, inc ) {
    // if the first parameter is invalid, return a blank string
    if ( typeof( num ) === "undefined" || typeof( num ) !== "number" ) {
      return 0 ;
    } 
    // if the first parameter is not a number, return 0
    else if ( typeof( inc ) !== "undefined" &&
              ( typeof( inc ) !== "number" || isNaN( inc ) ) ) {
      return 0 ;
    // else add one to the parameter and return the result
    } else {
      // if the second parameter is missing or invalid, set it 1
      if ( typeof( inc ) === "undefined" ) {
        inc = 1 ;
      }
      // return the incremented number
      return num + inc ;
    }
  }
} ) ;

// extract only the first and last names of a "LastName, FirstName MiddleName" string
myApp.filter( "firstLastOnly", function() {
  /**
   *  @param str the string selected by the AngularJS template
   */
  return function( str ) {
    // find position of comma in input string
    var posComma = str.indexOf( "," ) ;   
    // extract last name part
    var strLastName = str.substring( 0, posComma ).trim() ;   
    // extract first name part
    var strFirstName = str.substring( posComma + 1 ).trim() ; 
    // find position of space in first name part
    var posSpace = strFirstName.indexOf( " " ) ;  
    // cut off middle name if found
    if ( posSpace !== -1 ) {
      strFirstName = strFirstName.substring( 0, posSpace ) ;
    }
    // reconstruct and return the "LastName, FirstName" string
    return strLastName + ", " + strFirstName;
  }
} ) ;

    /** AccountForBCE
     * 
     * tokenizes the first year and era from the supplied string
     * 
     * returns the year as a positive or negative number to sort
     * 
     * it is used in helping sort columns chronologically
     * specifically the discovery year.
     * 
     * 
     * The year is returned unchanged when the era contains these strings
     * "AD" : Anno Domini > year 0
     * "CE" : Current Era > year 0
     *
     * If the year 
     * "BC" : Before Christ < year 0
     * "BCE" : Before Common Era < year 0
    **/
   myApp.filter( "AccountForBCE", function() {
    /**
    *  @param str the string selected by the AngularJS template
    */
    return function( str ) {

    // find position of space in front of era
    var posSpace = str.indexOf(" ");
    console.log("first posSpace is: "+posSpace);
    
    //extract year
    var strYear = str.substring(0, posSpace).trim() ; 
    
    //extract era
    var strEra = str.substring(posSpace).trim() ;
    
    //DEBUG
    //console.log("Unfinished Era Token: "+strEra);
  
    //Find look for empty space after the era
    var posSpace = strEra.indexOf(" ");
    
    //===DEBUG====
    //  console.log("Second posSpace value is: "+posSpace);
    //  console.log(strEra);
  
  
    //Remove Extra text from the sorting function if you don't then issues
    //such as a the era tokenized from the date 170 BC to 50 BC is assigned the
    //string "BC to 50 BC" placing 170 BC after 100 AD.    
    //if posSpace returns -1 it means it was unable to another space and finishes the token
    if(posSpace !== -1) {
        console.log(strEra);
        strEra = strEra.substring(0, posSpace).trim();
    }

    //if the era is BC or BCE the year gets returned as a negative for easy sorting
    if(strEra === "BC" || strEra === "BCE"){
        strYear = strYear * (-1);
        
        //the year must be an integer or else it may not get sorted correctly
        return parseInt(strYear);
    }
    
    //if the era is not AD or CE
    else if(strEra !== "AD" && strEra !== "CE"){
        console.log(posSpace);
        //console.log(strEra+" : is not a valid era, please check json file\n\
        //                    check the year_discovered properties");
        return strYear;
    }
    
    else{
        return strYear;
    }
  }
    
} ) ;