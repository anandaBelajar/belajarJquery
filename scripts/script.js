/*
$('.something') select something as a jquery object, in jquery object form it can use jquery method


var somethinng = $('something'); //jquer object will returned as an array
something[0] //get the element from jquery object

*/

/*jquery selector*/
/*
$("h3").css({ border: "3px solid blue" })

$(".wrapper").css({ border: "3px solid red" })

$("#clients").css({ border: "3px solid yellow" }); *
*
/

/*
$(document).ready(function() {
 alert("jquery imported");
                    });
*/

/*filters*/
/*
$("header nav li:first").css({ border: "2px solid red" }); //select the first li
$("header nav li:last").css({ border: "2px solid red" }); //select the last li
*/

/*first child an dlast child*/
/*
$("#contact ul:first-child").css({ border: "2px solid red" }); //select the first child
$("#contact ul:last-child").css({ border: "2px solid red" }); //select the last child
*/

//even
//$("header nav li:even").css({ border: "2px solid blue" });
//odd
//$("header nav li:odd").css({ border: "2px solid blue" });

//not
//$("section:not('#contact')").css({ border: "2px solid green" }); //select all the section wehere the id is not "contact"

//less than
//$("#social-nav li:lt(3)").css({ border: "2px solid blue" }); //select the li in social-nav that the index less than 3
//greater than
//$("#social-nav li:gt(2)").css({ border: "2px solid blue" }); //select the li in social-nav that the index greater than 2

//atribute filters //target element tat has a atribute
//$("div[class]").css({ border: "2px solid pink" }); //get every div that has atribute class no matter which class
//$("img[alt]").css({ border: "2px solid pink" }); //get every img that has atribute alt

//atribute with specific value
//$("img[alt=quote]").css({ border: "2px solid pink" }); //get img  element that has atribute  alt with value of quote

//jquer and the DOM
//next
//$("#contact-methods").next().css({ border: "3px solid red" }); //select next element of contact-methods

//prev
//$("#social-nav").prev().css({ border: "3px solid blue" }); //select previous element of social nav

//parent
//$(".banner-title").parent().css({ border: "3px solid pink" }); //select parent of banner-title

//parents
//$(".banner-title").parents().css({ border: "3px solid pink" }); //select all the parents of banner-title

//children
//$("#social-nav").children().css({ border: "2px solid green" }); //select all the children of social nav

//find
//$("#contact").find(".facebook").css({ border: "3px solid purple" }); //find class facebook within #contact

//closests
//$("#social-nav").closest(".wrapper").css({ border: "3px solid orange" }); //get the closetst paren with class .wrapper

//chaining
//chaining multiple function in one line of code

/*
$("#contact-methods").css({ border: "2px solid red" })
    .next().css({ border: "2px solid green" })
    .closest("section").css({ border: "2px solid blue" }) //get the contact methods class get the next element of contact methods class get the closests parent of contact methods class
*/

//adding content
var tweet = "<div style='margin: 2px 0; padding: 10px; background: #eee;'>The Big Fight Live: ham VS Cheese!</div>"

//apend mtehod
//$('#tweets div').append(tweet); //add content at the top the element

//prepend method
//$('#tweets div').prepend(tweet); //add content at the bottom  the element

//before method
//$('#tweets div p').before(tweet); //add content before  the element

//after method
//$('#tweets div p').after(tweet); //add content after  the element

///html method
//$('#tweets div p').html(tweet); //replace the content of  the element

//html method
//$('#tweets div').html(tweet); //changes the whole html element of  the element

//text method
//$('#tweets div p').text(tweet); //replace the content of  the element

//wrap & unwrap element

//wrap method
//$("section").wrap("<div>") //wrap element in div tag

//unwrap method
//$("section").unwrap() //unwrap element from it closest parent

//wrapall method
//$("section").wrapAll("<div>") //wrap all the section with one div not like wrap() that wrapping each section
/*
var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function() {

    if (wrapped) {
        $("section").unwrap();
        wrapped = false;
        $(".button").text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        wrapped = true;
        $(".button").text("Unwrap");
    }

}
*/

//removing content

//empty method
//$(".button").empty(); //emptying the content of element


//remove method
//$(".button").remove(); //removing the all the html element of element

//changing atributes

//removeAttr method
//$("#contact img").removeAttr("alt") //remove the atribute of the element

//attr method
//$("#contact img").attr("alt", "location") //cahnge the atribute value

//console.log($("#contact img").attr("alt")); //read the aribute value

//controlling css

//console.log($("#social-nav").css("position")); //check the value of css property

//first way
//$("#social-nav").css("top", "-200px").css("left", "100px"); //change value of certain css property

//second way
/*
$("#social-nav").css({
    "top": "-400",
    "left": "50px",
    "opacity": "0.5",
    "border": "4px solid red"
});
*/

//manipulate classes

//remove class method
//$("header .wrapper").removeClass(); //remove class from element

//addclass methode
//$("header > div").addClass("wrapper"); //add class to element

//toggle class
//add class when the class doesn't exist, remmove class when it exist

var button = $("#lead-banner a");

button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;
}


//Binding & unbinding events

//on methods
//bind an events to mathced elements
var myLis = $("#points-of-sale li");

myLis.on("click", function() { //on("event_type", "cllback function")

    $(this).css({ background: "pink" })

    //off methods
    //ubind an event to mathced elements
    myLis.off("click"); //on("event_type", "cllback function")
});

//event helpers
$("#lead-banner").click(function() {
    alert("you click me");
});

//doument ready vs window load

//1st way
/*
$(window).on("ready", function() {


});
*/

//2nd way
/*
$(window).ready(function() {


});
*/

//3rd way
/*
$(function() {

});
*/

/*
$(window).load(function() {


});
*/

//jquery event object
/*
$(document).ready(function() {

    $("*").on("click", function(e) { //'e' is event object
        console.log(e.target);
        console.log("the event type is :" + e.type);
        console.log("X-coordinate of the event is : " + e.pageX);
        console.log("Y-coordinate of the event is : " + e.pageY);
        e.stopPropagation();
    });


})
*/

//jquery animation
/*
$(document).ready(function() {

    function complete() {
        alert("animation complete");
    }

    $("section > h2").on("click", function() {
        $(this).animate({ width: "500px", height: "100px" }, 1000, "linear", complete); //only can animate css property that has numerical value
    });


})
*/

//fading elements in and out
/*
$(document).ready(function() {

    function complete() {
        alert("animation complete");
    }

    $("section > h2").on("click", function() {
        //$(this).fadeOut(2000).fadeIn(500);
        $(this).fadeTo(1000, 0.2)
            .fadeTo(2000, 0.8)
            .fadeTo(1000, 0.2)
            .fadeTo(2000, 0.8)
            .fadeTo(1000, 0.2)
            .fadeTo(2000, 0.8);
    });


})
*/

//Hide & Show Elements
/*
$(document).ready(function() {

    function complete() {
        alert("animation complete");
    }

    $("section > h2").on("click", function() {

        //$(this).hide(1000).show(1000);
        $(this).toggle(1000);
    });


})
*/

/*slide up and slide down*/
$(document).ready(function() {

    /*
    $(".slide-button-up").on("click", function() {

        $("#lead-banner").slideUp(100);
    });

    $(".slide-button-down").on("click", function() {

        $("#lead-banner").slideDown(4000);
    });
    */

    $(".slide-button-up").on("click", function() {

        $("#lead-banner").slideToggle(2000);
    });


});

//quote fader
$(document).ready(function() {

    var allQuotes = $("blockquote")
    var currentQuote = 0;



    function changeQuote() {
        $(allQuotes[currentQuote]).fadeOut(200, function() {

            if (currentQuote == allQuotes.length - 1) {
                currentQuote = 0;
            } else {
                currentQuote++;
            }

            $(allQuotes[currentQuote]).fadeIn(200);
        });

    }

    var quoteTimes = setInterval(changeQuote, 3000);



});

//sliding animation example
$(document).ready(function() {

    var items = $("poitns-of-sale li");

    items.on("click", function() {
        $(this).find("p").slideToggle(500);
    });



});