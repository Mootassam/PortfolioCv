const links = document.querySelector(".header__links");
const links__ul = document.querySelector("#links__ul");
const header = document.querySelector(".header");

const close = document.getElementById("#close");
const hamburger = document.getElementById("#hamburger");
const showMenue = () => {
  links.style = " display:flex";
};

const hideMenue = () => {
  links.style = " display:none";
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
  // links.style = " display:none";
};

const navigationHeight = document.querySelector(".header__links");

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight - 1 + "px"
);
window.matchMedia("max-width:1024px").addEventListener("change", function () {
  links.style = " display:flex";
});

var media_query = "screen and (max-width:1024px)";

// event to watch the media query
window.matchMedia(media_query).addEventListener("change", function () {
  // matched or not
  var matched = this.matches;

  if (matched) {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
});
