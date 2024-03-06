<template>
  <b-container class="mt-4">
    <h1>Detalles de la compra</h1>

    <b-row class="mt-4">
      <b-col>
        <b-card>
          <b-card-text>
            <b-form-group label="Nombre">
              <b-form-input v-model="payment.nombre" readonly></b-form-input>
            </b-form-group>
            <b-form-group label="Apellidos">
              <b-form-input v-model="payment.apellidos" readonly></b-form-input>
            </b-form-group>
            <b-form-group label="Monto">
              <b-form-input v-model="payment.monto" readonly></b-form-input>
            </b-form-group>
            <b-form-group label="Fecha">
              <b-form-input v-model="payment.fecha" readonly></b-form-input>
            </b-form-group>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import paymentService from "../services/paymentService.js";

export default {
  data() {
    return {
      payment: {
        nombre: "",
        apellidos: "",
        monto: 0,
        fecha: "",
      },
    };
  },
  mounted() {
    this.getPayment();
  },
  methods: {
    async getPayment() {
      try {
        const id = this.$route.params.id;
        // this.payment = await paymentService.getPayment(id);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
