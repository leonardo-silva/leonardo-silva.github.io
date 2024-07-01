function relocate_link(url) {
  window.open(url, 
    '_blank' // <- This is what makes it open in a new window.
  );
} 

function navItemFocusControl(navLinkReference) {
  const activeItems = document.getElementsByClassName("nav-link active");
  if (activeItems[0] !== navLinkReference) {
    activeItems[0].classList.remove("active");
    navLinkReference.classList.add("active");
  }  
}