<template>
  <b-container class="mt-4 mb-4">
    <h1>Bienvenido a la aplicación de Cifrado de Datos.</h1>
    <p>
      CryptoJs es una librería que nos permite cifrar y descifrar datos de
      manera sencilla.
    </p>
    <p>Incluye 5 implementaciones principales:</p>
    <ul>
      <li><b>Hashing:</b> MD5, SHA-1, SHA-256, SHA-512, SHA-3</li>
      <li><b>HMAC:</b> Una forma de autenticación de hash</li>
      <li>
        <b>PBKDF2:</b> Password-Based Key Derivation Function 2 (Derivación de
        clave basada en contraseña 2) permite hacer más seguras a las
        contraseñas
      </li>
      <li>
        <b>Ciphering:</b> Es el cifrado de datos de dos direcciones, incluye los
        algoritmos AES, DES, Triple DES, Rabbit, RC4, RC4Drop
      </li>
      <li>
        <b>Encoder:</b> Son funciones de codificación y decodificación de datos,
        incluye Base64, Hex, Latin1, Utf-8, Utf-16
      </li>
    </ul>
    <p>
      Para una mejor comprensión se ha creado una interfaz gráfica que permite
      ver ejemplos de cómo aplicar dichas implementaciones.
    </p>
    <br />
    <p>
      En en Navbar encontraran diferentes menús, cada uno hace uso de al menos
      una de las implementaciones de CryptoJs. En cada interfaz encontrarán un
      poco más de información de qué se está usando y por qué.
    </p>

    <div class="menu">
      <h2>Menú de pagos</h2>
      <ul>
        <li>
          <b
            >Para las funciones de hash se utilizó una key, un IV (vector) y
            block mode diferentes del predeterminado, esto para mostrar las
            opciones posibles de configuración</b
          >
        </li>
        <li>Historial de pagos: Descifrado de datos con AES</li>
        <li>Registro de Pago: Cifrado de datos con AES y Hash con SHA-256</li>
      </ul>
    </div>

    <div class="menu">
      <h2>Menú de Grupo de claves</h2>
      <ul>
        <li>
          <b
            >Para las funciones de hash se utilizó la configuración
            predeterminada de la libreria</b
          >
        </li>
        <li>Historial de claves: Descifrado de datos con AES y HMAC</li>
        <li>Registro de grupo de Claves: Hash progresivo con SHA-256</li>
      </ul>
    </div>
  </b-container>
</template>
