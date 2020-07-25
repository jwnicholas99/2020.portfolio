// Nav-list
var menu_toggler = document.getElementsByClassName("menu_toggler");
var top_nav = document.getElementsByClassName("top_nav");

menu_toggler[0].onclick = function () {
  this.classList.toggle('is_open');
  top_nav[0].classList.toggle('is_open');
}

// Accordian
var accordian_btns = document.getElementsByClassName("accordian_btn");

for (var i = 0; i < accordian_btns.length; i++){
  accordian_btns[i].onclick = function () {
    this.classList.toggle('is_open');
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // Accordian panel is open - need to close it
      content.style.maxHeight = null;
    } else {
      // Accordian panel is closed - need to open it
      content.style.maxHeight = content.scrollHeight + "px"
    }
  }
}

