import { Router } from "express";
import { connectionDB } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    await connectionDB;
    res.send("Api");
  } catch (error) {}
});

export default router;
