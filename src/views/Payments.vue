<template>
  <b-container class="mt-4 mb-4">
    <h1>Historial de pagos</h1>

    <b-button variant="primary" class="mt-2 mb-4" :to="{ name: 'paymentForm' }">
      Registro de pagos
    </b-button>

    <b-row class="mt-4">
      <b-col v-if="payments.length === 0">
        <b-alert show variant="warning">
          No se encontraron pagos registrados
        </b-alert>
      </b-col>

      <b-col v-for="payment in payments" :key="payment.id" md="4" class="mb-4">
        <b-card :title="payment.nombre">
          <b-card-text>
            Propietario: {{ payment.nombre }} {{ payment.apellidos }}
          </b-card-text>

          <b-button
            variant="primary"
            :to="{ name: 'detailsPayment', params: { id: payment.id } }"
          >
            Detalles de la compra
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { decryptValue } from "@/services/cryptoService";
import paymentService from "@/services/paymentService";

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
        const response = await paymentService.getPayments();
        response.forEach((payment) => {
          const nombre = decryptValue(payment.nombre);
          const apellido = decryptValue(payment.apellidos);
          payment.nombre = nombre;
          payment.apellidos = apellido;
        });
        this.payments = response;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
