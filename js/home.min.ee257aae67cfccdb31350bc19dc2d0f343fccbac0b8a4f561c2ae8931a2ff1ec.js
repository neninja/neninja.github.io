window.onload=function(){var g=["--dynamic-red","--dynamic-yellow","--dynamic-blue","--dynamic-magenta","--dynamic-cyan","--dynamic-green"],e,b,h;function c(a){return a[Math.floor(Math.random()*a.length)]}function a(){return c(g)}function d(b){var c=a();return b.style.setProperty("color","var("+c+")"),b.style.setProperty("background","var(--background-color)"),b.style.setProperty("border","1px solid var("+c+")"),b.querySelector("i").style.setProperty("color","var("+c+")"),b.querySelectorAll("i",function(a){a.style.setProperty("background","var("+c+")")}),b.setAttribute("data-type-style","fg"),b.setAttribute("data-color-style",c),c}function f(b){var c=a();return b.style.setProperty("color","var(--background-color)"),b.style.setProperty("background","var("+c+")"),b.style.setProperty("border","1px solid var("+c+")"),b.querySelector("i").style.setProperty("color","var(--background-color)"),b.querySelectorAll("i",function(a){a.style.setProperty("background","var(--background-color)")}),b.setAttribute("data-type-style","bg"),b.setAttribute("data-color-style",c),c}e=a(),b=document.getElementById("ascii"),b.style.setProperty("color","var("+e+")"),b.setAttribute("data-color-style",e),document.querySelectorAll(".link").forEach(function(a){d(a),a.addEventListener("mouseover",function(){var b=null,c=null,e,g,h;a.getAttribute("data-type-style")==="bg"?(b=d(a),c="fg"):(b=f(a),c="bg"),e=document.querySelectorAll('.link'),g=document.querySelectorAll('.link[data-type-style="'+c+'"][data-color-style="'+b+'"]'),h=document.querySelectorAll('[data-color-style="'+b+'"]'),e.length===g.length&&h.length===e.length+1&&confetti.start()})}),h=[`
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
  `];function i(){return c(h)}document.getElementById("ascii").textContent=i()}