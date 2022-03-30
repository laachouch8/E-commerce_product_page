let menu = document.querySelector("header .nav .nav-bar");
let nav = document.querySelector("header .nav ul");
let navClose = document.querySelector("header .nav .close");

let cart = document.querySelector("header .profile .cart img");
let order = document.querySelector("header .profile .cart .order");

let DivchoseImages = document.querySelectorAll(".landing .products .chose div");
let image = document.querySelectorAll(".landing .products .product img");
let imageArr = Array.from(image);

let openImage = document.querySelector(".images");
let openImageimg = document.querySelectorAll(".images .image img");
let close = document.querySelector(".images .close i");
let choseImages = document.querySelectorAll(".images .chose div");
let closeImages = document.querySelector(".images .closeImages");
let closeDivs = document.querySelector(".closeDivs");


menu.onclick = function () {
    nav.classList.add("active");
    closeDivs.classList.add("open")
    document.body.style.overflowY = "hidden";
}

navClose.addEventListener("click", removeClass);

function removeClass() {
    navClose.parentElement.classList.remove("active");
    closeDivs.classList.remove("open")
    document.body.style.overflowY = "auto";
}

closeDivs.onclick = removeClass;

cart.onclick = function () {
    order.classList.toggle("active");
}

DivchoseImages.forEach((img) => {
    img.addEventListener('click', removeopen);
    img.addEventListener('click', manageImages);
});

function removeopen() {
    DivchoseImages.forEach((img) => {
        img.classList.remove("open");
        this.classList.add("open");
    });
}

function manageImages() {
    image.forEach((img) => {
        img.classList.remove('open');
    });
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
        img.classList.add('open');
    });
};

image.forEach((img) => {
    img.addEventListener('click', openImages)
});

function openImages() {
    openImage.classList.add("open");
    closeImages.classList.add("open");
}

close.onclick = function () {
    openImage.classList.remove("open");
    closeImages.classList.remove("open");
}

closeImages.onclick = function () {
    openImage.classList.remove("open");
    closeImages.classList.remove("open");
    nav.classList.remove("active");
}

choseImages.forEach((img) => {
    img.addEventListener('click', removeopenTwo);
    img.addEventListener('click', manageImagestwo);
});


function removeopenTwo() {
    choseImages.forEach((img) => {
        img.classList.remove("open");
        this.classList.add("open");
    });
}
function manageImagestwo() {
    openImageimg.forEach((img) => {
        img.classList.remove('open');
    });
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
        img.classList.add('open');
    });
}

let minus = document.querySelector(".landing .info-product .add .number .fa-minus");
let plus = document.querySelector(".landing .info-product .add .number .fa-plus");
let quanSpan = document.querySelector(".landing .info-product .add .number span");
let buttonCart = document.querySelector(".landing .info-product .add button");

let empty = document.querySelector("header .profile .cart .order .section .empty");
let detailOrder = document.querySelector("header .profile .cart .order .section .detail-order");
let num = document.querySelector("header .profile .cart .order .section .detail-order .info .text .quantity");
let total = document.querySelector("header .profile .cart .order .section .detail-order .info .text .price .total span");
let numQuantity = document.querySelector("header .profile .cart .number");
let delet = document.querySelector("header .profile .cart img.delete");

plus.onclick = function () {
    quanSpan.textContent = +quanSpan.textContent + 1;
}

minus.onclick = function () {
    if (quanSpan.textContent != "1") {
        quanSpan.textContent = +quanSpan.textContent - 1;
    }
}

buttonCart.onclick = function () {
    if (quanSpan.textContent != "0") {
        empty.classList.add('close');
        detailOrder.classList.add("open");
        num.textContent = +num.textContent + +quanSpan.textContent;
        total.textContent = `${125 * +num.textContent}.00`;
        numQuantity.style.opacity = 1;
        numQuantity.textContent = +numQuantity.textContent + +quanSpan.textContent;
    }
}

delet.onclick = function () {
    empty.classList.remove('close');
    detailOrder.classList.remove("open");
    numQuantity.style.opacity = 0;
    numQuantity.textContent = 0
    num.textContent = 0;
}

let buttons = document.querySelectorAll("[data-carousel-button]");
let btns = document.querySelectorAll("[data-carousel-btns]");

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const offset = btn.dataset.carouselButton === "next" ? 1 : -1;
        const slides = btn
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const openSlide = slides.querySelector(".images .image img.open")
        let newIndex = [...slides.children].indexOf(openSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        openSlide.classList.remove("open")
        slides.children[newIndex].classList.add("open");

        choseImages.forEach((img) => {
            img.classList.remove("open")
        })

        const divsImgs = [...choseImages];
        for (let i = 0; i < divsImgs.length; i++) {
            if (slides.children[newIndex].classList.contains(`${divsImgs[i].dataset.cat}`.slice(1))) {
                divsImgs[i].classList.add("open");
                break;
            }
        }
    })
});

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const offset = btn.dataset.carouselBtns === "next" ? 1 : -1;
        const slides = btn
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const openSlide = slides.querySelector(".landing .products .product img.open")
        let newIndex = [...slides.children].indexOf(openSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        openSlide.classList.remove("open")
        slides.children[newIndex].classList.add("open");
    })
});