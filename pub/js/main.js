$(document).ready(function(){
    
    var userData = $.getJSON("https://api.github.com/users/jgarcia99");
    
    userData.done(function(json) {
        var user = json;
    });
    
});









//$(document).ready(function(){
//
//   $.getJSON('..https://api.github.com/users/jgarcia99', function(json.login) {
//});  
//
//      $("#submission").click(function() {
//       var comment = $("#comments").val();
//       $("#comments").val("")
//       $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/261/comments?access_token=e8", 
//           JSON.stringify({"body": comment})
//             );
//       $("#comment-form").submit();
//   })
//    });  