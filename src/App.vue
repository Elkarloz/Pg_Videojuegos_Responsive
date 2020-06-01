<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <router-link to="/"><img src="./img/icon/HomeIcon.png" alt="IconHome"></router-link>
        <div class="ml-auto mr-auto" v-if="this.xSize<=991" id="IconSearch">
            <img src="./img/icon/SearchIcon.png" alt="Icon" @click="abrirbuscador()">
          <div id="window-search-mobile">
            <div class="col-md-12" ><!-- Btn and serach -->
              <form class="form-inline my-2 my-lg-0 text-center" id="search-mobile" autocomplete="off">
              <input class="form-control mr-sm-2 ml-auto mr-auto" type="search" placeholder="Search" aria-label="Search" id="formulario" @keyup="buscar()">
                <button class="btn btn-outline-primary my-2 my-sm-0 ml-auto mr-auto" type="submit" id="btn">Search</button>  
              </form>
              <span class="ml-auto mr-auto" @click="cerrarbuscador()" id="X">X</span>
            </div>    
            <ul>
              <li id="resultado"></li>
            </ul>
          </div>
        </div> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" @click="abrirMenu()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mr-auto ml-auto" >
            <router-link to="/" id="home">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/Shop">SHOP</router-link> 
            <a><!-- dropdown -->
              <ul id="dropdown">
                <li>
                  <router-link to="/games">GAME&#9662;</router-link> 
                  <ul id="menuItem">
                    GAME
                    <li> 
                      <a href="#">Acción</a>
                    </li>
                    <li><a href="#">Aventura</a></li>  
                    <li><a href="#">Deporte</a></li>  
                    <li><a href="#">Estrategia</a></li>
                    <li id="X-2" v-if="this.xSize<=960" class="ml-auto mr-auto">X</li>  
                  </ul>
                </li>
              </ul>
            </a>
          
          </div>
          <form class="form-inline my-2 my-lg-0 text-center" id="search" autocomplete="off" v-if="this.xSize>=992">
            <input class="form-control mr-sm-2 ml-auto mr-auto" type="search" placeholder="Search" aria-label="Search" id="formulario" @keyup="buscar()">
              <button class="btn btn-outline-primary my-2 my-sm-0 ml-auto mr-auto" type="submit" id="btn" @click.prevent="buscar()">Search</button>  
            <div id="window-search">
              <ul>
                <li id="resultado"></li>
              </ul>
            </div>
          </form>
        </div>

    </nav>
    <router-view id="vistas"/>
   <footer id="footer">
      Copyright © 2020 <b> descargatodoaqui.com </b> All Rights Reserved.
    </footer>
  </div>
</template>

<style src="./App/App.css"></style>
<script src="./App/App.js"></script>

