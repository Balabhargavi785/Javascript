document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const copyPasteErrorSpan = document.getElementById('copy-paste-error');

newPasswordInput.addEventListener('copy', function(e) {
    e.preventDefault();
    copyPasteErrorSpan.innerText = 'Copy is restricted';
    setTimeout(function() {
        copyPasteErrorSpan.innerText = '';
    }, 2000);
});

newPasswordInput.addEventListener('paste', function(e) {
    e.preventDefault();
    copyPasteErrorSpan.innerText = 'Paste is restricted';
    setTimeout(function() {
        copyPasteErrorSpan.innerText = '';
    }, 2000);
});

confirmPasswordInput.addEventListener('copy', function(e) {
    e.preventDefault();
    copyPasteErrorSpan.innerText = 'Copy is restricted';
    setTimeout(function() {
        copyPasteErrorSpan.innerText = '';
    }, 2000);
});

confirmPasswordInput.addEventListener('paste', function(e) {
    e.preventDefault();
    copyPasteErrorSpan.innerText = 'Paste is restricted';
    setTimeout(function() {
        copyPasteErrorSpan.innerText = '';
    }, 2000);
});
