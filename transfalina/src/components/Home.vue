<template>
<div>
  <template>
    <b-navbar toggleable="md" type="light" variant="light">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <!-- <b-navbar-brand href="#">TRANSPORTES FALINA</b-navbar-brand> -->

      <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Inicio</b-nav-item>
        <b-nav-item href="#">Sobre nosotros</b-nav-item>
        <b-nav-item href="#">Nuestros servicios</b-nav-item>
        <b-nav-item href="#">Contacto</b-nav-item>

      </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>
  <main-header></main-header>
  <contact></contact>
  <about></about>
  <our-services></our-services>
  <our-offices></our-offices>
  <main-footer></main-footer>
</div>
</template>

<script>
import MainHeader from './Header'
import Contact from './Contact'
import About from './About'
import OurServices from './OurServices'
import OurOffices from './OurOffices'
import MainFooter from './Footer'

export default {
  components: {
    MainHeader,
    Contact,
    About,
    OurServices,
    OurOffices,
    MainFooter
  },
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
