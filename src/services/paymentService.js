import axios from "axios";

const API_URL = "http://localhost:8080/api/pago/";

const getPayments = async () => {
  try {
    const response = await axios.get(API_URL + "getAll");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const registerPayment = async (payment) => {
  try {
    const response = await axios.post(API_URL + "save", payment, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getPayments,
  registerPayment,
};
