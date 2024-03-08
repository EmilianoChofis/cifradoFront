<script setup>

</script>

<template>
<b-form class="m-5" @submit="onSubmit">
  <b-form-group
    id="input-group-1"
    label="Nombre del grupo"
    label-for="input-1"
  >
    <b-form-input
      id="input-1"
      v-model="form.nombre"
      required
    ></b-form-input>
  </b-form-group>

  <b-form-group
    id="input-group-2"
    label="Clave"
    label-for="input-2"
  >
    <b-form-input
      id="input-2"
      v-model="form.claves[0]"
      required
    ></b-form-input>
  </b-form-group>

 //otros dos inputs de clave

  <b-form-group
    id="input-group-3"
    label="clave 2"
    label-for="input-3"
  >
    <b-form-input
      id="input-3"
      v-model="form.claves[1]"
      required
    ></b-form-input>
  </b-form-group>

  <b-form-group
    id="input-group-4"
    label="clave 3"
    label-for="input-4"
  >
    <b-form-input
      id="input-4"
      v-model="form.claves[2]"
      required
    ></b-form-input>
  </b-form-group>

  <b-button
    class="w-100 btn btn-lg"
    variant="success"
    type="submit"
  >
    Registrar grupo de claves
  </b-button>
</b-form>
</template>

<script>
import {progressiveHash} from "@/services/cryptoService";

export default {
  data() {
    return {
      form: {
        nombre: "",
        claves:[]
      },
    };
  },

};
</script>