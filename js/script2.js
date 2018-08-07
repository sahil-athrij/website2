




function makeathon() {

    window.location.href = "../make-a-ton/index.html";


}



function opencontact() {
    stopped="yes";

    document.getElementById('contactus').style.zIndex = 1;

    $('#contactus').animate({
        opacity:1,
    })

}

function closecontact() {

    stopped="no";


    $('#contactus').animate({
        opacity:0,
    },500,function () {

        document.getElementById('contactus').style.zIndex = -101;
    })

}




function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function writeUserData() {

    var iframe = document.getElementById('cont').contentWindow.document;
    var name = iframe.getElementById('name').value;
    console.log(name);
    var message = iframe.getElementById('message').value;
    var mail = iframe.getElementById('email').value;
    database.ref("messages/landing/"+makeid()).update({
        email: mail,
        Name: name,
        Message: message,

    });

    alert("message sent");

    closecontact();
}


