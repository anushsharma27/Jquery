    $(function(){
        $("#btnclick").click(function(){
            $("#popp").dialog({
                tittle:"jquery popup",
                width:430,
                height:200,
                button:{
                    Close:{
                      function() {
                          $(this).dialog('close');
                          
                      }
                    }
                    
             
                 
            });


        });
    })



// $( document ).ready(function() {
//     console.log( "document loaded" );
// });

// $("button").ready(function()

// { 
//     $("p").hide();
//     $("button").click(function()
//     {
//         $("p").show();

//     });
//     $(.close).click(function()
//     {
//         $("p").hide();
//     });
// });