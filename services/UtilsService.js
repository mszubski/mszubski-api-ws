/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Sprawdza czy serwer jest uruchomiony
* Sprawdza komunikację z API
*
* returns PongResponse
* */
const ping = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        dateTime: '2021-08-08T11:00:00.000Z',
        message: 'Pong',
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
  ping,
};
