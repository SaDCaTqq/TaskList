
'use strict'

function hideLoginBox() {
    var loginBox = document.getElementById('login-box');
    loginBox.style.display = 'none';
}

var enterButton = document.getElementById('entry');
enterButton.onclick = function() {
    alert("gfgfg");
    const loginBox = document.getElementById('login-box');
    loginBox.style.display = 'none';
}