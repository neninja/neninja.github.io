window.onload = function() {
  var varColors = [
    "--dynamic-red",
    "--dynamic-yellow",
    "--dynamic-blue",
    "--dynamic-magenta",
    "--dynamic-cyan",
    "--dynamic-green"
  ];

  function random(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function randomColor() {
    return random(varColors);
  }

  function updateFgLinkRandomColor(e) {
    var color = randomColor();
    e.style.setProperty("color", "var(" + color + ")");
    e.style.setProperty("background", "var(--background-color)")
    e.style.setProperty("border", "1px solid var(" + color + ")");
    e.querySelector("i").style.setProperty("color", "var(" + color + ")")

    e.querySelectorAll("i", function(i) {
      i.style.setProperty("background", "var(" + color + ")");
    });

    e.setAttribute("data-type-style", "fg");
    e.setAttribute("data-color-style", color);

    return color;
  }

  function updateBgLinkRandomColor(e) {
    var color = randomColor();
    e.style.setProperty("color", "var(--background-color)");
    e.style.setProperty("background", "var(" + color + ")")
    e.style.setProperty("border", "1px solid var(" + color + ")");
    e.querySelector("i").style.setProperty("color", "var(--background-color)")

    e.querySelectorAll("i", function(i) {
      i.style.setProperty("background", "var(--background-color)");
    });

    e.setAttribute("data-type-style", "bg");
    e.setAttribute("data-color-style", color);

    return color;
  }

  var asciiColor = randomColor();
  var asciiElement = document.getElementById("ascii");
  asciiElement.style.setProperty("color", "var(" + asciiColor + ")");
  asciiElement.setAttribute("data-color-style", asciiColor);

  document.querySelectorAll(".link").forEach(function(e) {
    updateFgLinkRandomColor(e);

    e.addEventListener("mouseover", function() {
      var selectedColor = null;
      var selectedType = null;
      if (e.getAttribute("data-type-style") === "bg") {
        selectedColor = updateFgLinkRandomColor(e);
        selectedType = "fg";
      } else {
        selectedColor = updateBgLinkRandomColor(e);
        selectedType = "bg";
      }

      var linksElements = document.querySelectorAll('.link');
      var linksElementsWithSameColor = document.querySelectorAll('.link[data-type-style="' + selectedType + '"][data-color-style="' + selectedColor + '"]');
      var allElementsWithSameColor = document.querySelectorAll('[data-color-style="' + selectedColor + '"]');

      if (linksElements.length === linksElementsWithSameColor.length
        && allElementsWithSameColor.length === linksElements.length + 1) {
        confetti.start();
      }
    });
  });

  var asciiArts = [
    `
    ███╗   ███╗ █████╗ ██╗  ██╗███████╗   
    ████╗ ████║██╔══██╗██║ ██╔╝██╔════╝   
    ██╔████╔██║███████║█████╔╝ █████╗     
    ██║╚██╔╝██║██╔══██║██╔═██╗ ██╔══╝     
    ██║ ╚═╝ ██║██║  ██║██║  ██╗███████╗   
    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   
      ██████╗ ██████╗  ██████╗ ██╗        
     ██╔════╝██╔═══██╗██╔═══██╗██║        
     ██║     ██║   ██║██║   ██║██║        
     ██║     ██║   ██║██║   ██║██║        
     ╚██████╗╚██████╔╝╚██████╔╝███████╗   
      ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝   
███████╗████████╗██╗   ██╗███████╗███████╗
██╔════╝╚══██╔══╝██║   ██║██╔════╝██╔════╝
███████╗   ██║   ██║   ██║█████╗  █████╗  
╚════██║   ██║   ██║   ██║██╔══╝  ██╔══╝  
███████║   ██║   ╚██████╔╝██║     ██║     
╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝     
  `,
    `
       ██████╗ ██╗   ██╗██╗██╗     ██████╗         
       ██╔══██╗██║   ██║██║██║     ██╔══██╗        
       ██████╔╝██║   ██║██║██║     ██║  ██║        
       ██╔══██╗██║   ██║██║██║     ██║  ██║        
       ██████╔╝╚██████╔╝██║███████╗██████╔╝        
       ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝         
██████╗  ██████╗ ██████╗ ██╗   ██╗███████╗████████╗
██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔════╝╚══██╔══╝
██████╔╝██║   ██║██████╔╝██║   ██║███████╗   ██║   
██╔══██╗██║   ██║██╔══██╗██║   ██║╚════██║   ██║   
██║  ██║╚██████╔╝██████╔╝╚██████╔╝███████║   ██║   
╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝   
    ███████╗████████╗██╗   ██╗███████╗███████╗     
    ██╔════╝╚══██╔══╝██║   ██║██╔════╝██╔════╝     
    ███████╗   ██║   ██║   ██║█████╗  █████╗       
    ╚════██║   ██║   ██║   ██║██╔══╝  ██╔══╝       
    ███████║   ██║   ╚██████╔╝██║     ██║          
    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝          
  `
  ];

  function randomAscii() {
    return random(asciiArts);
  }

  document.getElementById("ascii").textContent = randomAscii();
};
