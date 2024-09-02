const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Handle the case where success is false
      resolve(); // Do nothing or reject if you want to handle errors
    }
  });
};

module.exports = getPaymentTokenFromAPI;
