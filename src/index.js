import "./style.scss";
// import "./js/gsap.js";
import { anim } from "./js/gsap";
// const root = document.getElementById("root");

anim();

const button = document.querySelector(".burger-menu");
const item = document.querySelector(".header__menu");
const header = document.querySelector(".header");

button.onclick = (e) => {
    button.classList.toggle("menu-open");
    item.classList.toggle("active");
    header.classList.toggle("active");
    document.body.classList.toggle("_block");
};

window.addEventListener("scroll", function () {
    scrollY > 0
        ? header.classList.add("scroll")
        : header.classList.remove("scroll");
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 400,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        // renderFraction: function (currentClass, totalClass) {
        //     return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
        // },
    },

    // Navigation arrows
    navigation: {
        nextEl: ".page-home__nav .swiper-button-next",
        prevEl: ".page-home__nav .swiper-button-prev",
    },

    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 20,
});

// form

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add("sending");
            let response = await fetch("sendmail.php", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = "";
                form.reset();
                form.classList.remove("sending");
            } else {
                alert("Поля заполнены");
                form.classList.remove("sending");
            }
        } else {
            alert("Заполните обязательно поля");
        }
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll(".req");
        console.log(formReq);
        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            console.log(input);
            formRemoveError(input);

            if (input.classList.contains(".email")) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        }

        return error;
    }

    function formAddError(input) {
        input.classList.add("error");
        // input.classList.remove("error");
    }

    function formRemoveError(input) {
        input.classList.remove("error");
        input.classList.remove("error");
    }

    function emailTest(input) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    }
});

// else if (
//     input.getAttribute("type") === "checkbox" &&
//     input.checked === false
// ) {
//     formAddError(input);
//     error++;
// }
