import { games } from "./NameGame.js"
export default {
  data(){
    return{
      xSize: {},
      name: {},
      link:{}
      };
    },
    created(){
      this.xSize = screen.width;
    },
    methods: {
      buscar(){
        const formulario = document.querySelector('#formulario');
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = "";
        const texto = formulario.value.toLowerCase();/* El texto del usuario que esta del input */
        for (let game of games) {
          this.link = game.Link
          this.name = game.Nombre.toLowerCase();
          if(this.name.indexOf(texto) !== -1){
            resultado.innerHTML += `<a href="${this.link}"><li id="resultado">${this.name.toLocaleUpperCase()}</li></a>`
          } 
        }
        if (resultado.innerHTML === '') {
          resultado.innerHTML += `<li id="resultado">No se encuentran resultados</li>`         
        }
      },
      abrirbuscador(){
        document.getElementById('window-search-mobile').style.display="block"
        document.getElementById('vistas').style.display="none"
        document.getElementById('navbarNavAltMarkup').style.display="none"
      },
      cerrarbuscador(){
        document.getElementById('window-search-mobile').style.display="none"
        document.getElementById('vistas').style.display="block"
        document.getElementById('navbarNavAltMarkup').style.display=""
      },
      abrirMenu(){
        document.getElementById('window-search-mobile').style.display="none"
        document.getElementById('vistas').style.display="block"
        document.getElementById('navbarNavAltMarkup').style.display=""
      }
    }
}




