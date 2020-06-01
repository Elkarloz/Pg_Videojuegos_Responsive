<template>
    <div id="container-game">
        <div class="row col-md-12" style="margin: 0; padding: 0;">
            <div class="col-md-2" id="bannes"></div>
            <div class="col-md-8" style="margin: 0; padding: 0; background: #ffffff;">
                <div class="row col-md-12 ml-auto mr-auto">
                    <!-- Title -->
                    <div class="card-game col-md-12 ml-auto mr-auto">
                        <h1 id="title">{{ titulo }}</h1>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto">
                    <!-- Img -->
                    <div class="ml-auto mr-auto" v-if="this.xSize>1000">
                        <img id="font-img" :src="this.font_img" alt="ImgGame">
                        <br>
                        <a :href="this.link_font_img">Origen de la imagen</a>
                    </div>
                    <div class="ml-auto mr-auto" v-if="this.xSize<600">
                        <img id="font-img" :src="this.font_img" alt="ImgGame">
                        <br>
                        <a :href="this.link_font_img">Origen de la imagen</a>
                    </div>
                    <!-- Img -->
                </div>
                 <!-- Start Requisitos -->
                <div class="row col-md-12 ml-auto mr-auto">

                    <div class="card-game col-md-6 ml-auto mr-auto" id="cover-block" >
                        <label for="show-1" class="col-md-12" id="block-check">
                            <h2 id="title">Requisitos PC</h2>
                            <h6>ver más...</h6>
                        </label>
                        <input type="checkbox" id="show-1" name="group">
                        <div id="data-sheet-1" class="col-md-12">
                            <h3><b>Requisitos mínimos:</b></h3>
                            <div>
                                {{requisitosMinimos}}
                            </div>
                            <br><br>
                            <h3><b>Requisitos recomendados:</b></h3>
                                <div>
                                    <ul>
                                        <li><strong>MicroProcesador:</strong> Intel Core 2 Duo E6700 2.6 GHz o AMD Athlon 64 X2
                                            6000+ o superior</li>
                                        <li><strong>Chip Gráfico:</strong> GeForce 8800 GT o ATI Radeon HD 4700 o superior</li>
                                        <li><strong>Tarjeta de Sonido:</strong> Tarjeta con soporte 5.1</li>
                                        <li><strong>Periféricos:</strong> Teclado, ratón, joystick opcional (Controlador de Xbox 360
                                            para Windows recomendado)</li>
                                    </ul><br>Tarjetas Gráficas Soportadas en el Momento del Lanzamiento:<br>ATI RADEON X1950, HD
                                    2000/3000/4000/5000 series<br>NVIDIA GeForce 7/8/9/100/200 series<br><br>Conexión a Internet
                                </div>
                            </div>
                    </div>
                </div>
                 <!-- Start Requisitos -->
                <div class="row col-md-12 ml-auto mr-auto">
                    <!-- Start Ficha -->
                    <div class="card-game col-md-6 ml-auto mr-auto" id="cover-block">
                        <label for="show-2" class="col-md-12" id="block-check">
                            <h1 id="title">Ficha técnica</h1>
                            <h6>ver más...</h6>
                        </label>
                        <input type="checkbox" id="show-2" name="group">
                        <div id="data-sheet-2" class="col-md-12">
                                <b>Nombre:</b><br>Assassin's Creed 2<div
                                    ></div><b>Fecha de lanzamiento:</b><br>4 de marzo de 2010<div >
                                </div><b>Plataforma:</b><br>PC<div ></div><b>También disponible para:</b><br><a
                                    href="#">PS3</a>&nbsp; <a
                                    href="#">X360</a>&nbsp; <a
                                    href="#">DS</a>&nbsp;
                                <a href="#" >Mac</a>&nbsp; <a
                                    href="#">iOS</a>
                                <div></div><b>Género:</b><br><a
                                    href="#"
                                    title="Juegos de Acción">Acción</a>, <a
                                    href="#">Acción
                                    y aventura</a> <span >(Histórico)</span>
                                <div ></div><b>Número de jugadores:</b><br>1<div></div>
                                <b>Desarrollador:</b><br><a
                                    href=""
                                    >Ubisoft Montreal</a>
                                <div></div><b>Distribuidor:</b><br><a
                                    href=""
                                >Ubisoft</a>
                                
                                <div></div><b>Enlaces:</b><br><a
                                    href="http://assassinscreed.es.ubi.com/assassins-creed-2/"
                                >http://assassinscreed.es.ubi.com/assassins-creed-2/</a>
                                
                        </div>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto">
                    <div class="card-game col-md-12 ml-auto mr-auto" >
                        <h2 id="title">Capturas del juego</h2>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize>=1400">
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot" src="https://images.hgmsites.net/lrg/grand-theft-auto-v-gameplay_100432966_l.jpg" alt="Capturas">
                    </div>
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot" src="https://i.pinimg.com/originals/a5/52/78/a55278936835d79ee4f160921cc383be.jpg" alt="Capturas">
                    </div>
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot" src="https://www.digiseller.ru/preview/642447/p1_2165284_31ec8051.jpg" alt="Capturas">
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize<1400 && this.xSize>=1000">
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot-medium" src="https://images.hgmsites.net/lrg/grand-theft-auto-v-gameplay_100432966_l.jpg" alt="Capturas">
                    </div>
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot-medium" src="https://i.pinimg.com/originals/a5/52/78/a55278936835d79ee4f160921cc383be.jpg" alt="Capturas">
                    </div>
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot-medium" src="https://www.digiseller.ru/preview/642447/p1_2165284_31ec8051.jpg" alt="Capturas">
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize<1000">
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot-small" src="https://images.hgmsites.net/lrg/grand-theft-auto-v-gameplay_100432966_l.jpg" alt="Capturas">
                    </div>
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot-small" src="https://i.pinimg.com/originals/a5/52/78/a55278936835d79ee4f160921cc383be.jpg" alt="Capturas">
                    </div>
                    <div class="col-md-12 ml-auto mr-auto">
                        <img id="screenshot-small" src="https://www.digiseller.ru/preview/642447/p1_2165284_31ec8051.jpg" alt="Capturas">
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto">
                    <div class="card-game col-md-12 ml-auto mr-auto" >
                        <h2 id="title">Trailer del juego</h2>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize>=1400">
                    <div class="col-md-12 ml-auto mr-auto">
                        <iframe width="900" height="500" src="https://www.youtube.com/embed/QkkoHAzjnUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize<1400 && this.xSize>=1000">
                    <div class="col-md-12 ml-auto mr-auto">
                        <iframe width="600" height="400" src="https://www.youtube.com/embed/QkkoHAzjnUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize<1000">
                    <div class="col-md-12 ml-auto mr-auto">
                        <iframe width="250" height="180" src="https://www.youtube.com/embed/QkkoHAzjnUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto">
                    <div class="card-game col-md-12 ml-auto mr-auto" id="cover-block" >
                        <h2 id="title">Tutorial Como Descargar E Instalar el Juego (Canal Oficial De La Página) </h2>
                    </div>
                </div>
               <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize>=1400">
                    <div class="col-md-12 ml-auto mr-auto">
                        <iframe width="900" height="500" src="https://www.youtube.com/embed/QkkoHAzjnUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize<1400 && this.xSize>=1000">
                    <div class="col-md-12 ml-auto mr-auto">
                        <iframe width="600" height="400" src="https://www.youtube.com/embed/QkkoHAzjnUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row col-md-12 ml-auto mr-auto" v-if="this.xSize<1000">
                    <div class="col-md-12 ml-auto mr-auto">
                        <iframe width="250" height="180" src="https://www.youtube.com/embed/QkkoHAzjnUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row"></div>
                <div class="card-game col-md-6 ml-auto mr-auto" id="cover-block">
                    <label for="show-2" class="col-md-12" id="block-check">
                        <h1 id="title">Link de la descarga</h1>
                        <h6>(haz click)</h6>
                    </label>
                    <input type="checkbox" id="show-2" name="group">
                </div>
                <div class="row"></div>
                <br><br><br>
            </div>
            <div class="col-md-2" id="bannes"></div>
        </div>
    </div>
</template>
<style src="./Game.css"></style>
<script src="./Game.js"></script>