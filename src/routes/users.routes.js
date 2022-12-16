import { Router } from "express";
import { userModel } from "../models/user.js";

const router = Router();

//Create user
router.post("/users", async (req, res) => {
  const user = new userModel(req.body);
  await user
    .save()
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});

//Get all users
router.get("/users", async (req, res) => {
  await userModel
    .find()
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});

//Get one user
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  await userModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});

//Update one user
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  await userModel
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});

//Delete one user
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await userModel
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});
export default router;
