<template>
  <div id="home">
    <!-- Divice dipley higher Carrusel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" v-if="this.xSize>925">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div id="background-carrusel">
              <h3 id="title-carrusel">HOLA TODOS BIENVENIDOS A DESCARGATODOAQUI
              </h3>
              <h3 id="content-carrusel"><a href="#before-news">VER MÁS</a></h3>   
          </div>
        </div>
        <div class="carousel-item">
          <div id="background-carrusel">
                <h3 id="title-carrusel">HOLA TODOS BIENVENIDOS A DESCARGATODOAQUI
                </h3>
                <h3 id="content-carrusel"><a href="#before-news">VER MÁS</a></h3>   
            </div>
        </div>
        <div class="carousel-item">
          <div id="background-carrusel">
                <h3 id="title-carrusel">HOLA TODOS BIENVENIDOS A DESCARGATODOAQUI
                </h3>
                <h3 id="content-carrusel"><a href="#before-news">VER MÁS</a></h3>   
            </div>
        </div>            
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- Carrusel Mobiles -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" v-else>
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div id="background-carrusel-mobile">
              <h3 id="title-carrusel-mobile">HOLA TODOS BIENVENIDOS A DESCARGATODOAQUI
              </h3>
              <h3 id="content-carrusel-mobile"><a href="#before-news">VER MÁS</a></h3>   
          </div>
        </div>
        <div class="carousel-item">
          <div id="background-carrusel-mobile">
                <h3 id="title-carrusel-mobile">HOLA TODOS BIENVENIDOS A DESCARGATODOAQUI
                </h3>
                <h3 id="content-carrusel-mobile"><a href="#before-news">VER MÁS</a></h3>   
            </div>
        </div>
        <div class="carousel-item">
          <div id="background-carrusel-mobile">
                <h3 id="title-carrusel-mobile">HOLA TODOS BIENVENIDOS A DESCARGATODOAQUI
                </h3>
                <h3 id="content-carrusel-mobile"><a href="#before-news">VER MÁS</a></h3>   
            </div>
        </div>            
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>  
    </div>
    <div id="seccion-explore-game">
      <div class="row"></div>
        <h2>EXPLORAR MÁS JUEGOS</h2>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" v-if="this.xSize>=1400">
        <div class="col-md-12">
            <div class="carousel-inner">
            <div class="carousel-item active col-md-12">
              <div class="row">
                <img class="mr-auto ml-auto" src="https://http2.mlstatic.com/D_NQ_NP_927844-MLA27837596081_072018-O.jpg" id="img-block" >
                <img src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1xuq.jpg" id="img-block" >
                <img class="mr-auto ml-auto" src="https://http2.mlstatic.com/the-sims-4-rumbo-a-la-fama-update-strangerville-D_NQ_NP_983997-MCO28410928743_102018-F.jpg" id="img-block">
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="row">
                <img class="mr-auto ml-auto" src="https://i.pinimg.com/736x/c2/10/ae/c210ae920cc7061409748717ab7c5f0e.jpg" id="img-block" >
                <img src="https://i.pinimg.com/736x/39/20/a5/3920a51d1a0e668f059f5747ef8e8327.jpg" id="img-block">
                <img class="mr-auto ml-auto" src="https://es.web.img3.acsta.net/pictures/17/06/22/13/50/542868.jpg" id="img-block" > 
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="row">
                <img class="mr-auto ml-auto" src="https://i.pinimg.com/originals/8d/c6/1b/8dc61bd6d130f05b8bfc55a71c513cd5.jpg" id="img-block">
                <img src="https://4.bp.blogspot.com/-CYxO0iBs0uc/TaO9uGa48PI/AAAAAAAAAMI/n9wL2yFUR8Q/s1600/753408_0a3a_625x1000.jpg" id="img-block" >               
                <img class="mr-auto ml-auto" src="https://sm.ign.com/ign_es/screenshot/default/the-secret-of-monkey-island_ywty.jpg" id="img-block" >
              </div>
            </div>
          
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" v-else-if="this.xSize<=1100 && this.xSize>=650">
        <div class="col-md-12">
            <div class="carousel-inner">
            <div class="carousel-item active col-md-12">
              <div class="row">
                <img class="ml-auto" src="https://http2.mlstatic.com/D_NQ_NP_927844-MLA27837596081_072018-O.jpg" id="img-block" >
                <img class="mr-auto" src="https://http2.mlstatic.com/the-sims-4-rumbo-a-la-fama-update-strangerville-D_NQ_NP_983997-MCO28410928743_102018-F.jpg" id="img-block">
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="row">
                <img class="ml-auto" src="https://i.pinimg.com/736x/c2/10/ae/c210ae920cc7061409748717ab7c5f0e.jpg" id="img-block" >
                <img class="mr-auto" src="https://es.web.img3.acsta.net/pictures/17/06/22/13/50/542868.jpg" id="img-block" > 
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="row">
                <img class="ml-auto" src="https://i.pinimg.com/originals/8d/c6/1b/8dc61bd6d130f05b8bfc55a71c513cd5.jpg" id="img-block">
                <img class="mr-auto" src="https://sm.ign.com/ign_es/screenshot/default/the-secret-of-monkey-island_ywty.jpg" id="img-block" >
              </div>
            </div>
          
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" v-else>
        <div class="col-md-12">
            <div class="carousel-inner">
            <div class="carousel-item active col-md-12">
              <div class="row">
                <img class="ml-auto mr-auto" src="https://http2.mlstatic.com/D_NQ_NP_927844-MLA27837596081_072018-O.jpg" id="img-block" >
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="row">
                <img class="ml-auto mr-auto" src="https://i.pinimg.com/736x/c2/10/ae/c210ae920cc7061409748717ab7c5f0e.jpg" id="img-block" >
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="row">
                <img class="ml-auto mr-auto" src="https://i.pinimg.com/originals/8d/c6/1b/8dc61bd6d130f05b8bfc55a71c513cd5.jpg" id="img-block">
              </div>
            </div>
          
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>  
    </div> 
      <button type="button" class="btn btn-primary ml-auto mr-auto text-center" id="all-game" style="margin-top: 50px">Ver todos los juegos</button>
    <div class="row" id="before-news"></div>
    <div id="seccion-news">
      <h2 style="padding-top: 10%"> NOVEDADES</h2>
      <div class="row col-md-12 ml-auto mr-auto">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores iure perspiciatis repellendus voluptatum est numquam totam dolores! Quia incidunt esse adipisci harum a sunt possimus deleniti corrupti ducimus quaerat aliquam amet recusandae porro natus at sit vitae saepe numquam soluta, perspiciatis id repudiandae. Dolore at aliquam praesentium labore laudantium.
            </p>
        </div> 
        <div class="col-md-2"></div> 
      </div>
    </div>
    <br><br><br><br><br><br><br><br>  
  </div>
</template>
<style src="../Home/Home.css"></style>
<script>
export default {
  data(){
    return{
      xSize: {}
      };
    },
    created(){
      this.xSize = screen.width;
      console.log(this.xSize);
    }
}
</script>



