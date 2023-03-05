var varColors = [
  "--dynamic-red",
  "--dynamic-yellow",
  "--dynamic-blue",
  "--dynamic-magenta",
  "--dynamic-cyan",
  "--dynamic-green"
];

function random(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function randomColor() {
  return random(varColors);
}

function updateFgLinkRandomColor(e) {
  var color = randomColor();
  e.style.setProperty("color", "var("+color+")");
  e.style.setProperty("background", "var(--background-color)")
  e.style.setProperty("border", "1px solid var("+color+")");
  e.querySelector("i").style.setProperty("color", "var("+color+")")

  e.querySelectorAll("i", function(i) {
    i.style.setProperty("background", "var("+color+")");
  });
}

function updateBgLinkRandomColor(e) {
  var color = randomColor();
  e.style.setProperty("color", "var(--background-color)");
  e.style.setProperty("background", "var("+color+")")
  e.style.setProperty("border", "1px solid var("+color+")");
  e.querySelector("i").style.setProperty("color", "var(--background-color)")

  e.querySelectorAll("i", function(i) {
    i.style.setProperty("background", "var(--background-color)");
  });
}

document.getElementById("ascii").style.setProperty("color", "var("+randomColor()+")");
document.querySelectorAll(".link").forEach(function (e) {
  updateFgLinkRandomColor(e);

  e.addEventListener("mouseover", function() {
    if (e.getAttribute("data-type-style") === "bg") {
      updateFgLinkRandomColor(e);
      e.setAttribute("data-type-style", "fg");
      return;
    }

    updateBgLinkRandomColor(e);
    e.setAttribute("data-type-style", "bg");
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
