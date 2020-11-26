
// mobile menu - hamburger


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    mobileMenu.classList.toggle('header__mobile_active');
});

// hiding mobile menu after click on link

const mobileMenuLinks = Array.from(document.getElementsByClassName('header__link_mobile'));


mobileMenuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        mobileMenu.classList.toggle('header__mobile_active');
    });
});



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

const modalHot1Button = document.getElementById('modalHot1Button');
const modalHot1 = document.getElementById('modalHot1');
modalHot1Button.addEventListener('click', function() {
    modalHot1.style.display = 'flex';
    const modalHot1CloseButton = document.getElementById('modalHot1CloseButton');
    modalHot1CloseButton.addEventListener('click', function() {
        modalHot1.style.display = 'none';
    });
});

const modalHot2Button = document.getElementById('modalHot2Button');
const modalHot2 = document.getElementById('modalHot2');
modalHot2Button.addEventListener('click', function() {
    modalHot2.style.display = 'flex';
    const modalHot2CloseButton = document.getElementById('modalHot2CloseButton');
    modalHot2CloseButton.addEventListener('click', function() {
        modalHot2.style.display = 'none';
    });
});

const modalHot3Button = document.getElementById('modalHot3Button');
const modalHot3 = document.getElementById('modalHot3');
modalHot3Button.addEventListener('click', function() {
    modalHot3.style.display = 'flex';
    const modalHot3CloseButton = document.getElementById('modalHot3CloseButton');
    modalHot3CloseButton.addEventListener('click', function() {
        modalHot3.style.display = 'none';
    });
});

const modalHot4Button = document.getElementById('modalHot4Button');
const modalHot4 = document.getElementById('modalHot4');
modalHot4Button.addEventListener('click', function() {
    modalHot4.style.display = 'flex';
    const modalHot4CloseButton = document.getElementById('modalHot4CloseButton');
    modalHot4CloseButton.addEventListener('click', function() {
        modalHot4.style.display = 'none';
    });
});

const modalHot5Button = document.getElementById('modalHot5Button');
const modalHot5 = document.getElementById('modalHot5');
modalHot5Button.addEventListener('click', function() {
    modalHot5.style.display = 'flex';
    const modalHot5CloseButton = document.getElementById('modalHot5CloseButton');
    modalHot5CloseButton.addEventListener('click', function() {
        modalHot5.style.display = 'none';
    });
});




// quiz

const quizStart = document.getElementById('quizStart');

const quizConditioner1 = document.getElementById('quizConditioner1');
const quizConditioner2 = document.getElementById('quizConditioner2');


const quizStartConditioner = document.getElementById('quizStartConditioner');
const quizStartHot = document.getElementById('quizStartHot');
const quizStartCold = document.getElementById('quizStartCold');

const quizCold1 = document.getElementById('quizCold1');
const quizCold2 = document.getElementById('quizCold2');

const quizHot = document.getElementById('quizHot');

const quizFinish = document.getElementById('quizFinish');



// quiz logic

quizConditioner1.style.display = 'none';
quizConditioner2.style.display = 'none';
quizCold1.style.display = 'none';
quizCold2.style.display = 'none';
quizHot.style.display = 'none';
quizFinish.style.display = 'none';



// function checkRadio(radioName)
// {
//     var inp = document.getElementsByName(radioName);
//     for (var i = 0; i < inp.length; i++) {
//         if (inp[i].type == "radio" && inp[i].checked) {
//             alert("selected: " + inp[i].value);
//         }
//     }
// }

// стартовая логика

let quizStartNextButton = document.getElementById('quizStartNextButton');

quizStartNextButton.addEventListener('click', function() {
    if (quizStartConditioner.checked) {
        quizStart.style.display = 'none';
        quizConditioner1.style.display = 'flex';
    }

    else if (quizStartCold.checked) {
        quizStart.style.display = 'none';
        quizCold1.style.display = 'flex';
    }

    else if (quizStartHot.checked) {
        quizStart.style.display = 'none';
        quizHot.style.display = 'flex';
    }
});

// логика при выборе кондиционеров

let quizConditioner1NextButton = document.getElementById('quizConditioner1NextButton');
quizConditioner1NextButton.addEventListener('click', function() {
    quizConditioner1.style.display = 'none';
    quizConditioner2.style.display = 'flex';
});

let quizConditioner1PrevButton = document.getElementById('quizConditioner1PrevButton');
quizConditioner1PrevButton.addEventListener('click', function() {
    quizConditioner1.style.display = 'none';
    quizStart.style.display = 'flex';
});

let quizConditioner2NextButton = document.getElementById('quizConditioner2NextButton');
quizConditioner2NextButton.addEventListener('click', function() {
    quizConditioner2.style.display = 'none';
    quizFinish.style.display = 'flex';
});

let quizConditioner2PrevButton = document.getElementById('quizConditioner2PrevButton');
quizConditioner2PrevButton.addEventListener('click', function() {
    quizConditioner2.style.display = 'none';
    quizConditioner1.style.display = 'flex';
});


// логика при выборе холодильного оборудования

let quizCold1NextButton = document.getElementById('quizCold1NextButton');
quizCold1NextButton.addEventListener('click', function() {
    quizCold1.style.display = 'none';
    quizCold2.style.display = 'flex';
});

let quizCold1PrevButton = document.getElementById('quizCold1PrevButton');
quizCold1PrevButton.addEventListener('click', function() {
    quizCold1.style.display = 'none';
    quizStart.style.display = 'flex';
});

let quizCold2NextButton = document.getElementById('quizCold2NextButton');
quizCold2NextButton.addEventListener('click', function() {
    quizCold2.style.display = 'none';
    quizFinish.style.display = 'flex';
});

let quizCold2PrevButton = document.getElementById('quizCold2PrevButton');
quizCold2PrevButton.addEventListener('click', function() {
    quizCold2.style.display = 'none';
    quizCold1.style.display = 'flex';
});

// логика при выборе отопительного оборудования

let quizHotNextButton = document.getElementById('quizHotNextButton');
quizHotNextButton.addEventListener('click', function() {
    quizHot.style.display = 'none';
    quizFinish.style.display = 'flex';
});

let quizHotPrevButton = document.getElementById('quizHotPrevButton');
quizHotPrevButton.addEventListener('click', function() {
    quizHot.style.display = 'none';
    quizStart.style.display = 'flex';
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



const emblaButtons = Array.from(document.getElementsByClassName('embla__button'));

emblaButtons.forEach(function(el) {
    el.addEventListener('click', function() {
        el.blur();
    })
});


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







