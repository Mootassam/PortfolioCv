const links = document.querySelector(".header__links");
const links__ul = document.querySelector("#links__ul");
const header = document.querySelector(".header");

window.matchMedia("min-width:1024px").addEventListener("change", function () {
  links.style = " display:flex";
});

const showMenue = () => {
  if (links.style.display == "flex") {
    links.style = " display:none";
  } else {
    links.style = " display:flex";
  }
};

// active the current a //

const links_active = document.getElementsByClassName("menue");
const showCurrent = (evt) => {
  for (let index = 0; index < links_active.length; index++) {
    links_active[index].className = links_active[index].className.replace(
      "current",
      ""
    );
  }
  evt.currentTarget.className += " current";
};

const navigationHeight = document.querySelector(".header__links");

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight - 1 + "px"
);
