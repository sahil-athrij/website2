
//if you are from cusat and you understand this please contact sahil athrij cs s5 or akul santhosh cs s5
sct = $(document).scrollTop();
function scrollVideo() {
        //var video = $('video').get(0),
        //  videoLength = video.duration,
            scrollPosition = $(document).scrollTop();

        //var time = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;
        //video.currentTime = time;


       // else if (time < 0.952){
           // $(".box").css({'position' :'absolute' ,'bottom' : '0'});
      //  }

        console.log(top,scrollPosition);
        if(stopped == "no" && sct-scrollPosition<0) {

            if (displayed == "no") {
                video.play();


            }


            else if (displayed2 == "no") {
                video.play();
                if(secc1animate == 0) {

                    $("#secc1").animate({
                        top: "-20%",
                        opacity:0


                    }, 500);
                    secc1animate = 2;

                }
            }

            else if (displayed3 == "no") {
                video.play()
                if(secc2animate == 0) {

                    $("#secc2").animate({
                        top: "-20%",
                        opacity:0


                    }, 500);
                    secc21animate = 2;

                }
            }

            else if (displayed4 == "no") {
                video.play()
            }
        }
        sct = scrollPosition;

/*        if(time>1.3 && time<1.9)
        {
            if(displayed == "no") {
                secc.style.opacity = 1;
                displayed ="yes"
            }
        }//show div 1

        else if(time > 3.06 && time <3.80)
        {

        }

        else if(time>4.95 && time <5.55){

        }

        else if(time>6.6){

        }

        else if(displayed == "yes"){
            secc.style.opacity = 0;
            displayed = "no";

        }
        */
}
    $(window).scroll(function(e) {

        scrollVideo();
    });
var stopped = "no";
var displayed2 = "yes";
var displayed3 = "yes";
var displayed4 = "yes";
var displayed = "no";

var secc = document.getElementById("secc1");



var secc1animate = 1;
var secc2animate = 1;

var video = $('video').get(0);
video.addEventListener("timeupdate", function(){
    console.log(this.currentTime);
    if(this.currentTime >= .3 && this.currentTime<=.8){
    }


    else if(this.currentTime >= 1.0 && this.currentTime<=1.4) {

        if(secc1animate){
            secc1animate = 0;
            $("#secc1").animate({
                top: "5%",
                opacity:.75


            }, 500);

            $("#secc1").animate({
                top: "15%",
                opacity:1

            }, 500);

            $("#secc1").animate({
                top: "10%",

            }, 300);

        }
    }



    else if(this.currentTime >= 1.4 && this.currentTime<=1.7) {

        this.pause();
        displayed = "yes";
        displayed2 = "no";
    }



    else if(this.currentTime >= 3.0 && this.currentTime<=3.3){
        if(secc2animate){
            secc2animate = 0;
            $("#secc2").animate({
                top: "5%",
                opacity:.75


            }, 500);

            $("#secc2").animate({
                top: "15%",
                opacity:1

            }, 500);

            $("#secc2").animate({
                top: "10%",

            }, 300);

        }

    }

    else if(this.currentTime >= 3.3 && this.currentTime<=3.6){
        this.pause();
        displayed = "yes";
        displayed2 = "yes";
        displayed3 = "no";
    }

    else if(this.currentTime >= 5 && this.currentTime<=5.1){
        this.pause();
        displayed = "yes";
        displayed2 = "yes";
        displayed3 = "yes";
        displayed4 = "no";
    }

    else if(this.currentTime >= 7.1){
        this.pause();
        displayed = "yes";
        displayed2 = "yes";
        displayed3 = "yes";
        displayed4 = "yes";
        stopped = "yes";
        $("#navbar").animate({
          opacity:1,
          
        },1000);

        $("#clockdiv").animate({
            top: "40%",
            left:"+=20%"

        }, 500);

        $("#box").animate({
            top: "-70%",
            left: "-3%"

        }, 500);





    }


});



function deletediv(){
    var del = document.getElementById("hider");
    del.remove();
    video.play();
    video.pause();
    $(".loading").animate({
        opacity:1,

    },1000);

}

video.addEventListener('loadeddata', function() {


    video.pause();



    $(".box").animate({
        opacity:.75,

    },1000);
    $(".emailicon").animate({
        opacity:1,

    },1000);

    $(".loading").animate({
        opacity:0,

    },1000)
});