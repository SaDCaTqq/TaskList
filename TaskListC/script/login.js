const entryBtn = document.getElementById('button-entry');
const tip = document.getElementById('tip');

function dokek() {
    console.log('kekekekeke');
}

entryBtn.onclick = function () {
    location.href =  "list-page.html";
}
tip.onclick = dokek;
