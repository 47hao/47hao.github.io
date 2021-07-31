var cols = document.getElementsByClassName('collapsible');
var i;
console.log("script loaded");
console.log("found: " + cols.length);

for (i = 0; i < cols.length; i++) {
    console.log("detected collapsible");
    cols[i].addEventListener("click", function() { //click happened on the entire button
      this.children[1].classList.toggle("active");
      this.children[0].classList.toggle('down');
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.opacity = "0%";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "100%";
    }
  });
}