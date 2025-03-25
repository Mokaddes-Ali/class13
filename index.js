// Event Button
document.getElementById('btn').addEventListener('click', function(event) {
    console.log(event);
});

// Alert Button
document.getElementById('btnAlt').addEventListener('click', function() {
    alert('Thanks for using our website!');
});

// Confirm Button
document.getElementById('myConfirm').addEventListener('click', () => {
    const result = confirm('Do you want to leave this page?');
    console.log(result ? 'User clicked OK' : 'User clicked Cancel');
});

// Prompt Button
document.getElementById('myPrompt').addEventListener('click', () => {
    const result = prompt('What is your name?');
    console.log(result);
});

const myClose = document.getElementById('myClose');
myClose.addEventListener('click', function() {
    window.close();
});
const myText = document.getElementById('myText');
myText.addEventListener('focus', function() {
    const myColor = document.getElementById('myColor');
    myColor.style.backgroundColor = 'yellow';
    myColor.style.color = 'black';
    myColor.style.textAlign = 'center';
    myColor.innerHTML = 'Text field focused';
});

const seeHidden = document.getElementById('see-hidden-text');

    seeHidden.addEventListener('click', function() {
        const hiddenText = document.getElementById('hidden-text');
        if (hiddenText.style.display === 'none') {
            hiddenText.style.display = 'block';
            seeHidden.textContent = 'Hide Text';
        } else {
            hiddenText.style.display = 'none';
            seeHidden.textContent = 'See Text';
        }
    });