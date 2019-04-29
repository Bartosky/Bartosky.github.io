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

let name = $('[name="Name"]').val();
let email = $('[name = "email"]').val();
let agree = $('#agree');
    $('.buttonS').on('click', function(e){
        e.preventDefault();
        console.log(agree);
        // walidacja imienia
        if (name.length <= 2){
            e.preventDefault();
            alert('Twoje imię jest za krótie');
        }else{


        }
        // walidacja emaila
        if (email.indexOf('@')===-1){
            e.preventDefault();
            alert('email musi zawierac @');
        }else{


        }


        // Check-box
        if (agree.checked === false){  // (!agree.checked) - to samo w formie zaprzeczenia
            alert('Musisz zaakceptować warunki');
            e.preventDefault();
            return false;
        }
    })





});