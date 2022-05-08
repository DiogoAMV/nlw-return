import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// the application listens to env PORT or 3333
app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running");
});
