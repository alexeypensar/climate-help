// 'modal' windows with goods prices:

// const modals = new Array.from(document.getElementsByClassName('modal__card'));
//
// modals.forEach(function(el) {
//
// });





const modalCold1Button = document.getElementById('modalCold1Button');
const modalCold1 = document.getElementById('modalCold1');
modalCold1Button.addEventListener('click', function() {
    modalCold1.style.display = 'flex';
    const modalCold1CloseButton = document.getElementById('modalCold1CloseButton');
    modalCold1CloseButton.addEventListener('click', function() {
        modalCold1.style.display = 'none';
    });
});

const modalCold2Button = document.getElementById('modalCold2Button');
const modalCold2 = document.getElementById('modalCold2');
modalCold2Button.addEventListener('click', function() {
    modalCold2.style.display = 'flex';
    const modalCold2CloseButton = document.getElementById('modalCold2CloseButton');
    modalCold2CloseButton.addEventListener('click', function() {
        modalCold2.style.display = 'none';
    });
});

const modalCold3Button = document.getElementById('modalCold3Button');
const modalCold3 = document.getElementById('modalCold3');
modalCold3Button.addEventListener('click', function() {
    modalCold3.style.display = 'flex';
    const modalCold3CloseButton = document.getElementById('modalCold3CloseButton');
    modalCold3CloseButton.addEventListener('click', function() {
        modalCold3.style.display = 'none';
    });
});


const modalConditioner1Button = document.getElementById('modalConditioner1Button');
const modalConditioner1 = document.getElementById('modalConditioner1');


modalConditioner1Button.addEventListener('click', function() {
    modalConditioner1.style.display = 'flex';

    const modalConditioner1CloseButton = document.getElementById('modalConditioner1CloseButton');
    modalConditioner1CloseButton.addEventListener('click', function() {
        modalConditioner1.style.display = 'none';
    });
});

const modalConditioner2Button = document.getElementById('modalConditioner2Button');
const modalConditioner2 = document.getElementById('modalConditioner2');


modalConditioner2Button.addEventListener('click', function() {
    modalConditioner2.style.display = 'flex';

    const modalConditioner2CloseButton = document.getElementById('modalConditioner2CloseButton');
    modalConditioner2CloseButton.addEventListener('click', function() {
        modalConditioner2.style.display = 'none';
    });
});



const modalConditioner3Button = document.getElementById('modalConditioner3Button');
const modalConditioner3 = document.getElementById('modalConditioner3');


modalConditioner3Button.addEventListener('click', function() {
    modalConditioner3.style.display = 'flex';

    const modalConditioner3CloseButton = document.getElementById('modalConditioner3CloseButton');
    modalConditioner3CloseButton.addEventListener('click', function() {
        modalConditioner3.style.display = 'none';
    });
});

const modalConditioner4Button = document.getElementById('modalConditioner4Button');
const modalConditioner4 = document.getElementById('modalConditioner4');


modalConditioner4Button.addEventListener('click', function() {
    modalConditioner4.style.display = 'flex';

    const modalConditioner4CloseButton = document.getElementById('modalConditioner4CloseButton');
    modalConditioner4CloseButton.addEventListener('click', function() {
        modalConditioner4.style.display = 'none';
    });
});






// embla slider configuration:

const emblaNode = document.getElementById("embla");
const embla = EmblaCarousel(emblaNode, {align: "start", loop: "true"});
let prevEmbla = document.getElementById('emblaButtonPrev');
prevEmbla.addEventListener('click', embla.scrollPrev);
let nextEmbla = document.getElementById('emblaButtonNext');
nextEmbla.addEventListener('click', embla.scrollNext);

const autoplay = (embla, interval) => {
    let timer = 0;
    const play = () => {
        stop();
        requestAnimationFrame(() => (timer = window.setTimeout(next, interval)));
    };
    const stop = () => {
        window.clearTimeout(timer);
        timer = 0;
    };
    const next = () => {
        if (embla.canScrollNext()) {
            embla.scrollNext();
        } else {
            embla.scrollTo(0);
        }
        play();
    };
    return {play, stop};
};
const autoplayer = autoplay(embla, 3000);
embla.on("pointerDown", autoplayer.stop);
embla.on("init", autoplayer.play);




// quiz labels styles changing

let quizTextInputs = document.getElementsByClassName('quiz__input_text');
quizTextInputs = Array.prototype.slice.call(quizTextInputs);

quizTextInputs.forEach(function(el) {
    el.addEventListener('change', function () {
        if (el.value !== '') {
            el.nextElementSibling.classList.add('quiz__placeholder_active');
        }
        else {
            el.nextElementSibling.classList.remove('quiz__placeholder_active');
        }
    });

});







