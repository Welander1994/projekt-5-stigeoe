

function burgerMenu() {
    let element = document.getElementById("toggle1");
    element.classList.toggle("menu-active");
}

function dropdown() {
    let element = document.getElementById("toggle2");
    element.classList.toggle("undermenu-active");
}

let acc = document.getElementsByClassName("harmonika");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("activeharmonika");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}





var underMenu = ["FORSIDE", "BOOKING", "KONTAKT", "GALLERI", "kort", "HISTORIE", "NATUR", "Fremtid", "FAQ"];


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
function transitionKort() {
    document.getElementById("transitionText").innerHTML = underMenu[4];
}
function transitionHistorie() {
    document.getElementById("transitionText").innerHTML = underMenu[5];
}
function transitionNatur() {
    document.getElementById("transitionText").innerHTML = underMenu[6];
}
function transitionFremtid() {
    document.getElementById("transitionText").innerHTML = underMenu[7];
}
function transitionFAQ() {
    document.getElementById("transitionText").innerHTML = underMenu[8];
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


function sendShelter() {
    document.getElementById("messageshelter").innerHTML = "Din besked er nu sendt!";
    console.log("send");
}


function sendGuide() {
    document.getElementById("messageguide").innerHTML = "Din besked er nu sendt!";
    console.log("send");
}