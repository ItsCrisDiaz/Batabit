if (document.documentElement.clientWidth < 900) {
  var slideIndex = [1, 1];
  var slideId = ["slider1", "slider2"];
  showDivs(1, 0);
  showDivs(1, 1);

  function plusDivs(n, no) {
    showDivs((slideIndex[no] += n), no);
  }

  function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
      slideIndex[no] = 1;
    }
    if (n < 1) {
      slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
  }
}
