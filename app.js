const arrow = document.querySelector(".share");
const novaKartica = document.querySelector(".nova-ikona");
var sirinaEkrana = window.matchMedia("(min-width: 520px)");

arrow.addEventListener("click", ()=> {
    if (sirinaEkrana.matches) {
        klik = arrow.classList.toggle("klik");
        if (klik) {
            novaKartica.innerHTML = `
            <div class="nova">
                <h1 id="inner-icon" class="nova-title">SHARE</h1>
                <img id="inner-icon" src="images/icon-facebook.svg">
                <img id="inner-icon" src="images/icon-twitter.svg">
                <img id="inner-icon" src="images/icon-pinterest.svg">
            </div>
            <div class="triangle"></div>
            `;
        }
        else {
            novaKartica.innerHTML = ``;
        }
    }

    else{
        klik = arrow.classList.toggle("klik");
        if (klik) {
            novaKartica.innerHTML = `
            <div class="nova">
                <h1 id="inner-icon" class="nova-title">SHARE</h1>
                <img id="inner-icon" src="images/icon-facebook.svg">
                <img id="inner-icon" src="images/icon-twitter.svg">
                <img id="inner-icon" src="images/icon-pinterest.svg">
            </div>
            <div class=inner-share>
                <img id="inner-icon" src="images/icon-share.svg">
            </div>
            `;
        } else {
            novaKartica.innerHTML = ``;
        }
    }

})