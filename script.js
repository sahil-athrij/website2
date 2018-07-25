function scrollVideo() {
        var video = $('video').get(0),
            videoLength = video.duration,
            scrollPosition = $(document).scrollTop();

        video.currentTime = (scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength;
        console.log((scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength);
        var time = (scrollPosition *1.0/ ($(document).height() - $(window).height())) * videoLength;
        element = document.getElementById("box");
        var rect = element.getBoundingClientRect();

       // else if (time < 0.952){
           // $(".box").css({'position' :'absolute' ,'bottom' : '0'});
      //  }
        document.getElementById("secc").style.display = "none";
        if(time>1.3 && time<1.9)
        {
            document.getElementById("secc").style.display = "block"

        }//show div 1

        else if(time > 3.06 && time <3.80)
        {

        }

        else if(time>4.95 && time <5.55){

        }

        else if(time>6.6){

        }
}
    $(window).scroll(function(e) {
        scrollVideo();
    });
