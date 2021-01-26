
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});