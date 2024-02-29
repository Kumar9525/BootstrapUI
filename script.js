let calcScrollValue = () => {
    let scrollProgress = document.getElementById("back-to-top");    
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;