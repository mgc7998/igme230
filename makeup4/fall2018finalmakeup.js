//submenu slide
$("#close").click(function () {
    $("#nav").animate({ left: '-100' }, "slow");
    $("#close").toggle();
    $("#open").toggle();
});

$("#open").click(function () {
    $("#nav").animate({ left: '0px' }, "slow");
    $("#close").toggle();
    $("#open").toggle();
});

$(".menu").click(function() {
    $(this).next(".submenu").toggle();
});

//starting story and story selector
let start = ("#story0.txt");
$("#submenu").val(start); // changes menu option to default
$("#story").load(start);   // retrieves only default element

$("#submenu").change(function() {
    story = $(this).val();
    $("#story").load(start); 
});