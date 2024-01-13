document.getElementById('italic-button').addEventListener('click', function () {
    document.getElementById('user-textarea').style.fontStyle = 'italic';
});


document.getElementById('underline-button').addEventListener('click', function () {
    document.getElementById('user-textarea').style.textDecoration = 'underline';
});


document.getElementById('bold-button').addEventListener('click', function () {
    document.getElementById('user-textarea').style.fontWeight = 'bold';
});


document.getElementById('align-left-button').addEventListener('click', function () {
    document.getElementById('user-textarea').style.textAlign = 'left';
});


document.getElementById('align-center-button').addEventListener('click', function () {
    document.getElementById('user-textarea').style.textAlign = 'center';
});



document.getElementById('align-right-button').addEventListener('click', function () {
    document.getElementById('user-textarea').style.textAlign = 'right';
});


document.getElementById('text-color-button').addEventListener('click', function () {
    document.getElementById('user-textarea').style.color = 'red';
});


document.getElementById('set-text-size-button').addEventListener('click', function () {
    const textSizeInput = document.getElementById('text-size-input');
    const textSize = parseInt(textSizeInput.value);

    if (!isNaN(textSize) && textSize > 0) {
        document.getElementById('user-textarea').style.fontSize = textSize + 'px';
    }
});


