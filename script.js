const btn = document.querySelector(".dropdown__button");
const dropdownList = document.querySelector(".dropdown__list");
const listItems = document.querySelectorAll(".dropdown__list-item");
const inputHidden = document.querySelector(".dropdown__input-hidden");
console.log(listItems);

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

btn.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list-visible");
  btn.classList.toggle("dropdown__button-active");
});

// Выбор элементов списка, запоминание выбранного значения, закрытие списка

listItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    let target = e.target;
    console.log(target);
    document.querySelector(".dropdown__button").innerText = target.innerText;
    document.querySelector(".dropdown__button").focus();
    inputHidden.value = target.dataset.value;
    dropdownList.classList.remove("dropdown__list-visible");
    btn.classList.remove("dropdown__button-active");
  });
});

// Закрытие дропдауна по клику вне списка

document.addEventListener("click", (e) => {
  if (e.target !== btn) {
    dropdownList.classList.remove("dropdown__list-visible");
    btn.classList.remove("dropdown__button-active");
  }
});

var Swipes = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
