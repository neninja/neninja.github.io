var varColors=["--dynamic-red","--dynamic-yellow","--dynamic-blue","--dynamic-magenta","--dynamic-cyan","--dynamic-green"],asciiArts;function random(a){return a[Math.floor(Math.random()*a.length)]}function randomColor(){return random(varColors)}document.getElementById("ascii").style.setProperty("color","var("+randomColor()+")"),document.querySelectorAll(".link").forEach(function(a){var b=randomColor();a.style.setProperty("color","var("+b+")"),a.style.setProperty("border","1px solid var("+b+")"),a.querySelector("i").style.setProperty("color","var("+b+")"),a.addEventListener("mouseover",function(){a.style.setProperty("color","var(--background-color)"),a.style.setProperty("animation","rainbow 2.5s linear"),a.style.setProperty("animation-iteration-count","infinite"),a.style.setProperty("animation-delay","-"+random([0,.5,1,1.5,2,2.5])+"s")}),a.addEventListener("mouseleave",function(){a.style.setProperty("transition","0s"),a.style.setProperty("color","var("+b+")"),a.style.setProperty("background","var(--background-color)"),a.style.setProperty("animation","unset"),a.style.setProperty("animation-iteration-count","unset")})}),asciiArts=[`
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