<template>
  <b-container class="mt-4">
    <h1>Detalles de la compra</h1>

    <b-row class="mt-4">
      <b-col cols="12">
      

        <hr class="my-4" />
        <h4 class="mb-3">Pago</h4>

        <div class="row">
          <div class="col-md-6">
            <label for="propietario" class="form-label">Propietario</label>
            <b-form-input
              v-model="payment.tarjeta.propietario"
              type="text"
              class="form-control"
              id="propietario"
              placeholder=""
              required
            />
          </div>

          <div class="col-md-6">
            <label for="tarjeta" class="form-label">Número de tarjeta</label>
            <b-form-input
              v-model="payment.tarjeta.numero"
              type="text"
              class="form-control"
              id="tarjeta"
              placeholder=""
              required
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <label for="cvv" class="form-label">CVV</label>
            <b-form-input
              v-model="payment.tarjeta.cvv"
              type="text"
              class="form-control"
              id="cvv"
              placeholder=""
              required
            />
          </div>
         
          <div class="col-md-3">
            <label for="caducidad" class="form-label">Fecha de expiración</label>
            <b-form-input
              v-model="payment.tarjeta.caducidad"
              type="date"
              class="form-control"
              id="caducidad"
              placeholder=""
              required
            />
          </div>
        </div>
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
       
        tarjeta: {
          propietario: "",
          numero: "",
          cvv: "",
          caducidad: "",
          ultimos4: "", 
        },
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
