window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scrollToTopBtn").style.display = "flex";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
