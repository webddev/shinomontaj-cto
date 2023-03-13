import Swiper, {Navigation, Pagination} from "swiper";

class Quiz {
    constructor(props) {
        // this.completeText = props.completeText;
        this.container = document.querySelector('.quizSwiper');
        this.swiper = new Swiper(this.container, {
            spaceBetween: 60,
            slidesPerGroup: 1,
            slidesPerView: 1,
            allowTouchMove: false,
            modules: [Navigation],
        });
    }

    isChecked() {
        const thisSlide = this.container.querySelector('.swiper-slide-active');
        const checked = thisSlide.querySelector('input[type=checkbox]:checked');
        if (!checked) {
            return checked === null;
        }

    }

    getInterview(quiz) {
        let leadMessage = '';
        const cards = quiz.querySelectorAll('.quiz__question-slide');
        cards.forEach((card) => {
            const questionText = card.querySelector('.quiz__title').textContent;
            const answer = card.querySelector('input[type="checkbox"]:checked').value;
            leadMessage += `Вопрос: ${questionText}\nОтвет: ${answer}\n\n`;
        });
        return leadMessage;
    }

    init() {
        if (this.container) {
            const startButton = this.container.querySelector('.quiz__start');
            const navBlock = this.container.querySelector('.quiz__nav-buttons');
            const navButtonPrev = navBlock.firstElementChild;
            const navButtonNext = navBlock.lastElementChild;

            navBlock.style.display = 'none';

            startButton.addEventListener('click', () => {
                this.swiper.slideNext();
                navBlock.style.display = 'flex';
            })
            navButtonNext.addEventListener('click', () => {
                this.swiper.slideNext();
            });
            navButtonPrev.addEventListener('click', () => {
                this.swiper.slidePrev();
                console.log('prev')
            });


            navButtonNext.setAttribute('disabled', 'true');
            this.swiper.on('beforeTransitionStart', () => {
                navButtonNext.classList.add('button_disabled');
                navButtonNext.setAttribute('disabled', 'true');
                if (!this.isChecked()) {
                    navButtonNext.classList.remove('button_disabled');
                    navButtonNext.removeAttribute('disabled');
                }
            });

        }
    }
}

export default Quiz;
