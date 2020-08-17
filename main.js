window.onload = function () {
    document.getElementById('a').innerHTML = 'Brasil ' + new Date().toLocaleString();
    document.getElementById('tema').onclick = function (e) {
        e.preventDefault();
        if (document.documentElement.getAttribute('data-theme') == 'dark') {
            document.documentElement.removeAttribute('data-theme');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

    }

}
