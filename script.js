$("input[type=text]").keyup(function(){

var logotext= $("#mytext").val();

$(".designed-logo").text(logotext);

});


$("input[type=color]").change(function(){

    var logocolor= $("#text-color").val();
    
    $(".designed-logo").css('color', logocolor);
    
    });

    $("input[type=range]").change(function(){

        var logosize= $("#fontSize").val()+'px';
        
        $(".designed-logo").css('font-size', logosize);

        $(".f-size").text(logosize);
        
        });


$("#font-syle").on('change', function(){

   var fontstle=$('option:selected').val(); 
   alert(fontstle);
});

      

var mincer=0;
var maxcer=50;

$("#comment").keypress(function(){
    mincer=mincer+1;
maxcer=maxcer-1;

 $(".min").text(mincer);
 $(".max").text(maxcer);

});


$("#first-letter").keyup(function(){
var uniqename= $("#first-letter").val();

$(".first").text(uniqename.charAt(0));
$(".uniqe-name").text(uniqename);
$(".box").show();

});

$("#last-letter").keyup(function(){
    var lastname= $("#last-letter").val();
    
    $(".second").text(lastname.charAt(0));
    $(".uniqe-last-name").text(lastname);

    });
  
    $("#box-b-color").change(function(){
var boxbackground = $("#box-b-color").val();

$(".box").css("background-color", (boxbackground));

    });


$("#box-f-color").change(function(){
        var innerfont = $("#box-f-color").val();
        
        $(".first").css("color", (innerfont));
        $(".second").css("color", (innerfont));
        
});

 $("#bottom-text-color").change(function(){
                var outerfont = $("#bottom-text-color").val();
                
                $(".full-name").css("color", (outerfont));
                
});