/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Autoryzacja i działania z tokenem autoryzującym
* Zwraca token autentykacyjny
*
* singIn SingIn  (optional)
* returns Token
* */
const auth = ({ singIn }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        token: process.env.API_KEY,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  auth,
};
