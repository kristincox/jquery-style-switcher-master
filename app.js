//Make sure HTML is ready before moving further
$(document).ready(function() {

  //Change color of div on click of change color button--RED
  $(document).on("click", "#change-red", function() {
    $("#div-red")
    .css("background-color","red");

  });

  //Change color of div on click of change color button--GREEN
  $(document).on("click", "#change-green", function() {
    $("#div-green")
    .css("background-color","green");

  });

  //Change color of div on click of change color button--BLUE
  $(document).on("click", "#change-blue", function() {
    $("#div-blue")
    .css("background-color","blue");

  });

  //Change box size on click--BIG
    $(document).on("click", "#make-big", function() {
      $("#div-big")
      .css("width","500px")
      .css("height","500px");
    });

    //Change box size on click--BIG
      $(document).on("click", "#make-small", function() {
        $("#div-small")
        .css("width","25px")
        .css("height","25px");
      });
//Animate DIV
      $(document).on("click", "#animate-div", function() {
      $("#div-animate").toggleClass("big-blue");

    });

//Overlay
    $(document).on("click", "#create-overlay", function() {
      $("#page-overlay").toggleClass("page-overlay")
        .html("<h1>I did it!</h1>")
        .css("font-color", "#263345");

    });



  });
