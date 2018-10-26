<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://firebasestorage.googleapis.com/v0/b/transfalina-4e46c.appspot.com/o/trucks.jpeg?alt=media&token=1e5f9f51-717c-4b36-b044-de5ba00d779a" alt="image slot">
        <h1>Transportes Falina</h1>
        <p>Mas de 40 años de experiencia</p>
      </b-carousel-slide>
     

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://firebasestorage.googleapis.com/v0/b/transfalina-4e46c.appspot.com/o/truck2.jpeg?alt=media&token=fdb3a989-484c-4753-adb5-8708cd07a66a" alt="image slot">
                <h1>Transportes Falina</h1>
                <p>Mas de 40 años de experiencia</p>
      </b-carousel-slide>

    </b-carousel>
   
  </div>
</template>

<style>

</style>


<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>