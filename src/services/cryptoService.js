import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Latin1.parse("1234567812345678");
const iv = CryptoJS.enc.Latin1.parse("1234567812345678");

if (!key) {
  throw new Error("No se ha proporcionado una clave secreta.");
}

// Encripta valores de texto con AES
export function encryptBi(value) {
  if (typeof value !== "string") {
    throw new Error("El valor a encriptar debe ser una cadena de texto.");
  }

  return CryptoJS.AES.encrypt(value, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  }).toString();
}

// Desencripta AES
// Recibe una cadena de texto encriptada con AES
export function decryptValue(encryptedValue) {
  if (typeof encryptedValue !== "string") {
    throw new Error("El valor encriptado debe ser una cadena de texto.");
  }
  return CryptoJS.AES.decrypt(encryptedValue, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Latin1);
}

// Encripta valores de texto con SHA256
// Recibe una cadena de texto
export function encryptUni(value) {
  if (typeof value !== "string") {
    throw new Error("El valor a encriptar debe ser una cadena de texto.");
  }

  return CryptoJS.SHA256(value).toString();
}

//Encripta valores de texto con SHA256 de manera progresiva generando un solo hash final
//Recibe un array de valores a encriptar
export function progressiveHash(data) {
  const sha256 = CryptoJS.algo.SHA256.create();
  data.forEach((element) => {
    sha256.update(element);
  });
  const hash = sha256.finalize();
  return hash.toString(CryptoJS.enc.Hex);
}
