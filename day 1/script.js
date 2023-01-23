let imgs = document.querySelectorAll(".cont-img");
imgs.forEach((e) => {
    e.addEventListener('click', removeActive);
});

function removeActive() {
    imgs.forEach((el) => {
        el.classList.remove("active");
        this.classList.add("active");
    });
};