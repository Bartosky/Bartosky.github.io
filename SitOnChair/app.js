document.addEventListener("DOMContentLoaded",function(){


    console.log('hi bart');
// **********************KARUZELA***************
    var carousel = $(".slider");
    var track = $(".track");
    var slides = carousel.find(".slider__el");
    var carouselButtons = carousel.find(".slider__nav");

    // licznik wskazujący aktualny slajd w karuzeli - startowo 0
    var currentSlide = 0;

    // ustawienie slajdów obok siebie
    function setSlidesPosition() {

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.left = 100 * i + "%";
        }
    }

    // przesuwanie slajdów w prawo i w lewo
    function moveToSlide(event) {
        var targetSlide = 0;
        if (this.className.indexOf("next") > -1) {

            targetSlide = currentSlide + 1;

            if (targetSlide >= slides.length) {
                targetSlide = 0;
            }
        }

        if (this.className.indexOf("prev") > -1) {

            targetSlide = currentSlide - 1;

            if (targetSlide < 0) {
                targetSlide = slides.length - 1;
            }
        }

        var amountToMove = slides[targetSlide].style.left;
        track.css({'transform' : 'translateX(-' + amountToMove + ')'});
        currentSlide = targetSlide;
    }

    // instrukcje dla karuzeli wywołujące się przy załadowaniu strony:
    setSlidesPosition();
    for (var i = 0; i < carouselButtons.length; i++) {
        carouselButtons[i].addEventListener("click", moveToSlide);
    }


///////////////////////////WALIDACJA FORMULARZA ////////////////


    var form = document.querySelector('form');



    form.addEventListener('submit', function (e) {
        // e.preventDefault();

        var email = document.querySelector('#email');
        var name = document.querySelector('#name');




        // walidacaja name

        if(name.value.length <= 2){
            alert('Twoje imię jest za krótkie');
            e.preventDefault();
            return false;
        }
        // walidajca emaila
        if(email.value.indexOf('@') === -1){
            alert('Email musi posiadać znak @');
            e.preventDefault();
            return false;
        }
        // Check-box
        if (agree.checked === false){  // (!agree.checked) - to samo w formie zaprzeczenia
            alert('Musisz zaakceptować warunki');
            e.preventDefault();
            return false;
        }

    });









});