import express from "express";
import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";
//import "./config.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api", usersRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint nor found",
  });
});

export default app;
