//User interface logic
var test=function(i){
 if (i % 3 === 0 && i % 5 === 0){
    return "pingpong";
  }
  else if (i % 3 === 0) {
    return "ping";
  }
  else if (i % 5 === 0) {
    return "pong";
  }
  else {
    return i;
  }
};

var output=function(input){
  var result=[];
  for (var i = 1; i <= input; i++) {
    result.push(test(i));
  }
  return result;
};
//User interface logic

$(document).ready(function() {
  $(".refresg-btn").on("click",function(){location.reload();});

  $("#button").click(function(){
    var userNumber=parseInt($("#input").val());
    var result=output(userNumber);
    var displayResults=$(".displayResults");
    for (var i = 0; i < result.length; i++) {

      displayResults.append('<li>' + result[i]+'</li>');
    }
  });
  });
