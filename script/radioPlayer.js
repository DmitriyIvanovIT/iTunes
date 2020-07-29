const radioPlayerInit = () => {
    // Переменные
    const radio = document.querySelector('.radio'),
        radioNavigation = document.querySelector('.radio-navigation'),
        radioCoverImg = document.querySelector('.radio-cover__img'),
        radioItem = document.querySelectorAll('.radio-item'),
        radioHeader = document.querySelector('.radio-header__big'),
        radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    // Функции
    const changeIconPlay = () => {
            if (audio.paused) {
                radio.classList.remove('play');
                radioStop.classList.remove('fa-pause');
                radioStop.classList.add('fa-play');
            } else {
                radioStop.classList.add('fa-pause');
                radioStop.classList.remove('fa-play');
                radio.classList.add('play');
            };
        },
        selectItem = elem => {
            radioItem.forEach(item => item.classList.remove('select'));
            elem.classList.add('select');
        };
    // Обработчики событий
    radioNavigation.addEventListener('change', event => {
        const target = event.target,
            parrent = target.closest('.radio-item'),
            title = parrent.querySelector('.radio-name').textContent,
            imageSrc = parrent.querySelector('.radio-img').src;

        selectItem(parrent);

        audio.src = target.dataset.radioStantion;
        radioCoverImg.src = imageSrc;
        radioHeader.textContent = title; 
        audio.play();
        radioStop.disabled = false;
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

        changeIconPlay();
    });
}

export default radioPlayerInit;