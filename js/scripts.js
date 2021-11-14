$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    const devProcess = $("#devProcess").val();
    const usesCode = $("#usesCode").val();
    const petType = $("#petType").val();
    const operSys = $("#operSys").val();
    $("#python").hide();
    $("#cSharp").hide();
    $("#golang").hide();
    if(devProcess === "backEnd"){
      if(usesCode === "readability"){
        $("#python").show();
      }
      else {
        if(petType === "emu") {
          $("#python").show();
        }
        else if(petType === "cat") {
          $("#golang").show();
        }
        else if(petType === "dog") {
          $("#cSharp").show();
        }
      }
    }
    else if(devProcess === "frontEnd") {
      if (operSys === "mac") {
        $("#golang").show();
      }
      else {
        $("#python").show();
      }
    }
  });
});
let darkMTest = 0;
$(document).ready(function() {
  $("#darkness").click(function(event) {
    event.preventDefault();
    $("body").removeClass();
    if (darkMTest === 0) {
      $("body").addClass("darkMode");
      darkMTest = 1;
    }
    else if (darkMTest === 1) {
      darkMTest = 0;
    }
  });
});