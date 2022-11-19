var couter = 1;
setInterval(function () {
    document.getElementById('radio' + couter).checked = true;
    couter++;
    if (couter > 4) {
        couter = 1;
    }
}, 5000);

function setDarkMod(isDark) {
    if (isDark) {

        document.body.setAttribute('id', 'dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.setAttribute('id', '')
        localStorage.removeItem('theme', '')
    }
}

if (localStorage.getItem('theme') == 'dark')
    setDarkMod(true)