function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

let contador = 0
function girarGrafico(){
    let rotacao = document.querySelector('.bord')
    contador+=360
    rotacao.style.transform=`rotate(${contador}deg)`

}