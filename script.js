// Nav-list
var menu_toggler = document.getElementsByClassName("menu_toggler");
var top_nav = document.getElementsByClassName("top_nav");
var icons = document.getElementsByClassName("nav_link");

menu_toggler[0].onclick = function () {
  this.classList.toggle('is_open');
  top_nav[0].classList.toggle('is_open');
}

for (var i = 0; i < icons.length; i++){
  icons[i].onclick = function () {
    menu_toggler[0].classList.toggle('is_open');
    top_nav[0].classList.toggle('is_open');
  }
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



// Typewriter
var char_idx = 0;
var is_deleting = false;
var words = ["Nicholas", "a Maker", "a Developer"]; // speed in milliseconds
var colors = ["#ff595e", "#8ac926", "#6a4c93"];
var word_idx = 0;

function type_writer() {
  word_idx = word_idx % words.length;
  var cur_word = words[word_idx];
  document.getElementById("typewriter").style.background = colors[word_idx];
  var speed = 150;

  if (is_deleting){
    speed /= 2;
    if(char_idx >= 0){
      document.getElementById("typewriter").innerHTML = cur_word.slice(0, char_idx);
      char_idx--;
      setTimeout(type_writer, speed);
    } else {
      is_deleting = false;
      word_idx++;
      setTimeout(type_writer, 1000);
    }
  } else {
    if (char_idx < cur_word.length) {
      document.getElementById("typewriter").innerHTML += cur_word.charAt(char_idx);
      char_idx++;
      setTimeout(type_writer, speed);
    } else {
      is_deleting = true;
      setTimeout(type_writer, 1500);
    }
  }
}

document.addEventListener('DOMContentLoaded', type_writer);
