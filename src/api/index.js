import axios from "axios";

const url = "http://localhost:3000";

export const fetchCustomers = async () => {
  try {
    const {
      data: { customers },
    } = await axios.get(`${url}/customers`);

    return customers;
  } catch (error) {
    return console.log("err", error);
  }
};
