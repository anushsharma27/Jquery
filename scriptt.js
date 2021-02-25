$( document ).ready(function() {
    console.log( "ready!" );
});


$(function() {
    $( "#dialog-1" ).dialog({
       autoOpen: false,  
    });
    $( "#opener" ).click(function() {
       $( "#dialog-1" ).dialog( "open" );
    });
 });