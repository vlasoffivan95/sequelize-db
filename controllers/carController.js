const { Car } = require("../models");

module.exports.createCar = async (req, res, next) => {
  const { body } = req;
  const newCar = await Car.create(body);
  res.status(201).send({ data: newCar });
};

module.exports.getCars = async (req, res, next) => {
  // const cars = await Car.findAll({ attributes: { exclude: ["updatedAt"] } });
  const cars = await Car.findAll({ where: { isUsed: true } });
  res.send({ data: cars });
};
