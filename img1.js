function img1() {
    let img1 = document.getElementById("paragrafo");

    img1.addEventListener("mouseout", mouseout);

    function mouseout() {
        this.innerHTML = "texto anterior";
    }
}
