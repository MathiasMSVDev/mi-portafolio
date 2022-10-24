// <!-- Theme mode-->
let mode = window.localStorage.getItem("mode"),
    root = document.getElementsByTagName("html")[0];
if (mode !== undefined && mode === "dark") {
    root.classList.add("dark-mode");
} else {
    root.classList.remove("dark-mode");
}
