var itemInputs = new Array;
var itemsCap = new Array;


$(document).ready(function() {
  $("#items").submit(function() {
    event.preventDefault();

    var itemInput1 = $("#item1").val();
    var itemInput2 = $("#item2").val();
    var itemInput3 = $("#item3").val();
    var itemInput4 = $("#item4").val();
    var itemInput5 = $("#item5").val();
    var itemInput6 = $("#item6").val();
    var itemInput7 = $("#item7").val();
    var itemInput8 = $("#item8").val();
    var itemInput9 = $("#item9").val();
    var itemInput10 = $("#item10").val();
debugger
    var itemInputs = [itemInput1, itemInput2, itemInput3, itemInput4, itemInput5, itemInput6, itemInput7, itemInput8, itemInput9, itemInput10];
debugger
    var itemsCap =itemInputs.map(function(itemInput) {
      return (itemInput).toUpperCase();
      $("ul").append("<li>"+itemsCap[1]+"</li>");
    });
  });
});
