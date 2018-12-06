$(function(){
    $(".items").hide()
});

$(".menu").click(function(){
    $(this).next(".items").slideToggle("slow");
});

let showArt = "article0.txt";
        let art = ("article0.txt")  // sets default verse element
        let verseString = (showArt + " #" + art); 
        $("#art-choose").val(art); // changes menu option to default
        $("#selectedart").load(artString);   // retrieves only default element
        
        $("#art-choose").change(function() {
            artString = (showArt + " #" + art);
            art = $(this).val();
            $("#selectedart").load(artString); 
        });