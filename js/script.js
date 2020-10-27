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

console.log(quizTextInputs);

for (let i = 0; i < quizTextInputs.length; i++) {

    quizTextInputs[i].addEventListener('change', function () {
        if (quizTextInputs[i].value !== '') {
            quizTextInputs[i].closest('.quiz__label_absolute').style.top = '-5px';
            quizTextInputs[i].closest('.quiz__label_absolute').style.left = '0';
            quizTextInputs[i].closest('.quiz__label_absolute').style.fontSize = '12px';
        }
    });
}




