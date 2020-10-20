var titleElement = document.getElementById('title');
if (titleElement) {
    titleElement.innerHTML = 'Hey I am learning typescript';
    titleElement.onclick = function () {
        console.log('clicked');
    };
}
;
var getValue = function () {
    var inputElement = document.getElementById('input-name');
    if (inputElement) {
        console.log('value', inputElement.value);
    }
};
