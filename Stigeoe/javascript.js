function burgerMenu() {
    let element = document.getElementById("toggle1");
    element.classList.toggle("menu-active");
}

function dropdown() {
    let element = document.getElementById("toggle2");
    element.classList.toggle("undermenu-active");
}

//banner ord slide animation
let ordSlider_i = 0;
let ordSlider_array = ["aktiviteternes ø", "familiens ø", "børnenes ø", "den aktives ø", "en tumleplads"];
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
    ordSlider_elem.innerHTML = ordSlider_array[ordSlider_i];
    ordSlider_elem.style.opacity = 1;
    setTimeout('ordSliderNext()', 2000);

}

ordSlider_elem = document.getElementById("ordSlider"); ordSliderSlide(); 