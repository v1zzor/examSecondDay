window.onscroll = function showHeader() {
    let header = document.querySelector(".headerWrapper");
  
    if(window.pageYOffset > 100)
    {
      header.classList.add("header-fixed");
    }
    else
    {
      header.classList.remove("header-fixed");
    }
}

