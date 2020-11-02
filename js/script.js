// header submenu

const headerSubmenu = document.getElementById('headerSubmenu');
const headerSubmenuLink = document.getElementById('headerSubmenuLink');

headerSubmenuLink.addEventListener('click', function(el) {
    el.preventDefault();
    headerSubmenu.classList.toggle('header__submenu_active');
});


// todo скрывать подменю при нажатии на ссылку, скрывать подменю при нажатии вне блока подменю.



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







