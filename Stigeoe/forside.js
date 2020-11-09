//banner ord slide animation
let ordSlider_i = 0;
let ordSlider_array = [" aktiviteternes ø", " familiens ø", " børnenes ø", " den aktives ø", " en tumleplads"];
let ordSlider_elem;


function ordSliderNext() {
    ordSlider_i++;
    ordSlider_elem.style.opacity = 0;
    if (ordSlider_i > (ordSlider_array.length - 1)) {
        ordSlider_i = 0;
    }
    setTimeout('ordSliderSlide()', 1000);
}
function ordSliderSlide() {
    ordSlider_elem.innerHTML = "&nbsp" + ordSlider_array[ordSlider_i];
    ordSlider_elem.style.opacity = 1;
    setTimeout('ordSliderNext()', 2000);

}

ordSlider_elem = document.getElementById("ordSlider"); ordSliderSlide();


//Countdowns

// Set the date we're counting down to
var countDownDate = new Date("dec 1, 2020 13:00:0").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var dage = Math.floor(distance / (1000 * 60 * 60 * 24));
    var timer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = dage + "d " + timer + "t ";
	
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Datoen for dette event er desvære overskredet";
    }
}, 1000);

// Set the date we're counting down to
var countDownDate2 = new Date("feb 20, 2021 10:00:0").getTime();

// Update the count down every 1 second
var y = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate2 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var timer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    // Output the result in an element with id="countdown"
    document.getElementById("countdown2").innerHTML = days + "d " + timer + "t ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(y);
        document.getElementById("countdown2").innerHTML = "Datoen for dette event er desvære overskredet";
    }
}, 1000);

// Set the date we're counting down to
var countDownDate3 = new Date("apr 04, 2021 10:00:0").getTime();

// Update the count down every 1 second
var z = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate3 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var timer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    // Output the result in an element with id="countdown"
    document.getElementById("countdown3").innerHTML = days + "d " + timer + "t ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(z);
        document.getElementById("countdown3").innerHTML = "Datoen for dette event er desvære overskredet";
    }
}, 1000);


