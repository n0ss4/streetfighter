<!-- PRIMERA VIEW per MOSTRAR EL NOM DEL PERSONATGE -->
<template>
  <div class="home">
    <div v-if="!sumbit">
      <img src="./../assets/logo.png" style="width: 30%; height: 30%;">
      <div class="row col-md-4 offset-md-4 mt-5">
        <!-- FORMULARI on ENVIO el NOM del PERSONATGE -->
        <form action="#" @submit="empezar" class="col-12">
          <div class="form-group col-12">
            <!-- AQUI recullo L'INFORMACIÓ del NOM -->
            <input
              class="form-control"
              type="text"
              id="nombre"
              placeholder="Introduce tu nombre... "
              name="nombre"
              v-model="nombre"
              required
            >
          </div>
          <div class="col-12">
            <button class="btn w-100 text-white" style="background-color: #000;">
              Empezar
              <font-awesome-icon icon="long-arrow-alt-right" style="font-size: 15px;"/>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- UN COP TINC EL NOM EL FORMULARI DESPAREIX I APAREIX LA BARALLA :D -->
    <div v-if="sumbit" align="center">
      <div class="col-12 row">
        <!-- ESPAI del USUARI -->
        <div class="col-5">
          <h1 class="text-white text-left">{{ nombre }}</h1>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              v-bind:style="{ 'width': vida+'%', 'background-color': color[colorR] }"
            ></div>
          </div>
          <div
            class="col-12 mt-4 mb-4 d-flex justify-content-center"
            style="border: 1px dashed black; height: 40vh; border-color: white;"
          >
            <span class="align-self-center text-white">NO IMAGE</span>
          </div>
          <button class="col-5 w-100 mb-3 btn btn-danger" v-on:click="atacar(nombre)">
            <font-awesome-icon icon="fist-raised"/>
          </button>
          <button
            class="col-5 offset-2 mb-3 w-100 btn text-white"
            style="background-color: blue;"
            v-on:click="especial(nombre)"
          >
            <font-awesome-icon icon="star"/>
          </button>
          <button class="col-5 w-100 btn btn-success" v-on:click="curar(nombre)">
            <font-awesome-icon icon="heart"/>
          </button>
          <button
            class="col-5 offset-2 w-100 btn text-white"
            style="background-color: black;"
            v-on:click="rendir(nombre)"
          >
            <font-awesome-icon icon="skull-crossbones"/>
          </button>
        </div>
        <!-- ON es MOSTREN les RONDES i els MISSATGES -->
        <div class="col-2">
          <h1 class="text-white">ROUND {{ contadorRondas }}</h1>
          <div class="col-12 d-flex justify-content-center" style="height: 50vh;">
            <h4 class="text-uppercase align-self-center text-white">{{ message }}</h4>
          </div>
        </div>
        <!-- ESPAI del ENEMIC -->
        <div class="col-5">
          <h1 class="text-white text-right">{{ enemigo[numeroEnemigo] }}</h1>
          <div class="progress" style="transform: rotateY(180deg);">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              v-bind:style="{ 'width': vidaEnemigo+'%', 'background-color': color[colorREnemigo]  }"
            ></div>
          </div>
          <div
            class="col-12 mt-4 mb-4 d-flex justify-content-center"
            style="border: 1px dashed black; height: 40vh; border-color: white;"
          >
            <span class="align-self-center text-white">NO IMAGE</span>
          </div>
          <button
            class="col-5 w-100 mb-3 btn btn-danger"
            v-on:click="atacar(enemigo[numeroEnemigo])"
            disabled
          >
            <font-awesome-icon icon="fist-raised"/>
          </button>
          <button
            class="col-5 offset-2 mb-3 w-100 btn text-white"
            style="background-color: blue;"
            v-on:click="especial(enemigo[numeroEnemigo])"
            disabled
          >
            <font-awesome-icon icon="star"/>
          </button>
          <button
            class="col-5 w-100 btn btn-success"
            v-on:click="curar(enemigo[numeroEnemigo])"
            disabled
          >
            <font-awesome-icon icon="heart"/>
          </button>
          <button
            class="col-5 offset-2 w-100 btn text-white"
            style="background-color: black;"
            v-on:click="rendir(enemigo[numeroEnemigo])"
            disabled
          >
            <font-awesome-icon icon="skull-crossbones"/>
          </button>
        </div>
        <div>
          <!-- Modal Component -->
          <b-modal
            id="modal1"
            title="BootstrapVue"
            ok-title="Voler a jugar"
            hide-footer="true"
            hide-header="true"
          >
            <h5 class="my-4">{{messageModal}}</h5>
            <iframe
              v-bind:src="image"
              width="300"
              height="300"
              frameborder="0"
              class="giphy-embed"
              allowfullscreen
            ></iframe>
            <br>
            <button class="btn btn-success" v-on:click="stop(true)">Volver a jugar :D</button>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  font-family: Consolas !important;
}
a {
  color: black;
}
</style>


<script src="./Home.js"></script>
