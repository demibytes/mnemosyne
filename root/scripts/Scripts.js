console.log("External Scripts Loaded");
$(".experience1").toggleClass("hidden");
$(".experience2").toggleClass("hidden");
$(".experience3").toggleClass("hidden");
$(".more").removeClass("hidden")

$(".interact .experience1").on("click", function(){
    $(".experience1").toggleClass("hidden");
})
$(".interact .experience2").on("click", function(){
    $(".experience2").toggleClass("hidden");
})
$(".interact .experience3").on("click", function(){
    $(".experience3").toggleClass("hidden");
})
var resumefontrem = 16;
$("#resumefontincrease").on("click", function(){
    if(resumefontrem >= 20){
    resumefontrem = 20;
    };
    resumefontrem += 2;
    $(".resumesheet").css("font-size", ""+resumefontrem+"px");
})
$("#resumefontdecrease").on("click", function(){
    if(resumefontrem <= 12){
    resumefontrem = 12;
    };
    resumefontrem -= 2;
    $(".resumesheet").css("font-size", ""+resumefontrem+"px");
})