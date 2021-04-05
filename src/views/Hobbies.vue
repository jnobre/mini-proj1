<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center text-center" id="about">
      <!-- <div class="w-100"> -->
      <b-row>
        <b-col cols="12" class="mb-4">
          <img
            id="logo-xs"
            src="../assets/images/foto_jn.png"
            alt
            class="d-block d-sm-none"
          />
          <h1 class="mb-8">Hobbies</h1><br />
          <p class="lead mb-5">
            Gosto de viajar. Gosto de atividades culturais, tais como cinema, teatro e museus. Gosto de desporto, nomeadamente futebol. Gosto da natureza e de ler. 
          </p>
        </b-col>
      </b-row>
    </section>

    <hr class="m-0" />
  </div>
</template>


<style scoped>
#logo-xs {
  max-width: 120px;
  width: 100%;
  margin: 16px auto;
}
.carousel-3d-slide{
  border:0;
  border-radius: 0.5rem;
}
.carousel-3d-slide img{
  display: block;
}
.carousel-3d-slide p{
    position: relative;
    top: -2.4rem;
    background: #0d1679;
    text-align: center;
    padding: 0.5rem;
    color: white;
    opacity:0.85;
    transition:box-shadow 100ms ease;
}
.carousel-3d-slide p>a{
    text-decoration: none;
    color:white;
    transition:200ms color ease;
}
.carousel-3d-slide p>a:hover{
    color:#cbb67e;
}
.carousel-3d-slide.current{
box-shadow:0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)
}

</style>
