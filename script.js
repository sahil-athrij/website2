function scrollVideo() {
        var video = $('video').get(0),
            videoLength = video.duration,
            scrollPosition = $(document).scrollTop()

        video.currentTime = (scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength;
        console.log((scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength)
    }
    $(window).scroll(function(e) {
        scrollVideo();
    });