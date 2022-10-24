// <!-- Page loading scripts-->
(function () {
    window.onload = function () {
        const preloader = document.querySelector(".page-loading");
        preloader.classList.remove("active");
        setTimeout(function () {
            preloader.remove();
        }, 1500);
    };
})();
