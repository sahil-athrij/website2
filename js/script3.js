function addBlur()
{
$('video').css("-webkit-filter" ,"blur(5px)");
$('video').css("-moz-filter" ,"blur(5px)");
$('video').css("-ms-filter" ,"blur(5px)");
}

function removeBlur(){
$('video').css("-webkit-filter" ,"blur(0px)");
$('video').css("-moz-filter" ,"blur(0px)");
$('video').css("-ms-filter" ,"blur(0px)");
}
