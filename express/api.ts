import express, { Router } from "express";
import serverless from "serverless-http";
import ejs from "ejs";
import path from "path";

const api = express();
const router = Router();

api.set("view engine", "ejs");
api.set("views", path.join(__dirname, "views")); // Assuming your EJS files are in a 'views' folder

router.get("/hello", (req, res) => {
  // Render the "hello.ejs" file in the views folder
  res.render("hello", { message: "Hello World!" });
});

api.use("/api/", router);

export const handler = serverless(api);
