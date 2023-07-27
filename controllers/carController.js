const { Car } = require("../models");

module.exports.createCar = async (req, res, next) => {
  const { body } = req;
  const newCar = await Car.create(body);
  res.status(201).send({ data: newCar });
};

module.exports.getCars = async (req, res, next) => {
  // const cars = await Car.findAll({ attributes: { exclude: ["updatedAt"] } });
  const cars = await Car.findAll({ where: { isUsed: false } });
  res.send({ data: cars });
};

module.exports.getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;
  const car = await Car.findByPk(carId);
  res.send({ data: car });
  // const [car] = await Car.findAll({ where: { id: carId }, });
  // res.send({ data: car });
};

module.exports.updateCar = async (req, res, next) => {
  const {
    params: { carId },
    body,
  } = req;

  const [updateRows, [car]] = await Car.update(body, {
    where: { id: carId },
    returning: true,
  });
  res.send({ data: car });
};

module.exports.updateCar2 = async (req, res, next) => {
  const {
    params: { carId },
    body,
  } = req;
  const car = await Car.findByPk(carId);

  const updatedCar = await car.update(body, { returning: true });
  res.send({ data: updatedCar });
};
