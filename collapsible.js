var cols = document.getElementsByClassName('collapsible');
var i;
console.log("script loaded");
console.log("found: " + cols.length);
for (i = 0; i < cols.length; i++) {
    console.log("detected collapsible");
    cols[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}