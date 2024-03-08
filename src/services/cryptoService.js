import CryptoJS from "crypto-js";

const key = "secret-key"; // Pendiente de cambio a .env

if (!key) {
  throw new Error("No se ha proporcionado una clave secreta.");
}

// Encripta valores de texto con AES
export function encryptBi(value) {
  if (typeof value !== "string") {
    throw new Error("El valor a encriptar debe ser una cadena de texto.");
  }

  return CryptoJS.AES.encrypt(value, key).toString();
}

// Desencripta AES
export function decryptValue(encryptedValue) {
  if (typeof encryptedValue !== "string") {
    throw new Error("El valor encriptado debe ser una cadena de texto.");
  }

  const bytes = CryptoJS.AES.decrypt(encryptedValue, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Encripta valores de texto con SHA256
export function encryptUni(value) {
  if (typeof value !== "string") {
    throw new Error("El valor a encriptar debe ser una cadena de texto.");
  }

  return CryptoJS.SHA256(value).toString();
}

export function progressiveHash(data) {
  const sha256 = CryptoJS.algo.SHA256.create();
  //recorrido de array: data
    data.forEach((element) => {
        sha256.update(element);
    });
  const hash = sha256.finalize();
  return hash.toString(CryptoJS.enc.Hex);
}
