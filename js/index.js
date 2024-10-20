function loadPage(page) {
    document.getElementById('contentFrame').src = page;
}

window.onload = function() {
    loadPage('../html/login.html');
};