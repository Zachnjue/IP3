//Front End Code
$(document).ready(function(){
  $("#submit1").click(function(event) {
    event.preventDefault();
    var userInput=parseInt($("#user_input").val());
    var resultofArray= pingpongLoop(userInput);
    $("#display").text(resultofArray);
    });
  });

//Back End Code
var pingpongLoop=function(userInput) {
  var resultofArray = [];
  for (var i = 1; i < userInput; i+=) {
    if (((i%3)===0) &&((i%5)===0)){
      resultofArray.push("pinpong");
    } else if ((i%3)===0) {
      resultofArray.push("ping");
    } else if ((i%5)===0)) {
      resultofArray.push("pong");
    } else {
      resultofArray.push(i);
    }
  }
 return resultofArray;
}
*/
