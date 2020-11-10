//Banner ord slide animation - inspiration fra http://www.developphp.com/video/JavaScript/Array-Slideshow-Animation-Tutorial 
let ordSlider_i = 0;
let ordSlider_array = [" aktiviteternes ø", " familiens ø", " børnenes ø", " den aktives ø", " en tumleplads", "nissernes ø"];
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

// sets an Array of strings for dates
var countdownDates = ["dec 1, 2020 13:00:0", "feb 20, 2021 10:00:0", "apr 04, 2021 10:00:0"];

function countdown(date, htmlElementID) {

    // Update the count down every 1 second
    let setInteral = setInterval(function () {
		
        // Set the date we're counting down to, from a string
        let countDownDate = new Date(date).getTime();
		
        // Get today's date and time
        let now = new Date().getTime();
		
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
		
        // Time calculations for days and hours 
        let day = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		
        // Output the result in an element with id="countdown"
        document.getElementById(htmlElementID).innerHTML = day + "d " + hour + "t ";
		
        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(setInteral);
            document.getElementById(htmlElementID).innerHTML = "Datoen for dette event er desvære overskredet";
        }
    }, 1000);

}
//The listed array strings
countdown(countdownDates[0], "countdown");
countdown(countdownDates[1], "countdown2");
countdown(countdownDates[2], "countdown3");

