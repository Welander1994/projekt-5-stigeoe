
var underMenu = ["FORSIDE", "BOOKING", "KONTAKT", "GALLERI", "HISTORIE", "NATUR", "Fremtid", "FAQ"];


function transitionForside() {
    document.getElementById("transitionText").innerHTML = underMenu[0];
}
function transitionBooking() {
    document.getElementById("transitionText").innerHTML = underMenu[1];
}
function transitionKontakt() {
    document.getElementById("transitionText").innerHTML = underMenu[2];
}
function transitionGalleri() {
    document.getElementById("transitionText").innerHTML = underMenu[3];
}
function transitionHistorie() {
    document.getElementById("transitionText").innerHTML = underMenu[4];
}
function transitionNatur() {
    document.getElementById("transitionText").innerHTML = underMenu[5];
}
function transitionFremtid() {
    document.getElementById("transitionText").innerHTML = underMenu[6];
}
function transitionFAQ() {
    document.getElementById("transitionText").innerHTML = underMenu[7];
}



window.onload = () => {
    const transition_el = document.querySelector(".transition")
    const anchors = document.querySelectorAll("li a");

    setTimeout(() => {
        transition_el.classList.remove("is-active");


    }, 700);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener("click", e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add("is-active");

            setTimeout(() => {
                window.location.href = target;
                console.log(target);
            }, 700)
        });
    }

}