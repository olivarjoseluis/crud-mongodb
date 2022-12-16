import app from "./app.js";
import { PORT } from "./config.js";
//import { Express } from "express";

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
