<template>
  <b-container class="mt-4 mb-4">
    <h2>Metodo de pago</h2>
    <hr />

    <h4 class="mb-3">Direccion de pago</h4>
    <b-form @submit="onSubmit">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="Nombre"
            label-for="nombre"
            class="mb-3"
          >
            <b-form-input
              v-model="form.nombre"
              type="text"
              class="form-control"
              id="nombre"
              placeholder="Jonathan Abed"
              value=""
              required
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-2"
            label="Apellidos"
            label-for="apellidos"
            class="mb-3"
          >
            <b-form-input
              v-model="form.apellidos"
              type="text"
              class="form-control"
              id="apellidos"
              placeholder="Ramirez Garcia"
              value=""
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group
            id="input-group-3"
            label="Colonia"
            label-for="colonia"
            class="mb-3"
          >
            <b-form-input
              v-model="form.colonia"
              type="text"
              class="form-control"
              id="colonia"
              placeholder="Santa Maria"
              required
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-3"
            label="Calle"
            label-for="calle"
            class="mb-3"
          >
            <b-form-input
              v-model="form.calle"
              type="text"
              class="form-control"
              id="calle"
              placeholder="Av Morelos"
              required
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-4"
            label="Número"
            label-for="numero"
            class="mb-3"
          >
            <b-form-input
              v-model="form.numero"
              type="text"
              class="form-control"
              id="numero"
              placeholder="#"
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group
            id="input-group-5"
            label="Ciudad"
            label-for="ciudad"
            class="mb-3"
          >
            <b-form-input
              v-model="form.cuidad"
              type="text"
              class="form-control"
              id="Ciudad"
              placeholder="Santa Maria"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-6"
            label="Pais"
            label-for="pais"
            class="mb-3"
          >
            <b-form-select
              v-model="form.pais"
              class="form-select"
              id="pais"
              required
            >
              <option>Mexico</option>
              <option>Perú</option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-7"
            label="Estado"
            label-for="estado"
            class="mb-3"
          >
            <b-form-select
              v-model="form.estado"
              class="form-select"
              id="estado"
              required
            >
              <option>Morelos</option>
              <option>CDMX</option>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="4">
          <b-form-group
            id="input-group-8"
            label="Codigo postal (C.P)"
            label-for="cp"
            class="mb-3"
          >
            <b-form-input
              v-model="form.cp"
              type="text"
              class="form-control"
              id="cp"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <hr class="my-4" />
      <h4 class="mb-3">Datos de contacto</h4>

      <b-row>
        <b-col cols="4">
          <b-form-group
            id="input-group-9"
            label="Telefono"
            label-for="telefono"
            class="mb-3"
          >
            <b-form-input
              v-model="form.telefono"
              type="number"
              class="form-control"
              id="telefono"
              placeholder="7771234567"
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <hr class="my-4" />

      <b-row>
        <b-col cols="9">
          <h4 class="mb-3">Pago</h4>
        </b-col>
        <b-col>
          <h4 class="align-items-center">
            <span class="badge bg-success rounded-pill">
              Total a pagar: ${{ form.monto }}MX
            </span>
          </h4>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group
            id="input-group-10"
            label="Propietario de la tarjeta"
            label-for="propietario"
            class="mb-3"
          >
            <b-form-input
              v-model="form.tarjeta.propietario"
              type="text"
              class="form-control"
              id="propietario"
              placeholder="Propietario de la tarjeta"
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group
            id="input-group-11"
            label="Número de tarjeta"
            label-for="tarjeta"
            class="mb-3"
          >
            <b-form-input
              v-model="form.tarjeta.numero"
              type="text"
              class="form-control"
              id="tarjeta"
              placeholder="16 digitos"
              required
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-12"
            label="CVV"
            label-for="cvv"
            class="mb-3"
          >
            <b-form-input
              v-model="form.tarjeta.cvv"
              type="text"
              class="form-control"
              id="cvv"
              placeholder="***"
              required
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-13"
            label="Fecha de expiración"
            label-for="caducidad"
            class="mb-3"
          >
            <b-form-input
              v-model="form.tarjeta.caducidad"
              type="date"
              class="form-control"
              id="caducidad"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <hr class="my-4" />

      <b-button class="w-100 btn btn-lg" variant="success" type="submit">
        Pagar
      </b-button>
    </b-form>

    <b-row>
      <b-col>
        <b-card class="mt-3" header="Datos del formulario">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="mt-3" header="Datos encriptados">
          <pre class="m-0">{{ encryptedForm }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { encryptBi, encryptUni } from "../services/cryptoService.js";
import paymentService from "../services/paymentService.js";

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
        tarjeta: {
          numero: "",
          ultimos4: "",
          cvv: "",
          caducidad: "",
          propietario: "",
        },
        monto: Math.floor(Math.random() * 1000),
      },
      encryptedForm: {},
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const encryptedForm = this.encryptData(this.form);

        this.encryptedForm = encryptedForm;
        await paymentService.registerPayment(encryptedForm);
        // this.$router.push({ name: "payments" });
      } catch (error) {
        console.error(error);
      }
    },
    encryptData(form) {
      this.form.tarjeta.ultimos4 = this.form.tarjeta.numero.slice(-4);
      return {
        nombre: encryptBi(this.form.nombre),
        apellidos: encryptBi(this.form.apellidos),
        pais: encryptBi(this.form.pais),
        estado: encryptBi(this.form.estado),
        cuidad: encryptBi(this.form.cuidad),
        cp: encryptBi(this.form.cp),
        colonia: encryptBi(this.form.colonia),
        calle: encryptBi(this.form.calle),
        numero: encryptBi(this.form.numero),
        telefono: encryptBi(this.form.telefono),
        tarjeta: {
          numero: encryptUni(this.form.tarjeta.numero),
          ultimos4: encryptBi(this.form.tarjeta.ultimos4),
          cvv: encryptUni(this.form.tarjeta.cvv),
          caducidad: encryptUni(this.form.tarjeta.caducidad),
          propietario: encryptUni(this.form.tarjeta.propietario),
        },
      };
    },
  },
};
</script>
