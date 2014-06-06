function toggleMenu(e){
  var a_elements = e.target.parentNode.parentNode.getElementsByTagName("a");
  for (var i = 0, len = a_elements.length; i < len; i++ ) {
        if(a_elements[i].id != "hamburger-menu") {
          if(a_elements[i].style.visibility == "hidden") {
            a_elements[i].style.visibility = "visible";
            a_elements[i].style.display = "block";
            a_elements[i].parentNode.style.width = "100%";              
          }          
          else {
            a_elements[i].style.visibility = "hidden";
            a_elements[i].style.display = "none";
            a_elements[i].parentNode.style.width = "auto";
            a_elements[i].parentNode.parentNode.style.padding = "0";
         }
      }
   }
}

document.getElementById("hamburger-menu").addEventListener("click", toggleMenu);
