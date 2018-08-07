

var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);




function makeathon() {

    window.location.href = "../make-a-ton/index.html";


}









function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function writeUserData() {

    var name = document.getElementById('name').value;
    console.log(name);
    var message = document.getElementById('message').value;
    var mail = document.getElementById('email').value;
    firebase.database().ref("messages/landing/"+makeid()).update({
        email: mail,
        Name: name,
        Message: message,

    });

    alert("message sent");

}


