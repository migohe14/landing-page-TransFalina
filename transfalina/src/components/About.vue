<template>
<div class="containerFuild">
    <h3>Sobre nosotros</h3>
    <p>Transportes Falina es una empresa de intermediación en el sector del transporte terrestre</p>

    <b-btn v-b-toggle.collapse1 variant="primary">Nuestro equipo</b-btn>
    <b-collapse id="collapse1" class="mt-2">
    <b-container class="bv-example-row">
    <b-row>
        <b-col sm><img slot="img" class="d-block img-fluid w-100" 
             src="https://firebasestorage.googleapis.com/v0/b/transfalina-4e46c.appspot.com/o/trucks.jpeg?alt=media&token=1e5f9f51-717c-4b36-b044-de5ba00d779a" alt="image slot">
             <p><strong>Rafael Molina</strong></p>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </b-col>
        <b-col sm><img slot="img" class="d-block img-fluid w-100" 
             src="https://firebasestorage.googleapis.com/v0/b/transfalina-4e46c.appspot.com/o/trucks.jpeg?alt=media&token=1e5f9f51-717c-4b36-b044-de5ba00d779a" alt="image slot">
             <p><strong>Maria Jesus Molina</strong></p>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </b-col>
        <b-col sm><img slot="img" class="d-block img-fluid w-100" 
             src="https://firebasestorage.googleapis.com/v0/b/transfalina-4e46c.appspot.com/o/trucks.jpeg?alt=media&token=1e5f9f51-717c-4b36-b044-de5ba00d779a" alt="image slot">
             <p><strong>Montse</strong></p>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </b-col>
    </b-row>
   </b-container>
   </b-collapse>
</div>
</template>
