<template>
  <b-container class="mt-4 mb-4">
    <h1>Registro de grupos de claves</h1>
    <b-form class="mt-4" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Nombre del grupo"
        label-for="input-1"
        class="mb-3"
      >
        <b-form-input
          id="input-1"
          v-model="form.nombre"
          required
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col>
          <b-form-group
            id="input-group-2"
            label="Clave 1"
            label-for="input-2"
            class="mb-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.claves[0]"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-3"
            label="Clave 2"
            label-for="input-3"
            class="mb-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.claves[1]"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-4"
            label="Clave 3"
            label-for="input-4"
            class="mb-3"
          >
            <b-form-input
              id="input-4"
              v-model="form.claves[2]"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button class="w-100 btn btn-lg mt-3" variant="success" type="submit">
        Registrar grupo de claves
      </b-button>
    </b-form>

    <b-row>
      <b-col>
        <b-card class="mt-3" header="Datos del formulario">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="mt-3" header="Grupo encriptado">
          <pre class="m-0">{{ data }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { progressiveHash } from "@/services/cryptoService";
//Servicio no disponible 08/03/2024
//import { saveGrupo } from "@/services/gruposService";

export default {
  data() {
    return {
      form: {
        nombre: "",
        claves: [],
      },
      data: {
        nombre: "",
        claves: [],
      },
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const result = progressiveHash(this.form.claves);
      const data = {
        nombre: this.form.nombre,
        claves: result,
      };
      this.data = data;
      // await saveGrupo(data);
    },
  },
};
</script>
