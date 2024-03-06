<template>
  <div id="form" class="container marginB">
    <main>
      <div class="py-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="https://cdn-icons-png.freepik.com/512/102/102655.png"
          alt="icono de carrito "
          width="72"
          height="57"
        />
        <h2>Metodo de pago</h2>
      </div>
      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-success">Carrito</span>
            <span class="badge bg-success rounded-pill">
              Total: ${{ form.monto }}MX
            </span>
          </h4>
        </div>

        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Direccion de pago</h4>
          <b-form @submit="onSubmit">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="nombre" class="form-label">Nombre</label>
                <b-form-input
                  v-model="form.nombre"
                  type="text"
                  class="form-control"
                  id="nombre"
                  placeholder="Jonathan Abed"
                  value=""
                  required
                />
              </div>

              <div class="col-sm-6">
                <label for="apellidos" class="form-label">Apellidos</label>
                <b-form-input
                  v-model="form.apellidos"
                  type="text"
                  class="form-control"
                  id="apellidos"
                  placeholder="Ramirez Garcia"
                  value=""
                  required
                />
              </div>
              <div class="col-sm-8">
                <label for="calle" class="form-label">Calle</label>
                <b-form-input
                  v-model="form.calle"
                  type="text"
                  class="form-control"
                  id="calle"
                  placeholder="Av Morelos"
                  required
                />
              </div>
              <div class="col-sm-4">
                <label for="numero" class="form-label">Numero</label>
                <b-form-input
                  v-model="form.numero"
                  type="text"
                  class="form-control"
                  id="numero"
                  placeholder="#"
                  required
                />
              </div>

              <div class="col-12">
                <label for="ciudad" class="form-label">Colonia </label>
                <b-form-input
                  v-model="form.colonia"
                  type="text"
                  class="form-control"
                  id="ciudad"
                  placeholder="Santa Maria "
                />
              </div>
              <div class="col-md-5">
                <label for="pais" class="form-label">Pais</label>
                <b-form-select
                  v-model="form.pais"
                  class="form-select"
                  id="pais"
                  required
                >
                  <option>Mexico</option>
                  <option>Perú</option>
                </b-form-select>
              </div>

              <div class="col-md-4">
                <label for="estado" class="form-label">Estado</label>
                <b-form-select
                  v-model="form.estado"
                  class="form-select"
                  id="estado"
                  required
                >
                  <option>Morelos</option>
                  <option>CDMX</option>
                </b-form-select>
              </div>

              <div class="col-md-3">
                <label for="cp" class="form-label">Codigo postal (C.P)</label>
                <b-form-input
                  v-model="form.cp"
                  type="text"
                  class="form-control"
                  id="cp"
                  placeholder=""
                  required
                />
              </div>
              <hr class="my-4" />
              <h4 class="mb-3">Datos de contacto</h4>
              <div class="col-12">
                <label for="telefono" class="form-label">Telefono</label>
                <b-form-input
                  v-model="form.telefono"
                  type="number"
                  class="form-control"
                  id="telefono"
                  placeholder="7771234567"
                  required
                />
              </div>

              <hr class="my-4" />
              <h4 class="mb-3">Pago</h4>

              <div class="col-md-6">
                <label for="propietario" class="form-label">Propietario</label>
                <b-form-input
                  v-model="form.propietario"
                  type="text"
                  class="form-control"
                  id="propietario"
                  placeholder=""
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="tarjeta" class="form-label">Numero de tarjeta</label>
                <b-form-input
                  v-model="form.tarjeta"
                  type="text"
                  class="form-control"
                  id="tarjeta"
                  placeholder=""
                  required
                />
              </div>

              <div class="col-md-3">
                <label for="cvv" class="form-label">CVV</label>
                <b-form-input
                  v-model="form.cvv"
                  type="text"
                  class="form-control"
                  id="cvv"
                  placeholder=""
                  required
                />
              </div>
              <div class="col-md-3">
                <label for="caducidad" class="form-label"
                  >Fecha de expiracion</label
                >
                <b-form-input
                  v-model="form.caducidad"
                  type="date"
                  class="form-control"
                  id="caducidad"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <hr class="my-4" />

            <b-button class="w-100 btn btn-lg" variant="success" type="submit"
              >Pagar</b-button
            >
          </b-form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ServicePayment from '../services/ServicePayment';

export default {
  data() {
    return {
      form: {
        nombre: "",
        apellidos: "",
        pais: "",
        estado: "",
        cuidad: "",
        cp: "",
        colonia: "",
        calle: "",
        numero: "",
        telefono: "",
        tarjeta: "",
        cvv: "",
        caducidad: "",
        propietario: "",
        monto: Math.floor(Math.random() * 1000),
      },
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {

        await ServicePayment.registerPayment(this.form);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>


<style scoped>
.marginB {
  margin-bottom: 2rem;
}
</style>
