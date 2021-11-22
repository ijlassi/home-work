const db = require("../config/db.config.js");

var express = require("express");
const User = db.user;
const Province = db.province;
const State = db.state;
const Tourite = db.touriste;
const Visitor = db.visitor;

exports.addProvince = async function (req, res) {
  try {
    const { nameProvince } = req.body;
    await Province.findOne({
      where: {
        nameProvince: nameProvince,
      },
    }).then(async (province) => {
      if (province) {
        res.status(201).send({ message: " province already added!" });
      } else {
        await Province.create({
          nameProvince,
        }).then((response) => {});
        res.status(200).send({ message: " province added successfully!" });
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.updateProvince = async function (req, res) {
  try {
    const { id, nameProvince } = req.body;
    await Province.update(
      {
        nameProvince,
      },
      {
        where: {
          id: id,
        },
      }
    ).then((response) => {
      res.status(201).send({ message: "province updated !" });
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.deleteProvince = async function (req, res) {
  try {
    const { id } = req.body;
    await Province.destroy({
      where: {
        id: id,
      },
    }).then((response) => {
      res.status(201).send({ message: "province deleted !" });
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.addState = async function (req, res) {
  try {
    const { provinceId, nameState } = req.body;

    await Province.findOne({
      where: {
        id: provinceId,
      },
    }).then(async (province) => {
      if (province) {
        await State.findOne({
          where: {
            nameState: nameState,
          },
        }).then(async (state) => {
          if (state) {
            res.status(201).send({ message: " state already added!" });
          } else {
            await State.create({
              nameState,
            }).then((state) => {
              province.addStates(state);
              res.status(200).send({ message: " state added successfully!" });
            });
          }
        });
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.updateState = async function (req, res) {
  try {
    const { id, nameState } = req.body;
    await State.update(
      {
        nameState,
      },
      {
        where: {
          id: id,
        },
      }
    ).then((response) => {
      res.status(201).send({ message: "state updated !" });
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.deleteState = async function (req, res) {
  try {
    const { id } = req.body;
    await State.destroy({
      where: {
        id: id,
      },
    }).then((response) => {
      res.status(201).send({ message: "state deleted !" });
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.addSiteTourisqtique = async function(req,res){
  try{

  }catch(err){
    res.status(402).send(err)
  }
}