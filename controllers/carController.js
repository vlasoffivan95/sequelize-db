const createHttpError = require("http-errors");
const { Car, Review,Seller } = require("../models");

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;
    const newCar = await Car.create(body);
    res.status(201).send({ data: newCar });
  } catch (error) {
    next(error);
  }
};

module.exports.getCars = async (req, res, next) => {
  // const cars = await Car.findAll({ attributes: { exclude: ["updatedAt"] } });
  const cars = await Car.findAll({
    include: [{ model: Review, required: true }, {model:Seller, as:"sellers", attributes:['name'] ,through:{attributes:[]}}],
  });

  res.send({ data: cars });
};

module.exports.getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;
  const car = await Car.findByPk(carId);
  if (car) {
    res.send({ data: car });
  } else {
    const error = createHttpError(404, "No such car found!");
    next(error);
  }
  // const [car] = await Car.findAll({ where: { id: carId }, });
  // res.send({ data: car });
};

module.exports.updateCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;

    const [updateRows, [car]] = await Car.update(body, {
      where: { id: carId },
      returning: true,
    });

    if (updateRows === 1) {
      res.send({ data: car });
    } else {
      const error = createHttpError(404, "No such car found....");
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar2 = async (req, res, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;
    const car = await Car.findByPk(carId);
    if (!car) {
      throw createHttpError(404, "No such car found....");
    }
    const updatedCar = await car.update(body, { returning: true });
    res.send({ data: updatedCar });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;
  const deletedCar = await Car.destroy({ where: { id: carId } });
  if (deletedCar === 1) {
    res.send({ data: carId });
  } else {
    next(createHttpError(404, "No found!"));
  }
};

module.exports.deleteCarv2 = async (req, res, next) => {
  const {
    params: { carId },
  } = req;
  const car = await Car.findByPk(carId);
  if (!car) {
    next(createHttpError(404, "No found car!"));
  } else {
    await car.destroy();
    res.send({ data: car });
  }
};
