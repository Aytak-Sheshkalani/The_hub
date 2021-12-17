function handleBurger() {
    var link = document.getElementById("topNav");
    var icon = document.getElementById("nav-icon2");
    console.log(link.className)
    if (link.className === "topnav") {
      link.className += " responsive";
      icon.className += "open";

    } else {
      link.className = "topnav";
      icon.className = "";
    }
  }