function scrollVideo() {
        var video = $('video').get(0),
            videoLength = video.duration,
            scrollPosition = $(document).scrollTop()

        video.currentTime = (scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength;
        console.log((scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength)
        var time = (scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength
        element = document.getElementById("box");
        var rect = element.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        if (rect.top <=0){
            $(".box").css({'position' :'fixed' ,'bottom' : '60%'});
        }
       // else if (rect.top>=500px){
         //   $(".box").css({'position' :'absolute' ,'bottom' : '0'});
        //}
}
    $(window).scroll(function(e) {
        scrollVideo();
    });
