function openIMG(event) {
    if (event.target.tagName!='IMG') return;
    let div = document.querySelectorAll(".plagin div");
    div.forEach(el => {
        if (el != event.target.closest("div")) el.classList.remove("open");
    });
    event.target.closest("div").classList.toggle("open");
}

let plagin = document.querySelector(".plagin");
plagin.addEventListener("click", openIMG)
