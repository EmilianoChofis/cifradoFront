<template>
  <b-container class="mt-4">
    <h1>Historial de compras</h1>

    <b-button
      variant="primary"
      class="mt-2 mb-4"
      :to="{ name: 'form' }"
    >
    Registrar compra
  </b-button>

    <b-row class="mt-4">
      <b-col v-if="payments.length === 0">
        <b-alert show variant="warning"> No se encontraron pagos registrados </b-alert>
      </b-col>

      <b-col v-for="payment in payments" :key="payment.id" md="4" class="mb-4">
        <b-card :title="payment.nombre">
          <b-card-text>
            Propietario: {{ payment.nombre }} {{ payment.apellidos }}
          </b-card-text>
          <b-card-text> Monto: ${{ payment.monto }} MX </b-card-text>

          <b-button
            variant="primary"
            :to="{ name: 'details', params: { id: payment.id } }"
          >
            Detalles de la compra
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ServicePayment from "../services/ServicePayment.js";

export default {
  data() {
    return {
      payments: [],
    };
  },
  created() {
    this.getPayments();
  },
  methods: {
    async getPayments() {
      try {
        this.payments = await ServicePayment.getPayments();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
