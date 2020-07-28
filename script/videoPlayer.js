const videoPlayerInit = () => {
    // переменные
    const videoPlayer = document.querySelector('.video-player'),
        videoButtonPlay = document.querySelector('.video-button__play'),
        videoButtonStop = document.querySelector('.video-button__stop'),
        videoTimePassed = document.querySelector('.video-time__passed'),
        videoProgress = document.querySelector('.video-progress'),
        videoTimeTotal = document.querySelector('.video-time__total');

    // функции
    const toggleIcon = () => {
            if (videoPlayer.paused) {
                videoButtonPlay.classList.remove('fa-pause');
                videoButtonPlay.classList.add('fa-play');
            } else {
                videoButtonPlay.classList.add('fa-pause');
                videoButtonPlay.classList.remove('fa-play');
            };
        },
        playVideo = () => {
            if (videoPlayer.paused) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            };

            toggleIcon();
        },
        stopPlay = () => {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;

            toggleIcon();
        },
        addZero = n => n < 10 ? '0'+ n : n;

    // события
    videoPlayer.addEventListener('click', playVideo);

    videoButtonPlay.addEventListener('click', playVideo);

    videoButtonStop.addEventListener('click', stopPlay);

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime,
            duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;
            
        let minutPassed = Math.floor(currentTime / 60),
            secondPassed = Math.floor(currentTime % 60),
            minutTotal = Math.floor(duration / 60),
            secondTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = `${addZero(minutPassed)}:${addZero(secondPassed)}`;
        videoTimeTotal.textContent = `${addZero(minutTotal)}:${addZero(secondTotal)}`;
        
        if (currentTime === duration) {stopPlay()};
    });

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration,
        value = videoProgress.value;

        videoPlayer.currentTime = (value *duration) / 100;
    })
}

export default videoPlayerInit;