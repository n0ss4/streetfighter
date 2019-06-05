export default {
  // EL DATA es per DECLARA les VARIABLES.
  data: function() {
    return {
      nombre: "",
      enemigo: ["Monstre", "Mag", "Restaurador"],
      sumbit: false,
      numeroEnemigo: 0,
      color: ["green", "yellow", "orange", "red"],
      vidaEnemigo: 100,
      vida: 100,
      contadorRondas: 1,
      dany: 0,
      curacio: 0,
      message: "",
      colorREnemigo: 0,
      colorR: 0,
      turno: 0,
      messageModal: "Has perdido...",
      image: "https://giphy.com/embed/OPU6wzx8JrHna"
    };
  },
  // ELS METHODS es per declara METODES, FUNCIONS, etc.
  methods: {
    // COMENÇAR el PROGRAMA.
    empezar: function(e) {
      this.sumbit = true;
      this.numeroEnemigo = Math.floor(Math.random() * 3);
      this.turno = Math.floor(Math.random() * 2);
      this.message = "¡PELEA!";
      e.preventDefault();
    },
    // ATACAR al OPONENT.
    atacar: function(e) {
      if (e == this.nombre) {
        this.message =
          this.nombre + " ataca a " + this.enemigo[this.numeroEnemigo];
        // Prueba de ataque
        this.vidaEnemigo =
          this.vidaEnemigo - (Math.floor(Math.random() * 5) + 8);
        this.turno = 1;
      }

      if (e == this.enemigo[this.numeroEnemigo]) {
        this.message =
          this.enemigo[this.numeroEnemigo] + " ataca a " + this.nombre;
        // Prueba de ataque
        this.vida = this.vida - (Math.floor(Math.random() * 5) + 8);
        this.turno = 0;
      }
      this.contadorRondas++;
    },
    // CURAR-SE.
    curar: function(e) {
      if (e == this.nombre) {
        this.message = this.nombre + " se esta curando";
        // Prueba de curación
        this.vida = this.vida + (Math.floor(Math.random() * 14) + 6);
        this.turno = 1;
      }

      if (e == this.enemigo[this.numeroEnemigo]) {
        this.message = this.enemigo[this.numeroEnemigo] + " se esta curando";
        // Prueba de curación
        this.vidaEnemigo =
          this.vidaEnemigo + (Math.floor(Math.random() * 14) + 6);

        this.turno = 0;
      }
      this.contadorRondas++;
    },
    // ATAC ESPECIAL al OPONENT.
    especial: function(e) {
      if (e == this.nombre) {
        this.message =
          this.nombre +
          " va a usar su ataque especial cuidado " +
          this.enemigo[this.numeroEnemigo];
        this.turno = 1;
        this.vidaEnemigo = this.vidaEnemigo - Math.floor(Math.random() * 31);
      }

      if (e == this.enemigo[this.numeroEnemigo]) {
        this.message =
          this.enemigo[this.numeroEnemigo] +
          " va a usar su ataque especial cuidado " +
          this.nombre;
        this.turno = 0;
        this.vida = this.vida - Math.floor(Math.random() * 31);
      }
      this.contadorRondas++;
    },
    // RENDIR-SE.
    rendir: function() {
      this.message =
        this.nombre +
        " ya no puede más y se va a retirar... gana " +
        this.enemigo[this.numeroEnemigo];
      // Prueba de rendirse
      this.vida = 0;
      this.turno = 1;
    },
    cpu: function() {
      // Ataques de la cpu de una manera aleatoria.
      console.log("CPU");
      var self = this;

      setTimeout(function() {
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            self.atacar(self.enemigo[self.numeroEnemigo]);
            break;
          case 1:
            self.curar(self.enemigo[self.numeroEnemigo]);
            break;
          case 2:
            self.especial(self.enemigo[self.numeroEnemigo]);
            break;
        }
      }, 500);
    },
    stop: function() {
      // Parar el juego de una manera drástica.
      var self = this;
      this.turno = 0;
      self.vida = 100;
      self.vidaEnemigo = 100;
      self.sumbit = false;
      self.contadorRondas = 1;
    }
  },
  // Això no es un metode :O, es una funció de vue que quan hi ha un canvi el programa s'executa.
  updated: function() {
    if (this.vida <= 0) {
      this.vida = 0;
      this.turno = 0;
      this.$root.$emit("bv::show::modal", "modal1");
      this.messageModal = "Has perdido...";
      this.image = "https://giphy.com/embed/OPU6wzx8JrHna";
    } else if (this.vidaEnemigo <= 0) {
      this.vidaEnemigo = 0;
      this.turno = 0;
      this.$root.$emit("bv::show::modal", "modal1");
      this.messageModal = "Has ganado :D";
      this.image = "https://giphy.com/embed/6brH8dM3zeMyA";
    }

    // Si ja has introduït el nom fara el següent:
    if (this.sumbit) {
      // Barres de vida del teu personatge.
      if (this.vida >= 66 && this.vida <= 100) {
        this.colorR = 0;
      } else if (this.vida >= 46 && this.vida <= 65) {
        this.colorR = 1;
      } else if (this.vida >= 21 && this.vida <= 45) {
        this.colorR = 2;
      } else if (this.vida <= 20) {
        this.colorR = 3;
      }

      // Barres de vida del teu enemic.
      if (this.vidaEnemigo >= 66 && this.vidaEnemigo <= 100) {
        this.colorREnemigo = 0;
      } else if (this.vidaEnemigo >= 46 && this.vidaEnemigo <= 65) {
        this.colorREnemigo = 1;
      } else if (this.vidaEnemigo >= 21 && this.vidaEnemigo <= 45) {
        this.colorREnemigo = 2;
      } else if (this.vidaEnemigo <= 20) {
        this.colorREnemigo = 3;
      }

      if (this.turno == 1) {
        this.cpu();
      }

      if (this.vida > 100) {
        this.vida = 100;
      } else if (this.vidaEnemigo > 100) {
        this.vidaEnemigo = 100;
      }
    }
  }
};
