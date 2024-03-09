<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/">Mini proyecto Cifrado de datos</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-dropdown text="Claves">
              <b-dropdown-item to="/clavesForm">Registrar grupo de claves</b-dropdown-item>
              <b-dropdown-item to="/claves">Historial de grupos de claves</b-dropdown-item>
            </b-nav-dropdown>
            <b-nav-dropdown text="Pagos">
              <b-dropdown-item to="/payments">Historial de compras</b-dropdown-item>
              <b-dropdown-item to="/paymentForm">Registrar compra</b-dropdown-item>
            </b-nav-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>
