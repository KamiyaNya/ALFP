function showTextBtn() {
    let hideButton = document.querySelector('.hide-button');
    let showButton = document.querySelector('.show-button');
    let textBlock = document.querySelector('.hide-text');
    textBlock.style.display = "block";
    showButton.style.display = "none";
    hideButton.style.display = "block";
}

function hideTextBtn() {
    let hideButton = document.querySelector('.hide-button');
    let showButton = document.querySelector('.show-button');
    let textBlock = document.querySelector('.hide-text');
    textBlock.style.display = "none";
    showButton.style.display = "block";
    hideButton.style.display = "none";
}