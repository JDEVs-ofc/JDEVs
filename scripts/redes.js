function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  let imagens = ['https://4.bp.blogspot.com/-wpGcMwMGFHQ/V6ZtydFbufI/AAAAAAAADHk/4hELqSh4eYIUb1tqvi_VUN4f782BUSVgwCLcB/s2560/amazing_landscape-wallpaper-1920x1080.jpg',
               'https://clicandoeandando.com/wp-content/uploads/2017/09/Como-Fotografar-Paisagens-Com-Lente-Grande-Angular-Ubatuba.jpg',
               'https://tse1.mm.bing.net/th/id/OIP.xRMfZlnSrMB4FWtZ2yIqHwHaE8?pid=ImgDet&w=474&h=316&rs=1'
]
let img = document.querySelector('.carousel-img')
let contador = 0
img.src = imagens[contador]
function esquerda(){
    if(contador > 0){
        contador--
    }
    img.src = imagens[contador]
    console.log(contador)
}
function direita(){
    console.log(contador)
    if(contador < imagens.length-1){
        contador++
        // if(contador == 2){
        //     document.querySelector('#right').disabled = true
        // }
    }
    img.src = imagens[contador]
    console.log(contador)
}


