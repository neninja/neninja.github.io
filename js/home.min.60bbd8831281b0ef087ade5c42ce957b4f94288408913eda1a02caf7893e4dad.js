var varColors=["--dynamic-red","--dynamic-yellow","--dynamic-blue","--dynamic-magenta","--dynamic-cyan","--dynamic-green"],asciiArts;function random(a){return a[Math.floor(Math.random()*a.length)]}function randomColor(){return random(varColors)}function updateFgLinkRandomColor(a){var b=randomColor();a.style.setProperty("color","var("+b+")"),a.style.setProperty("background","var(--background-color)"),a.style.setProperty("border","1px solid var("+b+")"),a.querySelector("i").style.setProperty("color","var("+b+")"),a.querySelectorAll("i",function(a){a.style.setProperty("background","var("+b+")")})}function updateBgLinkRandomColor(a){var b=randomColor();a.style.setProperty("color","var(--background-color)"),a.style.setProperty("background","var("+b+")"),a.style.setProperty("border","1px solid var("+b+")"),a.querySelector("i").style.setProperty("color","var(--background-color)"),a.querySelectorAll("i",function(a){a.style.setProperty("background","var(--background-color)")})}document.getElementById("ascii").style.setProperty("color","var("+randomColor()+")"),document.querySelectorAll(".link").forEach(function(a){updateFgLinkRandomColor(a),a.addEventListener("mouseover",function(){if(a.getAttribute("data-type-style")==="bg"){updateFgLinkRandomColor(a),a.setAttribute("data-type-style","fg");return}updateBgLinkRandomColor(a),a.setAttribute("data-type-style","bg")})}),asciiArts=[`
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
  `,`
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
  `];function randomAscii(){return random(asciiArts)}document.getElementById("ascii").textContent=randomAscii()