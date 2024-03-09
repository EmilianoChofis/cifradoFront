<script setup>

</script>

<template>
  <div class="container">
  <h1>Bienvenido a la aplicación de cifrado de datos.</h1>
  <p>CryptoJs es una librería que nos permite cifrar y descifrar datos de manera sencilla.</p>
  <p>Incluye 5 implementaciones principales:</p>
  <ul>
    <li>Hashing: MD5, SHA-1, SHA-256, SHA-512, SHA-3</li>
    <li>HMAC: Una forma de autenticación de hash</li>
    <li>PBKDF2: Password-Based Key Derivation Function 2 (Derivación de clave basada en contraseña 2) permite hacer más seguras a las contraseñas</li>
    <li>Ciphering: Es el cifrado de datos de dos direcciones, incluye los algoritmos AES, DES, Triple DES, Rabbit, RC4, RC4Drop</li>
    <li>Encoder: Son funciones de codificación y decodificación de datos, incluye Base64, Hex, Latin1, Utf-8, Utf-16</li>
  </ul>
  <p>Para una mejor comprensión se ha creado una interfaz gráfica que permite ver ejemplos de cómo aplicar dichas implementaciones.</p>
  <p>Hemos decidido utilizar la librería CryptoJs ya que es una de las más populares y utilizadas en el mundo de la programación.</p>
  <p>En en Navbar encontraran diferentes menús, cada uno hace uso de al menos una de las implementaciones de CryptoJs. En cada interfaz encontrarán un poco más de información de qué se está usando y por qué.</p>

  <div class="menu">
    <h2>Menú de pagos</h2>
    <ul>
      <li>Historial de pagos: Descifrado de datos con AES</li>
      <li>Registro de Pago: Cifrado de datos con AES y Hash con SHA-256</li>
      <li>Validar Tarjeta: Hash con SHA-256 y HMAC</li>
    </ul>
  </div>

  <div class="menu">
    <h2>Menú de Grupo de claves</h2>
    <ul>
      <li>Historial de claves: Descifrado de datos con AES y HMAC</li>
      <li>Registro de grupo de Claves: Hash progresivo con SHA-3</li>
    </ul>
  </div>

  <div class="menu">
    <h2>Menú de Contraseña segura</h2>
    <ul>
      <li>Generar contraseña segura: PBKDF2</li>
    </ul>
  </div>

  </div>

</template>

<style>

h1 {
  text-align: center;
}
.menu {
  margin-bottom: 20px;
}
.menu h2 {
  margin-bottom: 10px;
}
.menu ul {
  list-style-type: none;
  padding: 0;
}
.menu ul li {
  margin-bottom: 5px;
}
</style>