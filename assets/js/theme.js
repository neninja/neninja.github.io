let root = document.documentElement
let temaAtual = localStorage.getItem('tema')

if(!temaAtual){
    temaAtual = 'dark'
    localStorage.setItem('tema', temaAtual)
}

escolheTema(temaAtual)

let buttonThemeElement = document.querySelector("button.toggle-theme")

buttonThemeElement.onclick = function(){
    let temaAtual = localStorage.getItem('tema')
    let temaNovo = temaAtual === 'dark' ? 'light' : 'dark'
    localStorage.setItem('tema', temaNovo)
    escolheTema(temaNovo)
}

function escolheTema(tema){
    let buttonThemeElement = document.querySelector("button.toggle-theme")
    switch(tema){
        case 'dark':
            root.style.setProperty('--ui-background-color', "#000")
            root.style.setProperty('--ui-base-color', "var(--onedark-light-white)")
            root.style.setProperty('--ui-link-rodape-color', "var(--onedark-light-red)")
            root.style.setProperty('--ui-border-color', "var(--onedark-green)")
            buttonThemeElement.innerHTML = 'Dark'
            break
        case 'light':
            root.style.setProperty('--ui-background-color', "var(--onedark-light-white)")
            root.style.setProperty('--ui-base-color', "var(--onedark-dark-black)")
            root.style.setProperty('--ui-link-rodape-color', "var(--onedark-dark-red)")
            root.style.setProperty('--ui-border-color', "var(--onedark-dark-grey)")
            buttonThemeElement.innerHTML = 'Light'
            break
    }
}
