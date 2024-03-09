<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand to="/">Mini Proyecto - Cifrado de Datos</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-dropdown text="Claves">
            <b-dropdown-item to="/claves"
              >Historial de grupos de claves</b-dropdown-item
            >
            <b-dropdown-item to="/clavesForm"
              >Registro de grupos de claves</b-dropdown-item
            >
          </b-nav-dropdown>
          <b-nav-dropdown text="Pagos">
            <b-dropdown-item to="/payments"
              >Historial de pagos</b-dropdown-item
            >
            <b-dropdown-item to="/paymentForm"
              >Registro de pagos</b-dropdown-item
            >
          </b-nav-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
