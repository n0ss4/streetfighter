<!-- PRIMERA VIEW per MOSTRAR EL NOM DEL PERSONATGE -->
<template>
  <div class="home">
    <div v-if="!sumbit">
      <img src="./../assets/logo.png" style="width: 30%; height: 30%;" />
      <div class="row col-md-4 offset-md-4 mt-5">
      <!-- FORMULARI on ENVIO el NOM del PERSONATGE -->
      <form action="#" @submit="empezar" class="col-12">
        <div class="form-group col-12">
          <!-- AQUI recullo L'INFORMACIÓ del NOM -->
          <input class="form-control" type="text" id="nombre" placeholder="Introduce tu nombre: " name="nombre" v-model="nombre" required>
        </div>
        <div class="col-12">
          <button class="btn w-100 text-white" style="background-color: #e23821;">Empezar</button>
        </div>
      </form>
      </div>
    </div>
    <!-- UN COP TINC EL NOM EL FORMULARI DESPAREIX I APAREIX LA BARALLA :D -->
    <div v-if="sumbit">
      <div class="col-12 row">
        <div class="col-5">
          <h1 class="text-white text-left">{{ nombre }}</h1>
          <div class="progress" v-bind:style="{ 'background-color': color[0] }">
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <!--<img src="./../assets/jugador1.gif" alt="" style="width: 50vh;">-->
          <div class="row col-12">
            <button class="col-6 btn btn-danger">Atacar</button>
            <button class="col-6 btn text-white" style="background-color: blue;">Especial</button>
          </div>
          <div class="row col-12">
            <button class="col-6 btn btn-success">Curar</button>
            <button class="col-6 btn text-white" style="background-color: black;">Rendir-se</button>
          </div>
        </div>
        <div class="col-2">
            <h1 class="text-white">ROUND 1</h1>
        </div>
        <div class="col-5">
          <h1 class="text-white text-right">{{ enemigo[numeroEnemigo] }}</h1>
          <div class="progress" v-bind:style="{ 'background-color': color[0] }">
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <!--<img src="./../assets/jugador2.gif" alt="" style="width: 50vh;">-->
          <div class="row col-12">
            <button class="col-6 btn btn-danger">Atacar</button>
            <button class="col-6 btn text-white" style="background-color: blue;">Especial</button>
          </div>
          <div class="row col-12">
            <button class="col-6 btn btn-success">Curar</button>
            <button class="col-6 btn text-white" style="background-color: black;">Rendir-se</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   // EL DATA es per DECLARA les VARIABLES.
   data: function () {
     return{
        nombre: '',
        enemigo: ['Monstre', 'Mag', 'Restaurador'],
        sumbit: false,
        numeroEnemigo: 0,
        color: ['green', 'yellow', 'orange', 'red'],
        vidaEnemigo: 100,
        vida: 100
     }
   },
   // ELS METHODS es per declara METODES, FUNCIONS, etc.
   methods: {
    empezar: function (e) {
      this.sumbit = true;
      this.numeroEnemigo = Math.floor(Math.random() * 3);
      e.preventDefault();
    },
    atacar: function (e){
      e.preventDefault();
    }
   }
 }
</script>
