<template>
  <b-container class="mt-4 mb-4">
    <h1>Historial de grupos de claves</h1>

    <b-button variant="primary" class="mt-2 mb-4" :to="{ name: 'clavesForm' }">
      Registrar grupo de claves
    </b-button>

    <b-row class="mt-4">
      <b-col v-if="grupos.length === 0">
        <b-alert show variant="warning">
          No se encontraron grupos de claves registrados
        </b-alert>
      </b-col>

      <b-col v-for="grupo in grupos" :key="grupo.id" md="4" class="mb-4">
        <b-card :title="grupo.nombre">
          <b-card-text> Propietario: {{ grupo.nombre }} </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getGrupos } from "@/services/gruposService";

export default {
  data() {
    return {
      grupos: [],
    };
  },
  created() {
    this.getGrupos();
  },
  methods: {
    async getGrupos() {
      try {
        this.grupos = await getGrupos();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
```
