<template>
  <div class="hello">

    <!-- Header -->
    <header class="header">
      <div class="header-content animated flash">
        <img src="../assets/logo.jpg" alt="Logo" class="logo">
        <div class="title">
          TransFalina
        </div>
        <div class="text">
          Dolor est eos dignissimos eos eos reiciendis deleniti neque quisquam. Officia facere pariatur consequuntur soluta!
        </div>
      </div>
    </header>

    <!-- Services -->
    <div class="services text-center">
      <h3 class="title">TransFalina</h3>
      <div class="container grid-3">
        <div>
          <i class="fab fa-youtube fa-5x"></i>
          <h3>Youtube</h3>
          <div>
            Consectetur itaque inventore odio tempora velit sunt et repellendus accusantium.
          </div>
        </div>
        <div>
          <i class="fab fa-blogger fa-5x"></i>
          <h3>Blog</h3>
          <div>
            Consectetur itaque inventore odio tempora velit sunt et repellendus accusantium.
          </div>
        </div>
        <div>
          <i class="fab fa-wordpress fa-5x"></i>
          <h3>Web</h3>
          <div>
            Consectetur itaque inventore odio tempora velit sunt et repellendus accusantium.
          </div>
        </div>
      </div>
    </div>

    <!-- About -->
    <section class="about bg-light">
      <div class="container text-center">
        <div class="grid-2">
          <div class="center">
            <i class="fas fa-code fa-10x"></i>
          </div>
          <div>
            <h3 class="title">Servicios</h3>
            <p>
              <span>Amet nihil magnam maxime dolor qui veritatis quaerat explicabo fugiat similique. Facilis ea reprehenderit laboriosam molestias odit officia. Facilis sunt harum tempore suscipit placeat beatae? Autem iure dignissimos maxime ducimus.</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container text-center">
        <div class="grid-2">
          <div>
            <h3 class="title">Sobre nosotros</h3>
            <p>
              <span>Amet nihil magnam maxime dolor qui veritatis quaerat explicabo fugiat similique. Facilis ea reprehenderit laboriosam molestias odit officia. Facilis sunt harum tempore suscipit placeat beatae? Autem iure dignissimos maxime ducimus.</span>
            </p>
          </div>
          <div class="center">
            <i class="fab fa-node-js fa-10x"></i>
          </div>
        </div>
      </div>  
    </section>

    <!-- Footer -->
    <footer class="text-center bg-light">
      <p>TransFalina &copy; 2018 - All rights reserved</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header::after {
  content: '';
  height: 100vh;
  width: 100%;
  background-image: url('../assets/trucks.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  transition: all 1000ms;
}

.header:hover::after {
  filter: blur(0px);
  -webkit-filter: blur(0px);
}

.header:hover .header-content {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

.header-content {
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 50%;
  margin-top: 105px;
  margin-left: -145px;
  width: 300px;
  height: 350px;
  text-align: center;
  transition: all 1000ms;
}

.header-content .logo {
  height: 100px;
  width: 100px;
}

.title {
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
}

.header-content .text {
  line-height: 1.7;
  margin-top: 1rem;
}

.container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 4rem 1rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 30px 30px 30px or repeat(3, 1fr)*/
  grid-gap: 20px;
}

.grid-2 {
  display: grid;
  grid-grap: 20px;
  grid-template-columns: repeat(2, 1fr);
}

.text-center {
  text-align: center;
  margin: auto;
}

.bg-light {
  background: #fff;
  color: #333;
}

.bg-dark {
  background: #2f3542;
  color: #f4f4f4;
}

.services {
  padding: 2rem 0;
}

footer {
  padding: 2.2rem;
}

footer p {
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 560px) {
  .header::after {
    height: 50vh;
  }
  
  .header-content {
    top: 5%;
    margin-top: 5px;
  }

  .header-content .logo {
    height: 140px;
    width: 140px;
  }

  .header-content .text {
    display: none;
  }
  
  .grid-3, .grid-2 {
    grid-template-columns: 1fr;
  }

  .services div {
    padding: 1.4rem 1rem;
  }
}

/* Landscape */
@media(max-height: 500px) {
  .header-content .title, .header-content .text {
    display: none;
  }
  .header-content {
    top: 0;
  }
}
</style>
