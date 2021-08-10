var cols = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < cols.length; i++) {
    console.log("detected collapsible");
    cols[i].addEventListener("click", function() { //click happened on the entire button
      this.children[1].classList.toggle('active');
      this.children[0].classList.toggle('down');
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.opacity = "0%";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "100%";

      var parent = this.parentElement;
      //close all other dropdowns when one is opened - WORK IN PROGRESS
      /*
      for (var i = 0; i<parent.children.length; i+= 2) { //2, because content are on the same level as collapsibles themselves
        var selectedColl = parent.children[i]
        if (selectedColl != this) {
          //Figure out how to remove active+down tags
          //selectedColl.children.classList.toggle('active');
          selectedColl.nextElementSibling.style.maxHeight = null;
          selectedColl.nextElementSibling.style.opacity = "0%";
        }
      }
      */
    }
  });
}