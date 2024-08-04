var counter = 0;
function updateCounter() {
    document.getElementById('counter').innerText = counter;
}
function increaseCounter() {
    counter++;
    updateCounter();
}
function decreaseCounter() {
    counter--;
    updateCounter();
}
function restartCounter() {
    counter = 0;
    updateCounter();
}