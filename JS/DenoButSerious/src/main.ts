import express from "express";
import cors from 'cors'
import contactDB from "./config/db.ts";
import authRoutes from "./routes/auth.ts"
import userRoutes from "./routes/protected.ts"

const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use("/~/auth", authRoutes)
app.use("/~/user", userRoutes)

app.get("/", (_req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Root of webpage",
  });
});

contactDB().then(() => {
  app.listen(Deno.env.get("SRV_PORT"), (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${Deno.env.get("SRV_PORT")}`);
  });
});
