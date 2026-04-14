import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index";
import sequelize from "./config/database";
import Category from "./models/Category";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.get("/", async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

export default app;
