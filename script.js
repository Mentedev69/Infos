function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  /* pegar a tag imagem */
  const img = document.querySelector("#profile img")

  /* substuir a imagem */
 if(html.classList.contains("light")){
   /* se tiver light mode, adicionar a imagem light */
    img.setAttribute('src', './assets/assets/avatar-light.png')
  } else {
    /* se tiver sem light mode, manter imagem normal  */
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

}