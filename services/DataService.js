const faker = require('faker');

/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Pobranie danych dla użytkownika
* Pobiera dane dla użytkownika.
*
* returns UserData
* */
const getUserData = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        jobTitle: faker.name.jobTitle(),
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        zipCode: faker.address.zipCode(),
        state: faker.address.state(),
        bankAccount: faker.finance.account(),
        financeAmount: faker.finance.amount(),
        currencyName: faker.finance.currencyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        favoriteMusic: faker.music.genre(),
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Pobranie danych dla samochodu
* Zwraca dane dla samochodu.
*
* returns VehicleData
* */
const getVehicleData = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        vehicle: faker.vehicle.vehicle(),
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        fuel: faker.vehicle.fuel(),
        vin: faker.vehicle.vin(),
        color: faker.vehicle.color(),
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
  getUserData,
  getVehicleData,
};
